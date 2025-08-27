export { default as Button } from './Button.vue';

export const buttonType = {
    Primary: "primary",
    Outline: "outline", 
    Secondary: "secondary",
} as const;

export type ButtonType = typeof buttonType[keyof typeof buttonType];