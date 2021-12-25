/// <reference types="react" />
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
export default Card;
