import { createTheme, lighten } from '@mui/material/styles';
import type { RaThemeOptions } from 'react-admin';

/**
 * Base MUI theme
 * Hanya dipakai untuk mengambil default palette
 */
const baseTheme = createTheme();

/**
 * Light Theme
 */
const lightTheme: RaThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            ...baseTheme.palette.primary,
        },
        secondary: {
            ...baseTheme.palette.secondary,
        },
        background: {
            ...baseTheme.palette.background,
        },
        bulkActionsToolbarBackgroundColor: lighten(
            baseTheme.palette.primary.light,
            0.8
        ),
    },
    components: {
        RaToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor:
                        'color-mix(in oklab, var(--mui-palette-background-paper) 80%, black)',
                },
            },
        },
    },
};

/**
 * Dark Theme
 */
const darkTheme: RaThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            ...baseTheme.palette.primary,
        },
        secondary: {
            ...baseTheme.palette.secondary,
        },
        background: {
            ...baseTheme.palette.background,
        },
        bulkActionsToolbarBackgroundColor:
            baseTheme.palette.primary.dark,
    },
    components: {
        RaToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor:
                        'color-mix(in oklab, var(--mui-palette-background-paper) 80%, white)',
                },
            },
        },
    },
};

/**
 * Export sebagai single theme (untuk mode cssVariables)
 */
export const cssVariablesTheme: RaThemeOptions = {
    ...lightTheme,
};

/**
 * Optional export kalau mau dipakai sebagai light/dark pair
 */
export { lightTheme, darkTheme };