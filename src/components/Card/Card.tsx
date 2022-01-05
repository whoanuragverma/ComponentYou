type cardType = "filled" | "outlined" | "elevated";

interface cardProps {
    style: React.CSSProperties;
    type: cardType;
    animated?: boolean;
    children: HTMLElement;
}
const Card = ({
    type = "outlined",
    children,
    style,
    animated = false,
}: cardProps) => {
    return (
        <div
            className={`cy-card ${
                type === "elevated"
                    ? "cy-bg-elevated cy-card-elevated"
                    : type === "filled"
                    ? "cy-card-filled"
                    : "cy-card-outlined"
            } ${animated ? "cy-no-animate" : ""}`}
            style={{
                ...style,
            }}
        >
            <span className="cy-state-layer">
                <span className="cy-padding-layer">{children}</span>
            </span>
        </div>
    );
};

Card.Flyover = ({ children, ...rest }: { children: HTMLElement }) => {
    return (
        <div className="cy-card-flyover" {...rest}>
            {children}
        </div>
    );
};

Card.Image = ({ children, ...rest }: { children: HTMLElement }) => {
    return (
        <div className="cy-card-image" {...rest}>
            {children}
        </div>
    );
};

Card.Headline = ({ children, ...rest }: { children: HTMLElement }) => {
    return (
        <div className="cy-card-headline" {...rest}>
            {children}
        </div>
    );
};

Card.Subhead = ({ children, ...rest }: { children: HTMLElement }) => {
    return (
        <div className="cy-card-subhead" {...rest}>
            {children}
        </div>
    );
};

Card.Body = ({ children, ...rest }: { children: HTMLElement }) => {
    return (
        <div className="cy-card-body" {...rest}>
            {children}
        </div>
    );
};

Card.Action = ({ children, ...rest }: { children: HTMLElement }) => {
    return (
        <div className="cy-card-action" {...rest}>
            {children}
        </div>
    );
};
export default Card;
