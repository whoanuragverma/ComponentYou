interface buttonProps {
    hasIcon: boolean;
    children: HTMLElement;
    style: React.CSSProperties;
}
export default function TextButton({
    hasIcon,
    children,
    style,
    ...rest
}: buttonProps) {
    return (
        <button
            className="cy-button cy-button-text"
            style={{
                ...style,
                paddingLeft: hasIcon ? "12px" : "16px",
            }}
            {...rest}
        >
            {children}
        </button>
    );
}
