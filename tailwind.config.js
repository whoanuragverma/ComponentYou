function withOpacity(variableName) {
    return ({ opacityValue }) => {
        return `rgba(var(${variableName}), ${opacityValue ? opacityValue : 1})`;
    };
}
module.exports = {
    content: ["./src/**/*.{tsx,ts}"],
    theme: {
        colors: {
            primary: withOpacity("--primary"),
            onPrimary: withOpacity("--onPrimary"),
            primaryContainer: withOpacity("--primaryContainer"),
            onPrimaryContainer: withOpacity("--onPrimaryContainer"),
            secondary: withOpacity("--secondary"),
            onSecondary: withOpacity("--onSecondary"),
            secondaryContainer: withOpacity("--secondaryContainer"),
            onSecondaryContainer: withOpacity("--onSecondaryContainer"),
            tertiary: withOpacity("--tertiary"),
            onTertiary: withOpacity("--onTertiary"),
            tertiaryContainer: withOpacity("--tertiaryContainer"),
            onTertiaryContainer: withOpacity("--onTertiaryContainer"),
            error: withOpacity("--error"),
            errorContainer: withOpacity("--errorContainer"),
            onError: withOpacity("--onError"),
            onErrorContainer: withOpacity("--onErrorContainer"),
            background: withOpacity("--background"),
            onBackground: withOpacity("--onBackground"),
            surface: withOpacity("--surface"),
            onSurface: withOpacity("--onSurface"),
            surfaceVariant: withOpacity("--surfaceVariant"),
            onSurfaceVariant: withOpacity("--onSurfaceVariant"),
            outline: withOpacity("--outline"),
            inverseOnSurface: withOpacity("--inverseOnSurface"),
            inverseSurface: withOpacity("--inverseSurface"),
            tranparent: "transparent",
            disabled: withOpacity("--disabled"),
            inherit: "inherit",
            currentColor: "currentColor",
        },
        boxShadow: {
            shadow1: "var(--shadow1)",
            shadow2: "var(--shadow2)",
            shadow3: "var(--shadow3)",
            shadow4: "var(--shadow4)",
            shadow5: "var(--shadow5)",
            none: "none",
        },
        fontSize: {
            displayLarge: ["57px", "64px"],
            displayMedium: ["45px", "52px"],
            displaySmall: ["36px", "44px"],
            headlineLarge: ["32px", "40px"],
            headlineMedium: ["28px", "36px"],
            headlineSmall: ["24px", "32px"],
            titleLarge: ["22px", "28px"],
            titleMedium: [
                "16px",
                { lineHeight: "24px", letterSpacing: "0.15px" },
            ],
            titleSmall: [
                "14px",
                { lineHeight: "20px", letterSpacing: "0.1px" },
            ],
            labelLarge: [
                "16px",
                { letterSpacing: "0.1px", lineHeight: "20px" },
            ],
            labelMedium: [
                "12px",
                { letterSpacing: "0.5px", lineHeight: "16px" },
            ],
            labelSmall: [
                "11px",
                { letterSpacing: "0.5px", lineHeight: "16px" },
            ],
            bodyLarge: [
                "16px",
                { letterSpacing: "0.15px", lineHeight: "24px" },
            ],
            bodyMedium: [
                "14px",
                { letterSpacing: "0.25px", lineHeight: "20px" },
            ],
            bodySmall: ["12px", { letterSpacing: "0.4px", lineHeight: "16px" }],
        },
        borderRadius: {
            DEFAULT: "100px",
        },
        fontFamily: {
            sans: ["Google Sans", "sans-serif"],
        },
        animation: {
            ripple: "rippleDrop 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        keyframes: {
            rippleDrop: {
                "0%": {
                    width: "0%",
                    opacity: 0,
                    height: "0%",
                    borderTopLeftRadius: "30%",
                },
                "30%": {
                    borderTopLeftRadius: "100%",
                },
                "100%": {
                    width: "100%",
                    opacity: 1,
                    height: "100%",
                    borderTopLeftRadius: "6%",
                },
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
