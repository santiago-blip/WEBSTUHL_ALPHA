<template>
    
<div class="flex">
    <SideBar></SideBar>
    
    <Router-view />
</div>

</template>

<script setup>
    /*
      imports
    */
import { ref } from 'vue'
import { RouterView } from 'vue-router';
import { useStorePositionsDetails } from '@/stores/positionsDetails'
import SideBar from '../components/Layout/Admin/SideBar.vue';
    
    /*
      add vacancies method
    */
   const newVacancie = ref('')
   const newVacancieRef = ref(null)

    const addVacancie = () => {
        useStorePositions.addVacancie(newVacancie.value)
        newVacancie.value = ''
    }
    
    /*
    store
    */
    
    const useStorePositions = useStorePositionsDetails()
    </script>

<style></style>