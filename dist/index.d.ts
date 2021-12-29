/// <reference types="react" />
import * as react from 'react';

declare function useThemeEngine(): (react.Dispatch<react.SetStateAction<Mode>> | react.Dispatch<react.SetStateAction<string>>)[];

declare type size = "sm" | "md" | "lg";
declare type buttonType = "surface" | "secondary" | "tertiary";
interface FABprops {
    size: size;
    children: HTMLElement;
    type: buttonType;
}
declare function FloatingActionButton({ size, children, type, ...rest }: FABprops): JSX.Element;

export { FloatingActionButton as FAB, useThemeEngine };
