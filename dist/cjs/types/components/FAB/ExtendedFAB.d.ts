import React from "react";
declare type buttonType = "surface" | "secondary" | "tertiary";
interface FABprops {
    children: React.ReactElement;
    style: React.CSSProperties;
    type: buttonType;
}
declare const ExtendedFAB: {
    ({ children, type, style, ...rest }: FABprops): JSX.Element;
    Icon({ children }: HTMLElement): JSX.Element;
    Label({ children }: HTMLElement): JSX.Element;
};
export default ExtendedFAB;
