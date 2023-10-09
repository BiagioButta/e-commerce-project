<template>
    <div id="section-list">
        <ul>
            <li
            v-for="section in sections"
            :key="section.id"
            >
                <RouterLink :to="{ name: 'subSection', params: { id: section.id, title: section.title } }">
                    {{ section.title }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
    components: {
        RouterLink
    },
    props: {
        sections: {
            required: true,
            type: Array
        }
    },
    data() {
        return {
            isHamburgerMenuOpen: true
        }
    },
    methods: {
        toggleDiplaynone(){
            this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen
        }
    },
}
</script>

<style lang="scss" scoped>

</style>