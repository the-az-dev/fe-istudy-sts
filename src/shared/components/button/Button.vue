<template>
    <button
        :class="allClasses"
    >
        {{ label }}
    </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { buttonType, type ButtonType } from '.';
import { computed } from 'vue';

const props = defineProps({
    type: {
        type: String as PropType<ButtonType>,
        required: true,
        validator: (value: string): value is ButtonType => {
            return Object.values(buttonType).includes(value as ButtonType);
        }
    },
    label: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        default: ''
    }
});


const buttonClass = computed(() => {
    return `${props.type}`;
});

const allClasses = computed(() => {
    return `${buttonClass.value} ${props.class}`.trim();
});
</script>