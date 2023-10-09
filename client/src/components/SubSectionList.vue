<template>
    <div
    id="subSections-container"
    >
        <div 
        id="subSection-container"
        v-for="subSection in subSections"
        :key="subSection.id"
        >
            <RouterLink :to="{ name: 'category', params: { id: subSection.id, title: subSection.title } }">
                <div id="subSection-card">
                    <img :src="subSection.iconImg" alt="img">
                    <h3>{{ subSection.title }}</h3>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script>
import { RouterLink} from 'vue-router';
export default {
    components: {
        RouterLink
    },
    props: {
        subSections: {
            required: true,
            type: Array
        }
    }
}
</script>


<style lang="scss" scoped>

</style>