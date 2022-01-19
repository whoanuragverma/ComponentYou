import { useEffect } from "react";

interface NavDrawerProps {
    isFlyOver: boolean;
    children: React.ReactElement;
}
const NavDrawer = ({ isFlyOver, children, ...rest }: NavDrawerProps) => {
    const body = document.body;
    useEffect(() => {
        if (!isFlyOver) {
            body.style.marginLeft = "300px";
            body.style.width = "calc(100% - 300px)";
        }
        return () => {
            if (!isFlyOver) {
                body.style.marginLeft = "0px";
                body.style.width = "100%";
            }
        };
    });
    return (
        <nav className={`${isFlyOver ? "cy-nav-flyover" : ""}`} {...rest}>
            <div className="cy-nav-drawer">
                <div>{children}</div>
            </div>
        </nav>
    );
};

interface NavDrawerTitleProps {
    children: React.ReactElement;
}
NavDrawer.Title = ({ children, ...rest }: NavDrawerTitleProps) => {
    return (
        <div className="cy-nav-drawer-title" {...rest}>
            {children}
        </div>
    );
};

NavDrawer.Label = ({ children, ...rest }: NavDrawerTitleProps) => {
    return (
        <div className="cy-nav-drawer-label" {...rest}>
            {children}
        </div>
    );
};
interface NavDrawerItemProps extends NavDrawerTitleProps {
    active: boolean;
}
NavDrawer.Item = ({
    children,
    active = false,
    ...rest
}: NavDrawerItemProps) => {
    return (
        <div
            className={`cy-nav-drawer-item ${active ? "active" : ""}`}
            tabIndex={0}
        >
            {children}
        </div>
    );
};
NavDrawer.Divider = () => {
    return <hr className="cy-divider" />;
};
export default NavDrawer;
