type size = "sm" | "md" | "lg";
type buttonType = "surface" | "secondary" | "tertiary";
interface FABprops {
    size: size;
    children: React.ReactElement;
    type: buttonType;
}

export default function FAB({
    size = "md",
    children,
    type = "surface",
    ...rest
}: FABprops) {
    if (!children || !children.type || children.type !== "svg") {
        throw new Error(
            "ComponentYou: FAB Children must be an svg element. Please check your markup."
        );
    }
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
