/// <reference types="react" />
declare type size = "sm" | "md" | "lg";
declare type buttonType = "surface" | "secondary" | "tertiary";
interface FABprops {
    size: size;
    children: HTMLElement;
    type: buttonType;
}
export default function FloatingActionButton({ size, children, type, ...rest }: FABprops): JSX.Element;
export {};
