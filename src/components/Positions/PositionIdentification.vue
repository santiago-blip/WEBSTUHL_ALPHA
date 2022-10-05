<template>

<div class="w-full bg-white rounded-[30px] border shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="p-4 bg-white rounded-[30px] md:p-8 dark:bg-gray-800">
        <h2 class="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Identificación del cargo</h2>
        <ul class="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
            <li>
                <span class="font-bold text-gray-500 sm:text-xl dark:text-gray-400">Cargo:</span>
                <span class="font-bold text-gray-500 sm:text-xl dark:text-gray-400">{{ useStorePositions.getPositionsContent($route.params.id).positiondesc }}</span>
            </li>
            <li>
                <span class="font-bold text-gray-500 sm:text-xl dark:text-gray-400">Cargo jefe inmediato:</span>
                <span class="font-bold text-gray-500 sm:text-xl dark:text-gray-400">{{ useStorePositions.getPositionsContent($route.params.id).positionbossdesc }}</span>
            </li>
            <li>
                <span class="font-bold text-gray-500 sm:text-xl dark:text-gray-400">Cargos bajo su depedencia:</span>
                <span class="font-bold text-gray-500 sm:text-xl dark:text-gray-400">{{ useStorePositions.getPositionsContent($route.params.id).positiondependencies }}</span>
            </li>
            <li>
                 <span class="font-bold text-gray-500 sm:text-xl dark:text-gray-400">Nivel dentro de la estructura:</span>
                 <span class="font-bold text-gray-500 sm:text-xl dark:text-gray-400">{{ useStorePositions.getPositionsContent($route.params.id).organizationlevel }}</span>
                <b></b>
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