import { grey } from '@mui/material/colors';
import type { ThemeOptions } from '@mui/material/styles';

export const chiptuneTheme: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#00ff00',
        },
        background: {
            default: '#111111',
            paper: '#212121',
        },
    },
    typography: {
        fontFamily: `'Pixelify Sans', cursive`,
    },
    components: {
        MuiAutocomplete: { defaultProps: { fullWidth: true } },
        MuiFormControl: { defaultProps: { fullWidth: true } },
        MuiTextField: { defaultProps: { fullWidth: true } },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: grey[900],
                },
            },
        },
    },
};