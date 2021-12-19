import themeEnine from "./core";

export default async function changeTheme(url: string) {
    try {
        const theme = await themeEnine(url);
        const htmlLight = document.querySelector<HTMLElement>(
            "html[data-theme='light']"
        );
        const htmlDark = document.querySelector<HTMLElement>(
            "html[data-theme='dark']"
        );
        Object.entries(theme.light).forEach(([key, val]) => {
            htmlLight?.style.setProperty(`--${key}`, val);
        });
        Object.entries(theme.dark).forEach(([key, val]) => {
            htmlDark?.style.setProperty(`--${key}`, val);
        });
    } catch (e) {
        console.error(e);
    }
}
