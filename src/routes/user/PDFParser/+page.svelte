<script lang='ts'>

import { onMount } from 'svelte';
import { Dropzone } from 'flowbite-svelte';
import { Alert } from 'flowbite-svelte';
import { InfoCircleSolid } from 'flowbite-svelte-icons';
import { Spinner } from 'flowbite-svelte';
import { DateInput } from 'date-picker-svelte'

let date = new Date();
let dateClean;

// Reactive statement
$: dateClean = formatDate(date);

function formatDate(d) {
    let day = d.getDate().toString().padStart(2, '0');
    let month = (d.getMonth() + 1).toString().padStart(2, '0'); // getMonth() returns 0-11
    let year = d.getFullYear();
    return `${day}/${month}/${year}`;
}

$: if (dateClean) {
    console.log("Date changed:", formatDate(date));
}

let value = []; // Store file names

let pollingIntervalId;
let maxPollingAttempts = 15;
let tableData = []; // Store data for the table
let isLoaded = false;
let UPLOADBOX;
let spinnybox = 'hidden';
let countaccurate;
let pollingCount = 0;

const dropHandle = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.items 
    //@ts-ignore
        ? Array.from(event.dataTransfer.items).filter(item => item.kind === 'file').map(item => item.getAsFile())
        : Array.from(event.dataTransfer.files);
    
    if (files.length > 0) {
        value.push(files[0].name);
        handleFileUpload(files[0]);
    }
};

const handleChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
        value.push(files[0].name);
        handleFileUpload(files[0]);
    }
};

function transformDataToTableFormat(datatoconvert) {
    // Check if data is empty or not an array
    if (!Array.isArray(datatoconvert) || datatoconvert.length === 0) {
        return [];
    }

    // Extract headers
    const headers = Object.keys(datatoconvert[0]);

    // Map data to array format
    const rows = datatoconvert.map(entry => headers.map(header => entry[header]));

    // Log for debugging
    console.log('Headers:', headers);
    console.log('First row:', rows[0]);

    // Combine headers and rows
    return [headers, ...rows];
}


async function handleFileUpload(file) {
    if (pollingIntervalId) {
        clearInterval(pollingIntervalId);
        pollingCount = 0; // Reset the polling count on a new upload
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const uploadResponse = await fetch('/api/outray/upload', {
            method: 'POST',
            body: formData,
        });

        if (!uploadResponse.ok) {
            throw new Error('File upload failed');
        }

        const uploadResult = await uploadResponse.json();
        console.log('File uploaded successfully:', uploadResult);

        // Hide the upload box upon successful upload
        UPLOADBOX = 'hidden';

        // Start polling the endpoint every 200ms, up to a total of 3 seconds
        pollingIntervalId = setInterval(async () => {
            pollingCount++;
            
            // Check if max polling attempts reached
            if (pollingCount >= maxPollingAttempts) {
                console.error('Max polling attempts reached');
                clearInterval(pollingIntervalId);
                return;
            }

            const response = await fetch('/api/outray/receive', { method: 'GET' });
            const jsonResponse = await response.json();
            
            countaccurate = jsonResponse.countaccurate;
            let data = jsonResponse.data;
            console.log(countaccurate);
            console.log('Fetched data:', data);

            if (data && Object.keys(data).length !== 0) {
                console.log('Non-empty data received, stopping polling');
                clearInterval(pollingIntervalId);

                if (typeof data === 'string') {
                    try {
                        const parsedData = JSON.parse(data);
                        console.log('Parsed data:', parsedData);

                        if (Array.isArray(parsedData)) {
                            tableData = transformDataToTableFormat(parsedData);
                            console.log('Transformed table data:', tableData);
                        } else {
                            console.error('Parsed data is not an array:', parsedData);
                        }
                    } catch (error) {
                        console.error('Error parsing JSON:', error);
                    }
                } else {
                    console.error('Data is not a string:', data);
                }
                return; // Stop the function execution here
            } else {
                console.log('Empty data received, continuing polling');
            }

        }, 200);

    } catch (error) {
        console.error('Error:', error);
    }
}

const showFiles = (files) => {
    if (files.length === 1) return files[0];
    let concat = files.join(', ');
    return concat.length > 40 ? `${concat.slice(0, 40)}...` : concat;
};

let alertcolour;
let alertstatus = 'hidden';
let alertheading;
let alertmessage;

// TABLEVIEW
onMount(async () => {
    await import("active-table");
    while (tableData.length === 0) {
        await new Promise(resolve => setTimeout(resolve, 250));
    }
    spinnybox = 'hidden';
    isLoaded = true;
    if (countaccurate) {
        alertcolour = 'green';
        alertstatus = '';
        alertheading = 'Success: ';
        alertmessage = 'Validated processed number of consignments against claimed number of consignments within document!';
        // Introduce a timeout of 5 seconds before reverting
        setTimeout(() => {
            alertcolour = '';
            alertstatus = 'hidden';
        }, 8000);
    } else {
        alertcolour = 'red'
        alertstatus = ''
        alertheading = 'Ruh Roh';
        alertmessage = 'Processed consignments did NOT match claimed consignments!';
        // Introduce a timeout of 5 seconds before reverting
        setTimeout(() => {
            alertcolour = '';
            alertstatus = 'hidden';
        }, 8000);
    }

});

