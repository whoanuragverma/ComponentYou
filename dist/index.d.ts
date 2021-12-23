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

export { Button, useThemeEngine };
