type ButtonSize = "sm" | "md" | "lg";
type ButtonType = "primary" | "secondary" | "tertiary" | "error";
type ButtonVariant = "filled" | "outlined";
interface buttonProps {
    size: ButtonSize;
    disabled?: boolean;
    children: string | HTMLElement;
    variant: ButtonVariant;
    type: ButtonType;
}

export default function Button({
    children,
    size = "md",
    type = "primary",
    variant = "filled",
    ...rest
}: buttonProps) {
    return (
        <button
            className={`cy-button ${
                type === "primary"
                    ? variant === "filled"
                        ? "cy-button-primary"
                        : "cy-button-outline-primary"
                    : type === "secondary"
                    ? variant === "filled"
                        ? "cy-button-secondary"
                        : "cy-button-outline-secondary"
                    : type === "tertiary"
                    ? variant === "filled"
                        ? "cy-button-tertiary"
                        : "cy-button-outline-tertiary"
                    : variant === "filled"
                    ? "cy-button-error"
                    : "cy-button-outline-error"
            } ${
                size === "sm"
                    ? "cy-button-sm"
                    : size === "lg"
                    ? "cy-button-lg"
                    : "cy-button-md"
            }`}
            {...rest}
        >
            {children}
        </button>
    );
}
