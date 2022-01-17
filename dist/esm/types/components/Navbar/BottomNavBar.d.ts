/// <reference types="react" />
declare const BottomNavBar: {
    ({ children, style, ...rest }: {
        children: React.ReactNode;
        style: React.CSSProperties;
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
export default BottomNavBar;
