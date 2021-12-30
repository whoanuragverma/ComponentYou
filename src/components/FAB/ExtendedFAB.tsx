import React, { useRef, useLayoutEffect, useState } from "react";
type buttonType = "surface" | "secondary" | "tertiary";
interface FABprops {
    children: React.ReactElement;
    style: React.CSSProperties;
    type: buttonType;
}

const ExtendedFAB = ({
    children,
    type = "surface",
    style,
    ...rest
}: FABprops) => {
    const ref = useRef<HTMLElement>();
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
        setWidth(ref.current?.offsetWidth || 80);
    }, [ref.current]);
    return (
        <button
            className={`cy-fab cy-fab-extended ${
                type === "surface"
                    ? "cy-bg-primary"
                    : type === "secondary"
                    ? "cy-bg-secondary"
                    : "cy-bg-tertiary"
            }`}
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
                <span className="cy-padding-layer">{children}</span>
            </span>
        </button>
    );
};

ExtendedFAB.Icon = ({ children }: HTMLElement) => (
    <span className="cy-fab-icon">{children}</span>
);

ExtendedFAB.Label = ({ children }: HTMLElement) => (
    <span className="cy-fab-label">{children}</span>
);

export default ExtendedFAB;
