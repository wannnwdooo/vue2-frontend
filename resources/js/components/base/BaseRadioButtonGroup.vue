<template>
    <div>
        <p>{{ group }}</p>
        <div class="container">
            <label :for="option" v-for="option in options" :key="option">
                <input
                    type="radio"
                    :name="group"
                    :value="option"
                    :id="option"
                    :checked="option === value"
                    @change="$emit('input', option)"
                />
                {{ option }}
            </label>
        </div>
    </div>
</template>
<script>
export default {
    name: "BaseRadioButtonGroup",
    props: {
        options: {
            required: true,
            type: Array,
        },
        group: String,
        value: {
            required: true,
        },
    },
};
</script>

<style scoped>
p {
    color: var(--gray-dark-color);
    font-weight: 500;
    margin-bottom: 0.5rem;
}
.container {
    display: flex;
    gap: 0.5rem;
}
label {
    color: var(--gray-dark-color);
    font-weight: 500;
}
</style>
