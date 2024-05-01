<template>
    <div>
        <h1 v-if="!comments.length">It's empty here for now</h1>
        <template v-else>
            <CommentsListItem
                v-for="comment of comments"
                :key="comment.id"
                :comment="comment"
            />
        </template>
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

<style scoped></style>
