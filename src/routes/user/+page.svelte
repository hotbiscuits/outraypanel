<script>
/** @type {import('./$types').PageData} */
import { Card } from 'flowbite-svelte';
import { TextPlaceholder } from 'flowbite-svelte';
import { onMount } from "svelte";


let Chart;
let initTE;

onMount(() => {
    import('tw-elements')
      .then((module) => {
        Chart = module.Chart;
        initTE = module.initTE;
        initTE({ Chart }, { allowReinits: true });

        //Data
        const dataChartOptionsExample = {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
            {
                label: 'Traffic',
                data: [30, 15, 62, 65, 61, 6],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
            ],
        },
        };

        // Options
        const optionsChartOptionsExample = {
        options: {
            scales: {
            x:
                {
                ticks: {
                    color: '#4285F4',
                },
                },
            y:
                {
                ticks: {
                    color: '#f44242',
                },
                },
            },
        },
        };

        new Chart(
            document.getElementById('chart-options-example'),
            dataChartOptionsExample,
            optionsChartOptionsExample
        );//END

        // Chart
        const dataLine = {
        type: 'line',
        data: {
            labels: [' ', ' ' , ' ' , ' ' , ' ' , ' ' , '  '],
            datasets: [
            {
                label: "Kyle's pay over time",
                data: [30, 28, 25, 23, 12, 2, 0],
            },
            ],
        },
        };

        new Chart(document.getElementById('line-chart'), dataLine);//END

      })
      .catch(error => console.error('Failed to load tw-elements', error));
});






</script>






<div class="flex justify-center pb-8">
    <h1 class="h1 font-sans">Outrayjus Web Dashboard</h1>
</div>
<div class="grid grid-cols-4 grid-rows-1 gap-4 pb-6 ">
    <Card href="/user" class="bg-[#1f2937] flex items-center hover:bg-slate-600 border-2 hover:border-indigo-200 hover:border-2">
        <TextPlaceholder size="sm" class="w-5/6" />
    </Card>
    <div class="flex flex-col justify-center items-center">
    <Card href="/user/PDFParser" class="bg-[#1f2937]  flex items-center hover:bg-slate-600 border-2 hover:border-indigo-200 hover:border-2">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white/90">Bibendum PDF Parser</h5>
        <p class="font-normal text-white/50 leading-tight">Extract delivery consignments from the Bibendum manifest as a CSV to be imported to CartonCloud.</p>
    </Card>
    <p class="text-xl font-extrabold justify-center items-center drop-shadow-[0_1.2px_1.2px_rgba(50,50,100,0.5)]">NOW WITH ITEMS</p>
    </div>
    <Card href="/user" class="bg-[#1f2937] flex items-center hover:bg-slate-600 border-2 hover:border-indigo-200 hover:border-2">
        <TextPlaceholder size="sm" class="w-5/6" />
    </Card>

    <Card href="/user" class="bg-[#1f2937] flex items-center hover:bg-slate-600 border-2 hover:border-indigo-200 hover:border-2">
        <TextPlaceholder size="sm" class="w-5/6" />
    </Card>
</div>

<div class="flex items-center justify-center gap-8 mt-4">
    <div class="w-1/2 border rounded-md p-2">
        <canvas id="chart-options-example"></canvas>
    </div>

    <div class="h-max w-1/2 border rounded-md p-2">
        <canvas id="line-chart"></canvas>
    </div>
</div>

<div class="flex flex-row items-center text-center justify-center gap-8 mb-6">
    <div class="w-1/2  p-2">
        <p class='text-sm'>Dynamically loaded & reactive charts #bar </p>
    </div>

    <div class="w-1/2  p-2">
        <p class='text-sm'>Dynamically loaded & reactive charts #line </p>
    </div>
</div>



Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.

Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.

Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.

Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit magna, hendrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede.

Donec eget tellus non erat lacinia fermentum. Donec in velit vel ipsum auctor pulvinar. Proin ullamcorper urna et felis. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.

