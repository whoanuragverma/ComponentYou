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
    return (
        <button
            className="cy-button cy-button-elevated"
            style={{
                ...style,
                paddingLeft: hasIcon ? "16px" : "24px",
            }}
            {...rest}
        >
            {children}
        </button>
    );
}
