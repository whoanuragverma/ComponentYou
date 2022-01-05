/// <reference types="react" />
declare type cardType = "filled" | "outlined" | "elevated";
interface cardProps {
    style: React.CSSProperties;
    type: cardType;
    animated?: boolean;
    children: HTMLElement;
}
declare const Card: {
    ({ type, children, style, animated, }: cardProps): JSX.Element;
    Flyover({ children, ...rest }: {
        children: HTMLElement;
    }): JSX.Element;
    Image({ children, ...rest }: {
        children: HTMLElement;
    }): JSX.Element;
    Headline({ children, ...rest }: {
        children: HTMLElement;
    }): JSX.Element;
    Subhead({ children, ...rest }: {
        children: HTMLElement;
    }): JSX.Element;
    Body({ children, ...rest }: {
        children: HTMLElement;
    }): JSX.Element;
    Action({ children, ...rest }: {
        children: HTMLElement;
    }): JSX.Element;
};
export default Card;
