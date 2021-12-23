type ButtonSize = "sm" | "md" | "lg";
type ButtonType = "primary" | "secondary" | "tertiary" | "error";
type ButtonVariant = "filled" | "outlined" | "text";
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
                variant === "filled"
                    ? "cy-button-filled"
                    : variant === "outlined"
                    ? "cy-button-outline"
                    : "cy-button-text"
            } ${
                size === "sm"
                    ? "cy-button-sm"
                    : size === "lg"
                    ? "cy-button-lg"
                    : "cy-button-md"
            } ${
                type === "primary"
                    ? "cy-button-primary"
                    : type === "secondary"
                    ? "cy-button-secondary"
                    : type === "tertiary"
                    ? "cy-button-tertiary"
                    : "cy-button-error"
            }`}
            {...rest}
        >
            {children}
        </button>
    );
}
