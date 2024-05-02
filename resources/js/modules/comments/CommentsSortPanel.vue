<template>
    <div class="sort-panel">
        <BaseRadioButtonGroup
            v-model="sortField"
            :options="sortFieldOptions"
            group="Sort by:"
        />
        <BaseRadioButtonGroup
            v-model="sortOrder"
            :options="sortOrderOptions"
            group="Sort order:"
        />
    </div>
</template>
<script>
import BaseRadioButtonGroup from "../../components/base/BaseRadioButtonGroup.vue";

export default {
    name: "CommentsSortPanel",
    components: { BaseRadioButtonGroup },
    data() {
        return {
            sortFieldOptions: ["id", "date"],
            sortField: "id",
            sortOrderOptions: ["asc", "desc"],
            sortOrder: "asc",
        };
    },
    computed: {
        sortOptions() {
            return {
                field: this.sortField,
                order: this.sortOrder,
            };
        },
    },
    watch: {
        sortOptions: {
            handler() {
                this.$store.dispatch("comments/sortBy", this.sortOptions);
            },
            deep: true,
        },
    },
    mounted() {
        this.$store.dispatch("comments/sortBy", this.sortOptions);
    },
};
</script>

<style scoped>
.sort-panel {
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: var(--white-color);
    display: flex;
    gap: 2rem;
}
</style>
