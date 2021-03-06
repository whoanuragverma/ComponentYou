import { Children } from "react";

const NavBar = ({
    children,
    style,
    ...rest
}: {
    children: React.ReactNode;
    style?: React.CSSProperties;
}) => {
    return (
        <div
            className="cy-nav-bottom"
            {...rest}
            style={{
                ...style,
                gridTemplateColumns: `repeat(${Children.count(
                    children
                )}, minmax(0px, 1fr))`,
            }}
        >
            {children}
        </div>
    );
};

interface BottomNavBarItems {
    children: React.ReactNode;
    active: boolean;
}
NavBar.Item = ({ children, active = false, ...rest }: BottomNavBarItems) => {
    return (
        <div
            className={`cy-nav-bottom-item ${
                active ? "cy-nav-bottom-item-active" : ""
            }`}
            {...rest}
            tabIndex={0}
        >
            {children}
        </div>
    );
};

NavBar.Label = ({ children, ...rest }: { children: React.ReactNode }) => {
    return (
        <span className="cy-nav-bottom-label" {...rest}>
            {children}
        </span>
    );
};
export default NavBar;
