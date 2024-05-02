<template>
    <section>
        <CommentsSortPanel v-if="!isLoading" />
        <BasePagination
            v-if="!isLoading"
            :current-page="currentPage"
            :total-pages="totalPages"
            @page-change="changePage"
            class="comments__pagination"
        />
        <h3 v-if="isLoading">Loading...</h3>
        <CommentsList v-if="!isLoading" :comments="paginatedComments" />
        <CommentsForm />
    </section>
</template>
<script>
import CommentsList from "./CommentsList.vue";
import CommentsForm from "./CommentsForm.vue";
import CommentsSortPanel from "./CommentsSortPanel.vue";
import BasePagination from "../../components/base/BasePagination.vue";

export default {
    name: "CommentsModule",
    components: {
        BasePagination,
        CommentsSortPanel,
        CommentsForm,
        CommentsList,
    },
    data() {
        return {
            currentPage: 1,
            itemsPerPage: 3,
        };
    },
    computed: {
        isLoading() {
            return this.$store.getters["comments/getLoading"];
        },
        comments() {
            return this.$store.getters["comments/getComments"];
        },
        totalPages() {
            return Math.ceil(this.comments.length / this.itemsPerPage);
        },
        paginatedComments() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.comments.slice(startIndex, endIndex);
        },
    },
    methods: {
        changePage(newPage) {
            this.currentPage = newPage;
        },
    },
    mounted() {
        this.$store.dispatch("comments/fetchComments");
    },
};
</script>

<style scoped>
section {
    max-width: 600px;
    width: 100%;
    max-height: 100%;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
}
.comments__pagination {
    @media (width <= 480px) {
        justify-content: center;
    }
}
</style>
