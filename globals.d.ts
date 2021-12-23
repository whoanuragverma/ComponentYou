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
    elevation1: string;
    elevation2: string;
    elevation3: string;
    elevation4: string;
    elevation5: string;
    disabled: string;
}
interface Theme {
    light: ColorPallete;
    dark: ColorPallete;
}

type Mode = "light" | "dark";
