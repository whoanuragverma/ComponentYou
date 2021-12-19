import { useState, useEffect } from "react";

type Theme = "light" | "dark";
export default function useTheme() {
    const [theme, setTheme] = useState<Theme>("light");
    useEffect(() => {
        if (theme === "light") {
            document.querySelector("html")?.setAttribute("theme", "light");
        } else {
            document.querySelector("html")?.setAttribute("theme", "dark");
        }
    }, [theme]);
    return [setTheme];
}
