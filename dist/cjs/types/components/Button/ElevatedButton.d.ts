/// <reference types="react" />
interface buttonProps {
    hasIcon: boolean;
    children: HTMLElement;
    style: React.CSSProperties;
}
export default function ElevatedButton({ hasIcon, children, style, ...rest }: buttonProps): JSX.Element;
export {};
