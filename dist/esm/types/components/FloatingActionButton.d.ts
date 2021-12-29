/// <reference types="react" />
declare type size = "sm" | "md" | "lg";
declare type buttonType = "surface" | "secondary" | "tertiary";
interface FABprops {
    size: size;
    children: HTMLElement;
    type: buttonType;
}
/**
 * Use a FAB for the most important action on a screen. The FAB appears in front of all other content on screen, and is recognizable for its rounded shape and icon in the center. Only use a FAB for presenting a screen's primary action. The FAB can be aligned left, center, or right. It can be positioned above the navigation bar, or nested within the bar.
 * @param size
 */
export default function FloatingActionButton({ size, children, type, ...rest }: FABprops): JSX.Element;
export {};
