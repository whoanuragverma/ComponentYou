type size = "sm" | "md" | "lg";
type buttonType = "surface" | "secondary" | "tertiary";
interface FABprops {
    size: size;
    children: HTMLElement;
    type: buttonType;
}

export default function FloatingActionButton({
    size = "md",
    children,
    type = "surface",
    ...rest
}: FABprops) {
    return (
        <button
            className={`cy-fab ${
                size === "sm"
                    ? "cy-fab-sm"
                    : size === "md"
                    ? "cy-fab-md"
                    : "cy-fab-lg"
            } ${
                type === "surface"
                    ? "cy-bg-primary"
                    : type === "secondary"
                    ? "cy-bg-secondary"
                    : "cy-bg-tertiary"
            }`}
            {...rest}
        >
            <span className="cy-state-layer">
                <span className="cy-padding-layer">{children}</span>
            </span>
        </button>
    );
}
