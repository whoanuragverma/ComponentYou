/// <reference types="react" />
interface imageProps {
    src: string;
    alt: string;
    width: string | number;
    height: string | number;
}
export declare function Image({ src, alt, width, height, ...rest }: imageProps): JSX.Element;
export {};
