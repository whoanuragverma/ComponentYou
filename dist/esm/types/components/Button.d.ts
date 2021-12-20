/// <reference types="react" />
declare type ButtonSize = "sm" | "md" | "lg";
declare type ButtonType = "primary" | "secondary" | "tertiary" | "error";
declare type ButtonVariant = "filled" | "outlined";
interface buttonProps {
    size: ButtonSize;
    disabled?: boolean;
    children: string | HTMLElement;
    variant: ButtonVariant;
    type: ButtonType;
}
export default function Button({ children, size, type, variant, ...rest }: buttonProps): JSX.Element;
export {};
