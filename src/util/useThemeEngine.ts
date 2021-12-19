import core from "./core";
import { useState, useEffect } from "react";

export default function useThemeEngine() {
    const [active, setActive] = useState<Mode>("light");
    const [URL, setURL] = useState<string>(
        "https://source.unsplash.com/random"
    );
    const [theme, setTheme] = useState<Theme>({
        light: {
            primary: "#6750a4",
            onPrimary: "#ffffff",
            primaryContainer: "#eaddff",
            onPrimaryContainer: "#21005d",
            secondary: "#625b71",
            onSecondary: "#ffffff",
            secondaryContainer: "#e8def8",
            onSecondaryContainer: "#1d192b",
            tertiary: "#7d5260",
            onTertiary: "#ffffff",
            tertiaryContainer: "#ffd8e4",
            onTertiaryContainer: "#31111d",
            error: "#b3261e",
            errorContainer: "#f9dedc",
            onError: "#ffffff",
            onErrorContainer: "#410e0b",
            background: "#fffbfe",
            onBackground: "#1c1b1f",
            surface: "#fffbfe",
            onSurface: "#1c1b1f",
            surfaceVariant: "#e7e0ec",
            onSurfaceVariant: "#49454f",
            outline: "#79747e",
            inverseOnSurface: "#f4eff4",
            inverseSurface: "#313033",
        },
        dark: {
            primary: "#d0bcff",
            onPrimary: "#381e72",
            primaryContainer: "#4f378b",
            onPrimaryContainer: "#eaddff",
            secondary: "#ccc2dc",
            onSecondary: "#332d41",
            secondaryContainer: "#4a4458",
            onSecondaryContainer: "#e8def8",
            tertiary: "#efb8c8",
            onTertiary: "#492532",
            tertiaryContainer: "#633b48",
            onTertiaryContainer: "#ffd8e4",
            error: "#f2b8b5",
            errorContainer: "#8c1d18",
            onError: "#601410",
            onErrorContainer: "#f9dedc",
            background: "#1c1b1f",
            onBackground: "#e6e1e5",
            surface: "#1c1b1f",
            onSurface: "#e6e1e5",
            surfaceVariant: "#49454f",
            onSurfaceVariant: "#cac4d0",
            outline: "#938f99",
            inverseOnSurface: "#1c1b1f",
            inverseSurface: "#e6e1e5",
        },
    });
    useEffect(() => {
        async function changeTheTheme() {
            const newTheme = await core(URL);
            injectTheme();
        }

        changeTheTheme();
    }, [URL]);
    useEffect(() => {
        injectTheme();
    }, [active]);
    function injectTheme() {
        const root = document.querySelector<HTMLElement>(":root");
        Object.entries(active === "light" ? theme.light : theme.dark).forEach(
            ([key, val]) => {
                root?.style.setProperty(`--${key}`, val);
            }
        );
    }

    return [setURL, setActive];
}
