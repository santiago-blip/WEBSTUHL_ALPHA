<template>


<div class="w-full bg-white rounded-[30px] border shadow-md dark:bg-gray-800 dark:border-gray-700">
    <h2 class="p-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Relaciones</h2>
    <ul class="flex flex-wrap text-xl font-bold text-center text-gray-900 rounded-t-[30px] border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
        <li class="mr-2">
            <button id="interncontact-tab" data-tabs-target="#interncontact" type="button" role="tab" aria-controls="interncontact" aria-selected="true" class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500 hover:text-blue-600 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"> Internos</button>
        </li>
        <li class="mr-2">
            <button id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false" class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700">Externos</button>
        </li>
    </ul>
    <div id="defaultTabContent">
        <div class="p-4 bg-white rounded-[30px] md:p-8 dark:bg-gray-800" id="interncontact" role="tabpanel" aria-labelledby="interncontact-tab">
             <ul class="space-y-1 list-disc px-4 text-gray-500 dark:text-gray-400">
            <li class="text-gray-500 sm:text-xl dark:text-gray-400"
            v-for="(responsability,index) in useStorePositions.getPositionsContent($route.params.id).responsabilities"
            :key="index"
            >
            {{ responsability }}
            </li>
        </ul>
        </div>
        <div class="hidden p-4 bg-white rounded-[30px] md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab">
            <!-- List -->
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">{{ useStorePositions.getPositionsContent($route.params.id).purpose }}</p>
        </div>
    </div>
</div>



</template>

<script setup>
/*
  imports
*/
    //import { ref } from 'vue'
    import { useStorePositionsDetails } from '@/stores/positionsDetails'
    import { useRoute } from 'vue-router'

/*
router
*/

  const route = useRoute
  

/*
store
*/

const useStorePositions = useStorePositionsDetails()
</script>