let customColumnsSettingsString = '[\
    { "headerName": "Venue name", "isColumnResizable":"true" ,"cellStyle": {"width": "50px"} },\
    { "headerName": "Address", "isColumnResizable":"false", "cellStyle": {"width": "100px"} },\
    { "headerName": "Suburb", "cellStyle": {"width": "150"} },\
    { "headerName": "State", "cellStyle": {"width": "75px"} },\
    { "headerName": "Postcode", "cellStyle": {"width": "95px"} },\
    { "headerName": "Phone", "cellStyle": {"width": "100px"} },\
    { "headerName": "Instructions", "cellStyle": {"width": "200px"} },\
    { "headerName": "Consignment", "cellStyle": {"width": "115px"} },\
    { "headerName": "Weight", "cellStyle": {"width": "85px"} },\
    { "headerName": "Type", "cellStyle": {"width": "100px"} }\
]';

let customColumnsSettings = JSON.parse(customColumnsSettingsString);



let activeTable;



async function handleDownloadCSV() {
    console.log('Download initialized');

    const data = activeTable.getData();
    const dateString = dateClean

    const payload = {
        tableData: data,
        dateString: dateString
    };

    const response = await fetch('/api/outray/csvprocess', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    // Handle the file download
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'processed_data.csv';
    document.body.appendChild(a); // Append <a> to <body>
    a.click();
    a.remove(); // Clean up
}


</script>

<main >
    <div class="flex flex-col items-center justify-center">

    <Alert border color={alertcolour} class={`w-2/4 h-16 mb-8 ${alertstatus}`}>
            <InfoCircleSolid slot="icon" class="w-4 h-4" />
            <span class="font-medium">{alertheading}</span>
            {alertmessage}
    </Alert>

    <div class={`${UPLOADBOX} w-2/5 flex flex-col justify-center z-25`}>

        <Dropzone
            id="dropzone"
            inputClass = "p-4 "
            defaultClass={`items-center h-48 mb-8 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100`}
            on:drop={dropHandle}
            on:dragover={(event) => {
            event.preventDefault();
            }}
            on:change={handleChange}>
                <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            {#if value.length === 0}
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload PDF file</span> or drag and drop</p>
            {:else}
                <p>{showFiles(value)}</p>
            {/if}
        </Dropzone>
    </div>

    <Spinner size="24" color="purple" class={spinnybox}/>


    {#if isLoaded}

            <active-table
            
            bind:this={activeTable}
            isColumnResizable={false}
            customColumnsSettings={customColumnsSettings}
            dragColumns={false}
            columnDropdown={{displaySettings: {isAvailable: false}}}
            displayAddNewRow={false}
            displayAddNewColumn={false}
            data={tableData}
            tableStyle='{{"borderRadius": "5px", "border": "unset", "backgroundColor": "black", "width":"100%"}}'
            cellStyle='{{"color": "white", "borderRight": "1px solid #00000029"}}'
            columnResizerColors='{{"click": "#727272"}}'
            stripedRows='{{"odd": {"backgroundColor": "#4f4f4f"}, "even": {"backgroundColor": "#373737"}}}'
            headerStyles='{{"default": {"backgroundColor": "#2d2d2d"}, "hoverColors": {"backgroundColor": "#353535"}}}'
            rowHoverStyles='{{"style":{"backgroundColor": "#d6d6d630", "transitionDuration": "0.05s"}}}'
            headerIconStyle='{{
            "filterColor": "brightness(0) saturate(100%) invert(98%) sepia(2%) saturate(6%) hue-rotate(76deg) brightness(100%) contrast(104%)"
            }}'


            frameComponentsStyles='{{
                "style": {"hoverColors": {"backgroundColor": "#111111"}},
                "inheritHeaderColors": true
            }}'
            />
            
            <div class="flex justify-center items-center mt-6 gap-14">

                <div class="flex flex-col pb-2">
                    <p>Select Delivery Date</p>
                    <DateInput class="w-fit border-4 rounded-md" bind:value={date} format='dd/MM/yyyy' dynamicPositioning={true} closeOnSelection={true}/>
                </div>
                <div class="">
                    <button class="bg-slate-400/75 hover:bg-slate-600/75 text-gray-800 font-bold rounded-lg w-48 h-16 flex flex-row justify-center items-center transition duration-200" on:click={handleDownloadCSV}>
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Download CSV</span>
                    </button>
                </div>
                
            </div>
    {/if}
            
    


    


    </div>

</main> 

