/// <reference types="react" />
interface NavDrawerProps {
    isFlyOver: boolean;
    children: React.ReactElement;
}
declare const NavDrawer: {
    ({ isFlyOver, children, ...rest }: NavDrawerProps): JSX.Element;
    Title({ children, ...rest }: NavDrawerTitleProps): JSX.Element;
    Label({ children, ...rest }: NavDrawerTitleProps): JSX.Element;
    Item({ children, active, ...rest }: NavDrawerItemProps): JSX.Element;
    Divider(): JSX.Element;
};
interface NavDrawerTitleProps {
    children: React.ReactElement;
}
interface NavDrawerItemProps extends NavDrawerTitleProps {
    active: boolean;
}
export default NavDrawer;
