<template>
    <label>
        <input
            v-if="type === 'input'"
            :value="value"
            @input="$emit('input', $event.target.value)"
            :placeholder="placeholder"
            type="text"
            class="input"
        />
        <textarea
            v-if="type === 'textarea'"
            :value="value"
            @input="$emit('input', $event.target.value)"
            :placeholder="placeholder"
            rows="4"
            class="input"
        />
    </label>
</template>
<script>
export default {
    name: "BaseInput",
    props: {
        value: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: "input",
        },
        placeholder: {
            type: String,
        },
    },
};
</script>

<style scoped>
.input {
    color: var(--gray-dark-color);
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: var(--gray-light-color) solid 1px;
    margin-bottom: 0.5rem;
    width: 100%;
}
.input:focus {
    outline: var(--blue-color) solid 1px;
    border: transparent solid 1px;
}
textarea {
    resize: none;
}
</style>
