/// <reference types="react" />
import * as react from 'react';
import react__default, { ReactElement } from 'react';

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

declare const BottomNavBar: {
    ({ children, style, ...rest }: {
        children: React.ReactNode;
        style: React.CSSProperties;
    }): JSX.Element;
    Item({ children, active, ...rest }: BottomNavBarItems): JSX.Element;
    Label({ children, ...rest }: {
        children: React.ReactNode;
    }): JSX.Element;
};
interface BottomNavBarItems {
    children: React.ReactNode;
    active: boolean;
}

interface NavRailProps {
    children: ReactElement<any, string>;
}
declare const NavRail: {
    ({ children, ...rest }: NavRailProps): JSX.Element;
    PrimaryButtons({ children, ...rest }: NavRailPrimaryButtonProps): JSX.Element;
    SecondaryButtons({ children, ...rest }: NavRailSecondaryButtonProps): JSX.Element;
    Button({ children, label, active, ...rest }: NavRailLabelProps): JSX.Element;
};
interface NavRailPrimaryButtonProps extends NavRailProps {
}
interface NavRailSecondaryButtonProps extends NavRailProps {
}
interface NavRailLabelProps extends NavRailProps {
    label: string;
    active: boolean;
}

declare function Bobble({ children, width, height, }: {
    children: React.ReactNode;
    width: number | string;
    height: number | string;
}): JSX.Element;

declare function Teardrop({ children, width, height, }: {
    children: React.ReactNode;
    width: number | string;
    height: number | string;
}): JSX.Element;

export { Bobble, BottomNavBar, ExtendedFAB, FAB, NavRail, Teardrop, useThemeEngine };
