import newID from "../../util/newID";
export default function Teardrop({
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
                        transform="scale(0.027027027, 0.027027027)"
                    >
                        <path d="M18.3983 35.8016L19.2391 35.7712C28.5269 35.4352 35.9091 27.8558 36.0002 18.5622C36.0943 8.95807 28.3849 1.09605 18.7807 1.00194L4.70236 0.863973C3.30328 0.850262 2.02812 1.66413 1.4514 2.93889C1.24936 3.38549 1.14253 3.86927 1.13772 4.35943L1.04123 14.2058L0.964768 22.0087L1.04938 23.1782C1.11292 24.0564 1.27818 24.9243 1.54184 25.7645C2.10536 27.5601 3.10541 29.1879 4.45244 30.5022L4.82261 30.8634C5.93249 31.9463 7.22148 32.8288 8.63248 33.4719L10.16 34.1681C12.742 35.3449 15.5626 35.9042 18.3983 35.8016Z" />
                    </clipPath>
                </defs>
            </svg>
            <div
                className="cy-shape"
                style={{
                    clipPath: `url(#${ID})`,
                    width: width,
                    height: height,
                }}
            >
                {children}
            </div>
        </div>
    );
}
