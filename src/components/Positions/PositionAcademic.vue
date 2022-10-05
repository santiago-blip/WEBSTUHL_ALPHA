<template>

<div class="w-full bg-white rounded-[30px] border shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="p-4 bg-white rounded-[30px] md:p-8 dark:bg-gray-800">
        <h2 class="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Formación</h2>
        <ul class="space-y-1 list-disc px-4 text-gray-500 dark:text-gray-400">
            <li class="text-gray-500 sm:text-xl dark:text-gray-400"
            v-for="(profession,index) in useStorePositions.getPositionsContent($route.params.id).academic"
            :key="index"
            >
            {{ profession.name }} en {{ profession.desc}}
            </li>
        </ul>
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