/// <reference types="react" />
declare type size = "sm" | "md" | "lg";
declare type buttonType = "surface" | "secondary" | "tertiary";
interface FABprops {
    size: size;
    children: React.ReactElement;
    type: buttonType;
}
export default function FAB({ size, children, type, ...rest }: FABprops): JSX.Element;
export {};
