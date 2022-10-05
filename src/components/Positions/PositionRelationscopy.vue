<template>

<div class="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">

    <div class="flex flex-col w-full bg-white rounded-[30px] border shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4 bg-white rounded-[30px] md:p-8 dark:bg-gray-800">
            <h2 class="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Contactos internos</h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">{{ useStorePositions.getPositionsContent($route.params.id).purpose }}</p>
        </div>
   </div>

   <div class="flex flex-col w-full bg-white rounded-[30px] border shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4 bg-white rounded-[30px] md:p-8 dark:bg-gray-800">
            <h2 class="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Contactos externos</h2>
            <p class="text-gray-500 sm:text-xl dark:text-gray-400">{{ useStorePositions.getPositionsContent($route.params.id).purpose }}</p>
        </div>
   </div>

</div>

<!-- 
<div class="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
           Pricing Card -->



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