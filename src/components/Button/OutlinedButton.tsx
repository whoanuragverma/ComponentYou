interface buttonProps {
    hasIcon: boolean;
    children: HTMLElement;
    style: React.CSSProperties;
}
export default function OutlinedButton({
    hasIcon,
    children,
    style,
    ...rest
}: buttonProps) {
    return (
        <button
            className="cy-button cy-button-outlined"
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
