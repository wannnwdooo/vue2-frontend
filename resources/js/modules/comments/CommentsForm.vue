<template>
    <form @submit.prevent="addComment">
        <BaseInput v-model.trim="name" placeholder="Your name" type="input" />
        <BaseInput
            v-model.trim="text"
            placeholder="Add a comment..."
            type="textarea"
        />
        <DatePicker v-model="date" value-type="format" class="datepicker" />
        <BaseButton color="purple" :disabled="!isFormValid">Send</BaseButton>
    </form>
</template>
<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import BaseButton from "../../components/base/BaseButton.vue";
import BaseInput from "../../components/base/BaseInput.vue";
export default {
    name: "CommentsForm",
    components: { BaseInput, BaseButton, DatePicker },
    data() {
        return {
            name: "",
            date: "",
            text: "",
        };
    },
    methods: {
        addComment() {
            this.$store.dispatch("comments/addComment", {
                name: this.name,
                date: this.date,
                text: this.text,
            });
            this.resetForm();
        },
        resetForm() {
            this.name = "";
            this.date = "";
            this.text = "";
        },
    },
    computed: {
        isFormValid() {
            return this.name !== "" && this.text !== "" && this.date !== "";
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    background: var(--white-color);
    border-radius: 0.5rem;
    padding: 1.5rem;
}
.datepicker {
    width: 100%;
    margin-bottom: 0.5rem;
}
</style>
