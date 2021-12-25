type cardType = "filled" | "outlined";
type cardOrientation = "landscape" | "portrait";
interface cardProps {
    type: cardType;
    orientation: cardOrientation;
    children: HTMLElement;
}
const Card = ({ type = "outlined", orientation, children }: cardProps) => {
    return (
        <div
            className={`cy-card ${
                type === "filled" ? "cy-card-filled" : "cy-card-outlined"
            } ${orientation === "landscape" && "cy-card-landscape"}`}
        >
            {children}
        </div>
    );
};

Card.Image = ({ children }: HTMLElement) => (
    <div className="cy-card-image">{children}</div>
);

Card.Header = ({ children }: HTMLElement) => (
    <div className="cy-card-header">{children}</div>
);

Card.Title = ({ children }: HTMLElement) => (
    <div className="cy-card-title">{children}</div>
);

Card.SubTitle = ({ children }: HTMLElement) => (
    <div className="cy-card-subtitle">{children}</div>
);

Card.Body = ({ children }: HTMLElement) => (
    <div className="cy-card-body">{children}</div>
);

Card.Action = ({ children }: HTMLElement) => (
    <div className="cy-card-action">{children}</div>
);
export default Card;
