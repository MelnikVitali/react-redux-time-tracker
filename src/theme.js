import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

import { pxToRem } from "./utils/pxToRem";

// Generate breakpoints so we can use them in the theme definition
const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FDD000',
            contrastText: '#3D3D3D',
            alert: '#DD4040'
        },
        secondary: {
            main: '#272829',
            contrastText: '#fff'
        },
        disabledDate: {
            main: '#535354',
        },
        liteGray: {
            main: '#A2A2A2'
        },
        subtitleTextGray: {
            main: '#DFDFDF'
        },
        btnModalText: {
            main: '#f6c314'
        }
    },
    typography: {
        fontFamily: 'Rubik, sans-serif',
        body2: {
            fontSize: pxToRem(20),
            fontWeight: 300,
            letterSpacing: pxToRem(0.4),
        },
    },
    shape: {
        borderRadius: 'none',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                'html, body': {
                    height: '100%',
                },
                body: {
                    display: 'flex'
                },
                '#root': {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%'
                },
            },
        },
        MuiTypography: {
            button: {
                [breakpoints.up("xs")]: {
                    fontSize: pxToRem(16)
                },
                [breakpoints.up("sm")]: {
                    fontSize: pxToRem(19)
                },
                [breakpoints.up("md")]: {
                    fontSize: pxToRem(22)
                },
                [breakpoints.up("lg")]: {
                    fontSize: pxToRem(25)
                },
                [breakpoints.up("xl")]: {
                    fontSize: pxToRem(28)
                }
            },
            body1: {
                width: '100%'
            },
            body2: {
                [breakpoints.up("xs")]: {
                    fontSize: pxToRem(12),
                },
                [breakpoints.up("sm")]: {
                    fontSize: pxToRem(13)
                },
                [breakpoints.up("md")]: {
                    fontSize: pxToRem(15)
                },
                [breakpoints.up("lg")]: {
                    fontSize: pxToRem(16),
                },
                [breakpoints.up("xl")]: {
                    fontSize: pxToRem(20),
                }
            },
            h1: {
                [breakpoints.up("xs")]: {
                    fontSize: pxToRem(12),
                    marginBottom: 0,
                },
                [breakpoints.up("sm")]: {
                    fontSize: pxToRem(12)
                },
                [breakpoints.up("md")]: {
                    fontSize: pxToRem(14)
                },
                [breakpoints.up("lg")]: {
                    fontSize: pxToRem(28),
                },
                [breakpoints.up("xl")]: {
                    fontSize: pxToRem(34),
                }
            }
        },
        MuiOutlinedInput: {
            root: {
                fontWeight: "bold",
                fontSize: pxToRem(16),
                borderColor: '#FDD000',
                '&:hover': {
                    border: 0
                },
                outline: 'none'
            },
            input: {
                padding: 11,
            },
            notchedOutline: {
                borderColor: '#FDD000',
                '&:hover': {
                    borderColor: '#FDD000'
                }
            }
        },
        MuiTableCell: {
            head: {
                color: '#fff'
            }
        },
        MuiGridListTile: {
            root: {
                textAlign: 'center',

            },
            tile: {
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent:'center',
            },
        },
        MuiDialog: {
            paper: {
                overflowX: 'hidden',
                overflowY: 'hidden'
            }
        },
    },
});

export default theme;