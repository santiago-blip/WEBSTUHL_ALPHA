<script setup>
    import {ref} from 'vue'
    import { useStorePositionsDetails } from '@/stores/positionsDetails'
    const store = useStorePositionsDetails()
    const props = defineProps({
        showModalVacancies:{
            type:Boolean,
            default:false
        }
    })
    const emit = defineEmits(['closeModalVacancies'])
    const responsabilitie = ref('')
    const objVacancie = {
                id: '',
                title: '',
                description: '',
                years_of_experience: 0,
                experience_description: '',
                languages: '',
                purpose: '',
                responsabilities: [],
                internal_relations_contacts: [],//{id: 1, name: 'Estudiantes'}
                internal_relations_objetives: [],//{id: 1, description: 'Brindar apoyo en procesos acádemicos y psicológicos.'}
                external_relations_contacts: [],//{id: 1, name: 'Psicológos'}
                external_relations_objetives: [],//{id: 3, description: 'Remitir procesos y mantener comunicación con los especialistas externos con el fin de realizar un trabajo interdisciplinario.'}
                academic: []//{id: 4, name: 'Profesional', desc: 'Psicología'}
               }
    const vacancie = ref(objVacancie)

    const disabledInputs = ref(false)
    const addResponsabilitie = ()=>{
        const value = responsabilitie.value.trim()
        if(value && !vacancie.value.responsabilities.find(x=>x==value)){
            vacancie.value.responsabilities.push(value)
            responsabilitie.value = ''
        }
    }
    const deleteResponsabilite = (responsabilitie)=>{
        vacancie.value.responsabilities.splice(vacancie.value.responsabilities.indexOf(responsabilitie),1)
    }
    const closeModal = ()=>{
        disabledInputs.value = false
        emit('closeModalVacancies')
    }
    const submitVacancie = ()=>{
        disabledInputs.value = true
        new Promise((resolve,reject)=>{
            store.addVacancie(vacancie.value)
            setTimeout(()=>{resolve(true)},2000)
        }).then(response=>{
            disabledInputs.value = false
            console.log('Mi objeto')
            console.log(vacancie.value)
            console.log('Lo que agregué en el store')
            console.log(store.positions)
            emit('closeModalVacancies')
            vacancie.value = ref(objVacancie)
        })
    }
</script>

<template>
    <div class="fixed min-h-screen min-w-full top-0 left-0 flex justify-center items-center opacity-100" v-show="showModalVacancies">
        <div class="shadow-2xl bg-white rounded-[30px]">
            <div class="flex justify-end p-5">
                <button  @click="closeModal" type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 dark:bg-red-200 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:hover:bg-red-300 inline-flex h-8 w-8"  data-dismiss-target="#alert-border-2" aria-label="Close">
                    <span  class="sr-only">Dismiss</span>
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        <div>

            <form>
                <div class="flex">
                    <div class="div-left w-96 px-4">
                        <div class="mb-6">
                            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre de la vacante</label>
                            <input :disabled="disabledInputs" v-model="vacancie.title" type="text" id="title" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nombre de la vacante" required="">
                        </div>
                        <div class="mb-6">
                            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descripción del cargo</label>
                            <textarea :disabled="disabledInputs" v-model="vacancie.description" cols="30" rows="10" id="description" class="resize-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></textarea>
                        </div>
                        <div class="mb-6">
                            <label for="purpose" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Propósito</label>
                            <textarea :disabled="disabledInputs" v-model="vacancie.purpose" cols="30" rows="10" id="description" class="resize-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></textarea>
                        </div>

                    </div>
                    <div class="div-middle w-96 px-4">
                        <div class="mb-6">
                            <label for="years_of_experience" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Años de experiencia</label>
                            <input :disabled="disabledInputs" v-model="vacancie.years_of_experience" type="number" min="0" id="years_of_experience" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="">
                        </div>
                        <div class="mb-6">
                            <label for="experience_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descripción de la experiencia</label>
                            <textarea :disabled="disabledInputs" v-model="vacancie.experience_description" cols="30" rows="10" id="experience_description" class="resize-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></textarea>
                        </div>
                        <div class="mb-6">
                            <label for="internal_relations_objetives" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Objetivo de las relaciones internas</label>
                            <select multiple :disabled="disabledInputs" v-model="vacancie.internal_relations_objetives" id="internal_relations_objetives" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option v-for="relationObjetives in store.relations_objetives" :value="relationObjetives">{{ relationObjetives.description }}</option>
                            </select>
                        </div>
                        <div class="mb-6">
                            <label for="external_relations_contacts" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contactos de relaciones externas</label>
                            <select multiple :disabled="disabledInputs" v-model="vacancie.external_relations_contacts" id="external_relations_contacts" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option v-for="externalContacts in store.external_contacts" :value="externalContacts">{{ externalContacts.name }}</option>
                            </select>
                        </div>
                        <div class="mb-6">
                            <label for="external_relations_objetives" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Objetivo de las relaciones externas</label>
                            <select multiple :disabled="disabledInputs" v-model="vacancie.external_relations_objetives" id="external_relations_objetives" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option v-for="relationObjetives in store.relations_objetives" :value="relationObjetives">{{ relationObjetives.description }}</option>
                            </select>
                            
                        </div>
                    </div>
                    <div class="div-right w-96 px-4">
                        <div class="mb-6">
                            <label for="responsabilities" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Responsabilidades</label>
                            <textarea :disabled="disabledInputs" @keydown.enter="addResponsabilitie" v-model="responsabilitie" cols="30" rows="10" id="description" class="resize-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required=""></textarea>
                            
                            <div class="break-before-left" v-if="vacancie.responsabilities?.length">
                                <ul class="list-item list-disc">
                                    <li v-for="(x,index) in vacancie.responsabilities" :key="index">           
                                        <div class="flex justify-between p-5">
                                        {{x}} 
                                        <button  @click="deleteResponsabilite(x)" type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-100 dark:bg-red-200 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:hover:bg-red-300 inline-flex h-8 w-8"  data-dismiss-target="#alert-border-2" aria-label="Close">
                                        <span  class="sr-only">Dismiss</span>
                                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mb-6">
                            <label for="internal_relations_contacts" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contactos de relaciones internas</label>
                            <select multiple :disabled="disabledInputs" v-model="vacancie.internal_relations_contacts" id="internal_relations_contacts" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option v-for="internalContact in store.internal_contacts" :value="internalContact">{{ internalContact.name }}</option>
                            </select>
                        </div>
                        <div class="mb-6">
                            <label for="academic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nivel académico</label>
                            <select multiple :disabled="disabledInputs" v-model="vacancie.academic" id="academic" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option v-for="profession in store.profession" :value="profession">{{ profession.name }}</option>
                            </select>
                        </div>
                        <div class="mb-6">
                            <label for="languages" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Idioma</label>
                            <input :disabled="disabledInputs" v-model="vacancie.languages" type="text" id="languages" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required="">
                        </div>
                    </div>
                </div>
                <div class="text-center pb-4">                
                        <button @click="submitVacancie" v-if="!disabledInputs" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
                        <div v-else class="flex justify-center">
                            <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                </div>
            </form>

        </div>
        </div>
    </div>
</template>
