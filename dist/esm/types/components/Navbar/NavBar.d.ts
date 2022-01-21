/// <reference types="react" />
declare const NavBar: {
    ({ children, style, ...rest }: {
        children: React.ReactNode;
        style?: import("react").CSSProperties | undefined;
    }): JSX.Element;
    Item({ children, active, ...rest }: BottomNavBarItems): JSX.Element;
    Label({ children, ...rest }: {
        children: React.ReactNode;
    }): JSX.Element;
};
interface BottomNavBarItems {
    children: React.ReactNode;
    active: boolean;
}
export default NavBar;
