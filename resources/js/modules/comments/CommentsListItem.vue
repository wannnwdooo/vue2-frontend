<template>
    <article class="comment">
        <div>
            <p>#{{ this.comment.id }}</p>
            <p class="comment__name">&nbsp;{{ this.comment.name }}</p>
            <p>{{ this.comment.date }}</p>
            <BaseButton
                color="red"
                outline
                @click="deleteComment"
                class="comment__button"
                >Delete</BaseButton
            >
        </div>
        <p class="comment__text">{{ this.comment.text }}</p>
    </article>
</template>
<script>
import BaseButton from "../../components/base/BaseButton.vue";

export default {
    name: "CommentsListItem",
    components: { BaseButton },
    props: {
        comment: {
            id: Number,
            name: String,
            date: String,
            text: String,
        },
    },
    methods: {
        deleteComment() {
            this.$store.dispatch("comments/deleteComment", this.comment.id);
        },
    },
};
</script>

<style scoped>
.comment {
    width: 100%;
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: 0.5rem;
    background: var(--white-color);
}
div {
    display: flex;
    margin-bottom: 1.5rem;
    font-weight: 500;
    font-size: 16px;
    color: var(--gray-color);
}
.comment__name {
    color: var(--gray-dark-color);
    margin-right: 0.5rem;
}
.comment__button {
    margin-left: auto;
}
.comment__text {
    color: var(--gray-color);
    font-size: 14px;
}
</style>
