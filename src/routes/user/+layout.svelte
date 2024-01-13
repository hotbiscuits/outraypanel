<script>

import { page } from '$app/stores';
import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
import { ChartPieSolid, GridSolid, ShoppingCartSolid, MailBoxSolid, UserSolid, ArrowRightToBracketSolid, FileEditSolid } from 'flowbite-svelte-icons';
import { Button } from 'flowbite-svelte';

import Logo from '$lib/logo.svelte';

import { breadcrumbs } from '$lib/stores/breadcrumbStore';

$: activeUrl = $page.url.pathname;
let spanClass = 'flex-1 ms-3 whitespace-nowrap';
let activeClass = 'flex items-center py-3 px-2 text-primary-200 bg-primary-200 dark:bg-[#0c4a6e] rounded-lg border border-sky-800 dark:text-grey-200 dark:hover:border-gray-500 dark:hover:border';
let nonActiveClass = 'flex w-full items-center py-3 px-2 border border-gray-700 rounded-md dark:text-white dark:bg-[#383838]/50 dark:hover:bg-gray-700/75 dark:hover:border-gray-700 dark:hover:border';
let dropactiveClass = 'flex ml-5 items-center py-3 px-2 border border-gray-700 rounded-md dark:text-white dark:bg-[#383838]/50 dark:hover:bg-gray-700/75 dark:hover:border-gray-500 dark:hover:border';


let analyticsOpen = false;
let toolsOpen = false;


</script>

<div class="w-full h-screen">
    <div class="grid grid-cols-[auto,1fr]  grid-rows-[auto,1fr] h-screen ">
    <!-- SIDEBAR -->
    <div class="row-span-3 bg-stone-800 dark"> 
        <div class="sticky top-0 max-w-full ">
            <div class="flex justify-center p-4">
                <Logo width=150 height=150 />
            </div>
        <Sidebar {activeUrl} {activeClass} {nonActiveClass} class="rounded-sm " asideClass="w-[250]">
            <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded  bg-stone-800">
            <SidebarGroup>
                <SidebarItem label="Dashboard" href="/user"  class="rounded-md text-base">
                <svelte:fragment slot="icon">
                    <ChartPieSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                </svelte:fragment> 
                </SidebarItem>

                
                <!-- ANALYTICS GROUP MENU -->
                <SidebarDropdownWrapper label="Analytics" ulClass="rounded-md py-2 space-y-2 flex flex-col" btnClass={nonActiveClass} closedBgClass="bg-[#383838]/50 " openBgClass="bg-gray-500/10 rounded-md">
                    <svelte:fragment slot="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" {...$$props}><path fill="#888888" d="M8 12q-.425 0-.712.288T7 13v3q0 .425.288.713T8 17q.425 0 .713-.288T9 16v-3q0-.425-.288-.712T8 12m8-5q-.425 0-.712.288T15 8v8q0 .425.288.713T16 17q.425 0 .713-.288T17 16V8q0-.425-.288-.712T16 7m-4 7q-.425 0-.712.288T11 15v1q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-1q0-.425-.288-.712T12 14m-7 7q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm7 7q.425 0 .713-.288T13 11q0-.425-.288-.712T12 10q-.425 0-.712.288T11 11q0 .425.288.713T12 12"/></svg>
                    </svelte:fragment>
                    <SidebarDropdownItem class="mr-4 " label="Glens SQL 1" />   
                    <SidebarDropdownItem class="mr-4"  label="Glens SQL 2" />
                </SidebarDropdownWrapper>

                    <!-- INCIDENTS  GROUP MENU -->
                <SidebarDropdownWrapper label="Incidents"  ulClass="rounded-md py-2 space-y-2 flex flex-col" btnClass={nonActiveClass} closedBgClass="bg-[#383838]/50 " openBgClass="bg-gray-500/10 rounded-md">
                    <svelte:fragment slot="icon">
                        <ShoppingCartSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    </svelte:fragment>
                    <SidebarDropdownItem  class="mr-4" label="Lodge Stock Incident" />
                    <SidebarDropdownItem  class="mr-4"  label="Incident Management" />
                </SidebarDropdownWrapper>

                <SidebarItem label="Delivery Scheduling" href="#">
                    <svelte:fragment slot="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" {...$$props}><path fill="#888888" d="M17 22v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5 20q-.825 0-1.412-.587T3 18V6q0-.825.588-1.412T5 4h1V2h2v2h6V2h2v2h1q.825 0 1.413.588T19 6v6.1q-.5-.075-1-.075t-1 .075V10H5v8h7q0 .5.075 1t.275 1zM5 8h12V6H5zm0 0V6z"/></svg>
                    </svelte:fragment>
                </SidebarItem>

                <SidebarItem label="Customer Management" href="#">
                    <svelte:fragment slot="icon">
                        <UserSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    </svelte:fragment>
                </SidebarItem>
                    <!--- SOP --->
                <SidebarItem label="Standard Operational Procedures" href="#">
                    <svelte:fragment slot="icon">
                        <ArrowRightToBracketSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    </svelte:fragment>
                </SidebarItem>
                    <!--- TOOLS GROUP -->
                <SidebarDropdownWrapper label="Tools"  ulClass="rounded-md py-2 space-y-2 flex flex-col" btnClass={nonActiveClass} closedBgClass="bg-[#383838]/50 " openBgClass="bg-gray-500/10 rounded-md">
                    <svelte:fragment slot="icon">
                    <ShoppingCartSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    </svelte:fragment>
                    <SidebarDropdownItem  class="mr-4" label="Bibendum PDF Parser" href="/user/PDFParser"/>
                    <SidebarDropdownItem  class="mr-4" label="CC API Retrieval" />
                </SidebarDropdownWrapper>

                    <!--- SYSTEM GROUP -->
                    <SidebarDropdownWrapper label="System"  ulClass="rounded-md py-2 space-y-2 flex flex-col" btnClass={nonActiveClass} closedBgClass="bg-[#383838]/50 " openBgClass="bg-gray-500/10 rounded-md">
                    <svelte:fragment slot="icon">
                    <ShoppingCartSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    </svelte:fragment>
                    <SidebarDropdownItem label="User Management" />
                    <SidebarDropdownItem label="Global Settings" />
                    <SidebarDropdownItem label="Logs" />
                </SidebarDropdownWrapper>
            </SidebarGroup>
            </SidebarWrapper>
        </Sidebar>
        </div>

    </div>
    <div class="flex h-16 flex-row justify-end items-center bg-stone-800/50 p-4 sticky top-0 max-w-full z-50">

        <!-- Header Content -->
        <a href="https://app.cartoncloud.com/" target="_blank">
            <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div class="absolute inset-0 w-3 bg-sky-800 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span class="relative text-black group-hover:text-white">Carton Cloud</span>
            </button>
        </a>
    </div>
    <div class=" bg-stone-200 ">   
        <div class=" bg-white border m-3 p-8 rounded-lg">
            <!-- Page Content -->
            <slot></slot> 
            <!-- Page Content -->
        </div>
    </div>
        <div class="flex-row col-span-1 bg-slate-300/20 h-16 items-center p-4">
            <div class="flex justify-center">
                Designed for Outrayjus Pty Ltd 2023 - Evaluation Software
            </div>
        </div>
    </div>
</div>
