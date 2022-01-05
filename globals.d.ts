interface ColorPallete {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    errorContainer: string;
    onError: string;
    onErrorContainer: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    inverseOnSurface: string;
    inverseSurface: string;
}

interface Shadows {
    shadow1: string;
    shadow2: string;
    shadow3: string;
    shadow4: string;
    shadow5: string;
    disabled: string;
}
interface Theme {
    light: ColorPallete;
    dark: ColorPallete;
}

type Mode = "light" | "dark";

declare module "*.svg" {
    const content: any;
    export default content;
}
