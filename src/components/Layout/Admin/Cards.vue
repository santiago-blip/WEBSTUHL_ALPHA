<template>
    <div
        class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-sky-100 rounded-[30px] border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 class="mb-4 text-2xl font-bold text-transform: uppercase">{{ position.title }}</h3>
            <div class="flex justify-center items-baseline my-4">
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-left">
                <span class="bg-blue-300 text-blue-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Perfil</span>
                <li class="flex items-center space-x-3">
                    <!-- Icon -->
                    <span class="font-semibold mb-3">{{ position.description }}</span>
                </li>
                <span class="bg-blue-300 text-blue-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Experiencia</span>
                <li class="flex items-center space-x-3">
                    <!-- Icon -->
                    <span class="font-semibold mb-3">{{ position.years_of_experience }} {{ position.experience_description }}</span>
                </li>
                <span class="bg-blue-300 text-blue-900 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Idiomas</span>
                <li class="flex items-center space-x-3">
                    <!-- Icon -->
                    <span class="font-semibold mb-3">{{ position.languages }}</span>
                </li>
            </ul>
            </div>

            <button
            @click="$router.push({name:'details',params:{id:position.id}})"
            class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-[30px] text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
            Ver detalle
            </button>


            <!-- <RouterLink 
            :to="`/details/${ position.id }`"
            class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-[30px] text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
            >
            Ver detalle
            </RouterLink> -->
        </div>
</template>

<script setup>
/*
props
*/
const props = defineProps({
    position: {
        type: Object,
        required: true
    }
})

</script>