import { useLayoutEffect, useState, useRef } from "react";
interface buttonProps {
    hasIcon: boolean;
    children: HTMLElement;
    style: React.CSSProperties;
}
export default function ElevatedButton({
    hasIcon,
    children,
    style,
    ...rest
}: buttonProps) {
    const ref = useRef<HTMLElement>();
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
        setWidth(ref.current?.offsetWidth || 80);
    }, [ref.current]);
    return (
        <button
            className="cy-button cy-button-tonal"
            style={{
                ...style,
                width: width,
            }}
            {...rest}
        >
            <span
                className="cy-state-layer"
                ref={ref as React.RefObject<HTMLSpanElement>}
            >
                <span
                    className="cy-padding-layer"
                    style={{ paddingLeft: hasIcon ? "16px" : "24px" }}
                >
                    {children}
                </span>
            </span>
        </button>
    );
}
