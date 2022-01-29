import newID from "../../util/newID";

export default function Bobble({
    children,
    width,
    height,
}: {
    children: React.ReactNode;
    width: number | string;
    height: number | string;
}) {
    const ID = newID("cy-shape-bobble");
    return (
        <div className="cy-shape-wrapper">
            <svg>
                <defs>
                    <clipPath
                        id={ID}
                        clipPathUnits="objectBoundingBox"
                        transform="scale(0.0115966667, 0.0115966667)"
                    >
                        <path d="M51.6328 5.16348L48.5229 2.89491C44.836 0.205461 39.834 0.205461 36.1471 2.89491L33.0371 5.16348C31.4063 6.35307 29.439 6.99229 27.4205 6.98844L23.571 6.98111C19.0074 6.97243 14.9607 9.9125 13.5588 14.2554L12.3762 17.9187C11.7561 19.8397 10.5402 21.5132 8.90492 22.6965L5.78635 24.9533C2.08921 27.6287 0.543524 32.3858 1.96202 36.7234L3.15853 40.3821C3.78595 42.3007 3.78595 44.3693 3.15853 46.2878L1.96202 49.9466C0.543525 54.2842 2.08921 59.0413 5.78636 61.7167L8.90492 63.9734C10.5402 65.1568 11.7561 66.8303 12.3762 68.7512L13.5588 72.4145C14.9607 76.7574 19.0074 79.6975 23.571 79.6888L27.4205 79.6815C29.439 79.6777 31.4063 80.3169 33.0371 81.5065L36.1471 83.775C39.834 86.4645 44.836 86.4645 48.5229 83.775L51.6328 81.5065C53.2636 80.3169 55.2309 79.6777 57.2495 79.6815L61.0989 79.6888C65.6625 79.6975 69.7092 76.7574 71.1112 72.4145L72.2937 68.7512C72.9139 66.8303 74.1297 65.1568 75.765 63.9734L78.8836 61.7167C82.5807 59.0413 84.1264 54.2842 82.7079 49.9466L81.5114 46.2878C80.884 44.3693 80.884 42.3007 81.5114 40.3821L82.7079 36.7234C84.1264 32.3858 82.5807 27.6287 78.8836 24.9533L75.765 22.6965C74.1297 21.5132 72.9138 19.8397 72.2937 17.9187L71.1112 14.2554C69.7092 9.9125 65.6625 6.97243 61.0989 6.98111L57.2495 6.98844C55.2309 6.99229 53.2636 6.35307 51.6328 5.16348Z" />
                    </clipPath>
                </defs>
            </svg>
            <div
                className="cy-shape"
                style={{
                    clipPath: `url(#${ID})`,
                    maxWidth: width,
                    maxHeight: height,
                }}
            >
                {children}
            </div>
        </div>
    );
}
