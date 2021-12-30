/// <reference types="react" />
import * as react from 'react';
import react__default from 'react';

declare function useThemeEngine(): (react.Dispatch<react.SetStateAction<Mode>> | react.Dispatch<react.SetStateAction<string>>)[];

declare type size = "sm" | "md" | "lg";
declare type buttonType$1 = "surface" | "secondary" | "tertiary";
interface FABprops$1 {
    size: size;
    children: React.ReactElement;
    type: buttonType$1;
}
declare function FAB({ size, children, type, ...rest }: FABprops$1): JSX.Element;

declare type buttonType = "surface" | "secondary" | "tertiary";
interface FABprops {
    children: react__default.ReactElement;
    style: react__default.CSSProperties;
    type: buttonType;
}
declare const ExtendedFAB: {
    ({ children, type, style, ...rest }: FABprops): JSX.Element;
    Icon({ children }: HTMLElement): JSX.Element;
    Label({ children }: HTMLElement): JSX.Element;
};

export { ExtendedFAB, FAB, useThemeEngine };
