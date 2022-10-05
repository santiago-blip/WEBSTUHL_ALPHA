<template>
    <section class="bg-gradient-to-r from-cyan-300 to-blue-200 dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"><!--Parent div open-->
            <div class="flex justify-center">
                <PositionTitle/>
            </div>
            <div class="space-y-8 "><!--Items open  md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0-->
                <div>
                    <PositionIdentification/>
                </div>
                <div>
                    <PositionPurpose/>
                </div>

                <div>
                    <PositionResponsabilities/>
                </div>

                <div>
                    <PositionRelationscopy/>
                </div>

                <div>
                    <PositionAcademiccopy/>
                </div>

                <!-- <div>
                    <PositionAcademicExtra/>
                </div> -->

                <div>
                    <PositionExperiencie/>
                </div>

                <div>
                    <PositionCompetence/>
                </div>

                <div>
                    <PositionConditions/>
                </div>

                <!-- <div>
                    <PositionBackup/>
                </div> -->

                <div>
                    <PositionManagementResponsabilities/>
                </div>

                <div>
                    <PositionContact/>
                </div>

                <div>
                    <PositionDataInfo/>
                </div>

            </div> <!--Items close-->
        </div><!--Parent div close-->
    </section>
</template>

<script setup>
/*
  imports
*/
    import { ref } from 'vue'
    import PositionTitle from '@/components/Positions/PositionTitle.vue'
    import PositionPurpose from '@/components/Positions/PositionPurpose.vue'
    import PositionIdentification from '@/components/Positions/PositionIdentification.vue'
    import PositionResponsabilities from '../components/Positions/PositionResponsabilities.vue'
    import PositionRelations from '../components/Positions/PositionRelations.vue'
    import PositionRelationscopy from '../components/Positions/PositionRelationscopy.vue'
    import PositionAcademic from '../components/Positions/PositionAcademic.vue'
    import PositionAcademiccopy from '../components/Positions/PositionAcademiccopy.vue'
    import PositionAcademicExtra from '../components/Positions/PositionAcademicExtra.vue'
    import PositionExperiencie from '../components/Positions/PositionExperiencie.vue'
    import PositionCompetence from '../components/Positions/PositionCompetence.vue'
    import PositionConditions from '../components/Positions/PositionConditions.vue'
    import PositionBackup from '../components/Positions/PositionBackup.vue'
    import PositionContact from '../components/Positions/PositionContact.vue'
    import PositionDataInfo from '../components/Positions/PositionDataInfo.vue'
    import { useStorePositionsDetails } from '@/stores/positionsDetails'


/*
store
*/

const useStorePositions = useStorePositionsDetails()
</script>