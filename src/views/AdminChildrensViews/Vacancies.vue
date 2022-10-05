<script setup>
import Cards from '@/components/Layout/Admin/Cards.vue'
import { useStorePositionsDetails } from '@/stores/positionsDetails'
import { ref } from 'vue';
import ModalCreateVacancies from '../../components/Layout/Admin/ModalCreateVacancies.vue';

const storePositions = useStorePositionsDetails()
const showModalVacancies = ref(false)
const openModalVacancies = ()=> showModalVacancies.value = true
const closeModalVacancies = ()=> showModalVacancies.value = false
</script>
<template>
<section class="bg-white dark:bg-gray-900">
   <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="flex flex-wrap mb-5">
        <div class="text-center w-3/4"><h2 class="text-5xl">VACANTES</h2></div>
        <div class="text-center w-1/5">
            <button @click="openModalVacancies" type="button" class="text-custom-blue hover:text-white border border-custom-blue hover:bg-custom-blue focus:ring-4 focus:outline-none focus:bg-custom-blue focus:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-custom-blue">
                <i class="fa-solid fa-plus mr-1"></i>Nueva vacante
            </button>
        </div>
    </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <Cards
          v-for="position in storePositions.positions"
          :key="position.id"
          :position="position"
          />
      </div>
  </div>
  <ModalCreateVacancies @closeModalVacancies="closeModalVacancies" :showModalVacancies="showModalVacancies">
  </ModalCreateVacancies>
</section>
</template>