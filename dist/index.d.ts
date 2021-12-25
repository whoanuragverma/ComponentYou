/// <reference types="react" />
import * as react from 'react';

declare function useThemeEngine(): (react.Dispatch<react.SetStateAction<Mode>> | react.Dispatch<react.SetStateAction<string>>)[];

declare type ButtonSize = "sm" | "md" | "lg";
declare type ButtonType = "primary" | "secondary" | "tertiary" | "error";
declare type ButtonVariant = "filled" | "outlined" | "text";
interface buttonProps {
    size: ButtonSize;
    disabled?: boolean;
    children: string | HTMLElement;
    variant: ButtonVariant;
    type: ButtonType;
}
declare function Button({ children, size, type, variant, ...rest }: buttonProps): JSX.Element;

declare type cardType = "filled" | "outlined";
declare type cardOrientation = "landscape" | "portrait";
interface cardProps {
    type: cardType;
    orientation: cardOrientation;
    children: HTMLElement;
}
declare const Card: {
    ({ type, orientation, children }: cardProps): JSX.Element;
    Image({ children }: HTMLElement): JSX.Element;
    Header({ children }: HTMLElement): JSX.Element;
    Title({ children }: HTMLElement): JSX.Element;
    SubTitle({ children }: HTMLElement): JSX.Element;
    Body({ children }: HTMLElement): JSX.Element;
    Action({ children }: HTMLElement): JSX.Element;
};

export { Button, Card, useThemeEngine };
