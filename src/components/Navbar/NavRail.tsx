import React, { useEffect, useState, ReactElement } from "react";
interface NavRailProps {
    children: ReactElement<any, string>;
}
const NavRail = ({ children, ...rest }: NavRailProps) => {
    const body = document.querySelector("body");
    useEffect(() => {
        if (body) {
            body.style.marginLeft = "80px";
            body.style.width = "calc(100% - 80px)";
        }
        return () => {
            if (body) {
                body.style.marginLeft = "0px";
                body.style.width = "100%";
            }
        };
    }, []);
    return (
        <div className="cy-nav-rail" {...rest}>
            {children}
        </div>
    );
};

interface NavRailPrimaryButtonProps extends NavRailProps {}
NavRail.PrimaryButtons = ({ children, ...rest }: NavRailPrimaryButtonProps) => {
    return (
        <div className="cy-nav-rail-primary-buttons" {...rest}>
            {children}
        </div>
    );
};

interface NavRailSecondaryButtonProps extends NavRailProps {}
NavRail.SecondaryButtons = ({
    children,
    ...rest
}: NavRailSecondaryButtonProps) => {
    return (
        <div className="cy-nav-rail-secondary-buttons" {...rest}>
            {children}
        </div>
    );
};

interface NavRailLabelProps extends NavRailProps {
    label: string;
    active: boolean;
}
NavRail.Button = ({
    children,
    label,
    active = false,
    ...rest
}: NavRailLabelProps) => {
    return (
        <div
            className={`cy-nav-rail-button ${active ? "active" : ""}`}
            {...rest}
        >
            <div className="cy-nav-rail-button-icon" tabIndex={0}>
                {children}
            </div>
            <div className="cy-nav-rail-label">{label}</div>
        </div>
    );
};
export default NavRail;
