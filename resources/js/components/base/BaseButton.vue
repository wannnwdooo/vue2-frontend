<template>
    <button :class="classes" @click="$emit('click')">
        <slot />
    </button>
</template>
<script>
export default {
    name: "BaseButton",
    props: {
        color: {
            type: String,
            default: "transparent",
            validator: (value) =>
                ["purple", "red", "transparent"].includes(value),
        },
        outline: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            const baseClass = `button-${this.color}`;
            return {
                [baseClass]: true,
                [`${baseClass}--outline`]: this.outline,
            };
        },
    },
};
</script>

<style scoped>
.button-purple {
    background: var(--purple-color);
    color: var(--white-color);
    border: 0;
}
.button-purple--outline {
    background: transparent;
    border: 1px solid var(--purple-color);
    color: var(--purple-color);
}
.button-red {
    background: var(--red-color);
    color: var(--white-color);
    border: 0;
}
.button-red--outline {
    background: transparent;
    border: 1px solid var(--red-color);
    color: var(--red-color);
}
.button-transparent {
    background: var(--white-color);
    color: var(--gray-color);
    border: 0;
}
.button-transparent--outline {
    background: transparent;
    border: 1px solid var(--gray-color);
    color: var(--gray-color);
}
button {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    transition: 0.6s;
    cursor: pointer;
}
button:active {
    transform: scale(0.98);
    transition: all 0.3s ease;
}
button:disabled {
    background: rgba(0, 0, 0, 0.2);
    transform: none;
    cursor: auto;
    border: none;
    color: var(--white-color);
}
</style>
