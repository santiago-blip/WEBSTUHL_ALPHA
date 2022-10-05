<template>
    <div class="flex text-center">
        <h2 class="mb-3 text-3xl font-extrabold text-gray-900 dark:text-white">{{ useStorePositions.getPositionsContent($route.params.id).title }}</h2>
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