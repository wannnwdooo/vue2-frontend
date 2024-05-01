<template>
    <div class="pagination">
        <BaseButton outline @click="firstPage" :disabled="currentPage === 1"
            >First</BaseButton
        >
        <BaseButton outline @click="prevPage" :disabled="currentPage === 1"
            >Prev</BaseButton
        >
        <BaseButton
            outline
            v-for="page in pageRange"
            :key="page"
            :class="{ active: page === currentPage }"
            @click="setPage(page)"
        >
            {{ page }}
        </BaseButton>
        <BaseButton
            outline
            @click="nextPage"
            :disabled="currentPage === totalPages"
        >
            Next
        </BaseButton>
        <BaseButton
            outline
            @click="lastPage"
            :disabled="currentPage === totalPages"
        >
            Last
        </BaseButton>
    </div>
</template>
<script>
import BaseButton from "./BaseButton.vue";

export default {
    name: "BasePagination",
    components: { BaseButton },
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
    },
    computed: {
        pageRange() {
            const delta = 1;
            const left = Math.max(1, this.currentPage - delta);
            const right = Math.min(this.totalPages, this.currentPage + delta);
            const range = [];
            for (let i = left; i <= right; i++) {
                range.push(i);
            }
            return range;
        },
    },
    methods: {
        setPage(page) {
            this.$emit("page-change", page);
        },
        prevPage() {
            this.setPage(this.currentPage - 1);
        },
        nextPage() {
            this.setPage(this.currentPage + 1);
        },
        firstPage() {
            this.setPage(1);
        },
        lastPage() {
            this.setPage(this.totalPages);
        },
    },
};
</script>

<style scoped>
.pagination {
    display: flex;
    gap: 0.25rem;
}
.active {
    background-color: var(--purple-color);
    color: var(--white-color);
}
</style>
