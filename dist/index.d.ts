/// <reference types="react" />
import * as react from 'react';
import react__default from 'react';

declare const darkShadow: Shadows;
declare const lightShadow: Shadows;
declare const defaultTheme: Theme;
declare function ThemeEngine(url: string): Promise<Theme>;

declare function useThemeEngine(): react.Dispatch<react.SetStateAction<string>>[];

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

declare const NavBar: {
    ({ children, style, ...rest }: {
        children: React.ReactNode;
        style?: react.CSSProperties | undefined;
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
    children: react__default.ReactNode;
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

interface NavDrawerProps {
    isFlyOver: boolean;
    children: React.ReactElement;
}
declare const NavDrawer: {
    ({ isFlyOver, children, ...rest }: NavDrawerProps): JSX.Element;
    Title({ children, ...rest }: NavDrawerTitleProps): JSX.Element;
    Label({ children, ...rest }: NavDrawerTitleProps): JSX.Element;
    Item({ children, active, ...rest }: NavDrawerItemProps): JSX.Element;
    Divider(): JSX.Element;
};
interface NavDrawerTitleProps {
    children: React.ReactElement;
}
interface NavDrawerItemProps extends NavDrawerTitleProps {
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

export { Bobble, ExtendedFAB, FAB, NavBar, NavDrawer, NavRail, Teardrop, ThemeEngine, darkShadow, defaultTheme, lightShadow, useThemeEngine };
