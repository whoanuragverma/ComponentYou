export default function Teardrop({
    children,
    width,
    height,
}: {
    children: React.ReactNode;
    width: number | string;
    height: number | string;
}) {
    return (
        <div className="cy-shape-wrapper">
            <div
                className="cy-shape"
                style={{
                    borderRadius: "15% 50% 50% 50%",
                    width: width,
                    height: height,
                }}
            >
                {children}
            </div>
        </div>
    );
}
