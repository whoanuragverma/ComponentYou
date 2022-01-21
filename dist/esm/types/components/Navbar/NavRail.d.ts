import React from "react";
interface NavRailProps {
    children: React.ReactNode;
}
declare const NavRail: {
    ({ children, ...rest }: NavRailProps): JSX.Element;
    PrimaryButtons({ children, ...rest }: NavRailPrimaryButtonProps): JSX.Element;
    SecondaryButtons({ children, ...rest }: NavRailSecondaryButtonProps): JSX.Element;
    Button({ children, label, active, ...rest }: NavRailLabelProps): JSX.Element;
};
interface NavRailPrimaryButtonProps extends NavRailProps {
}
interface NavRailSecondaryButtonProps extends NavRailProps {
}
interface NavRailLabelProps extends NavRailProps {
    label: string;
    active: boolean;
}
export default NavRail;
