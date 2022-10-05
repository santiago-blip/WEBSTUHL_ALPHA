
<template>
<div class="">
<div>
<header class="bg-white dark:bg-gray-900">
    <NavBar/>
</header>
</div>
    
<div>   
<section class="mt-4 bg-white dark:bg-gray-900">
    <Hero/>
</section>
</div> 

<div>
<section class="bg-white dark:bg-gray-900">
   <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <Cards
          v-for="position in storePositions.positions"
          :key="position.id"
          :position="position"
          />
      </div>
  </div>
</section>
</div>


<div>
<footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <FooterLanding/>
</footer>
</div>

</div>

</template>

<script setup>
/*
  imports
*/
  import { ref } from 'vue'
  import NavBar from '@/components/Layout/NavBar.vue'
  import Hero from '@/components/Layout/Hero.vue'
  import Cards from '@/components/Layout/Cards.vue'
  import FooterLanding from '@/components/Layout/FooterLanding.vue'
  import { useStorePositionsDetails } from '@/stores/positionsDetails'

/*
store
*/

const storePositions = useStorePositionsDetails()
</script>