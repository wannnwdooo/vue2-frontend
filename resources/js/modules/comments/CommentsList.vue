<template>
    <div>
        <h1 v-if="!comments.length">It's empty here for now</h1>
        <div class="comments__list" v-else>
            <CommentsListItem
                v-for="comment of comments"
                :key="comment.id"
                :comment="comment"
            />
        </div>
    </div>
</template>
<script>
import CommentsListItem from "./CommentsListItem.vue";

export default {
    name: "CommentsList",
    components: { CommentsListItem },
    props: {
        comments: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
.comments__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
