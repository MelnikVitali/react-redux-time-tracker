import { createMuiTheme } from '@material-ui/core/styles';

import { pxToRem } from './utils/pxToRem';


const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 320,
            sm: 560,
            md: 560,
            lg: 560,
            xl: 560,
        },
    },
    spacing: 6,
    typography: {
        fontFamily: 'PT Sans, sans-serif'
    },
    palette: {
        primary: {
            main: '#3faf6c',
            mainHover: '#D24335',
            contrastText: '#212529',
            errorText: '#db3445'
        },
        secondary: {
            main: '#007bff',
            contrastText: '#4c4b4b',
        },
        textPrimary: {
            main: '#ffffff'
        },
    },
    backgroundColor: '#fff',
    backgroundColor2: '#f9f9f3',
    backgroundColorInput: '#f5f8fa',
    mobileMenuTextColor: '#000000',
    boxShadowError: '0 0 0 3px #f8d6da',
    radioButtonHoverColor: '#ebf1f5',
    inputBorderColor: '#ced4da',
    inputErrorBoxShadow: '0 0 0 3px #f8d6da',
    inputButtonBackgroundColor: '#f8f7f5',
    placeholderGrayColor: '#b2b9c0',
    hoverButtonGreyColor: '#DBE0E6',
    formRegisterColor: '#212529',
    helperText: '#6c757d',
    footerBorderColor: '#ececec',
    circleBorderRadius: '50%',
    testAssignmentBannerBackgroundZIndex: '-1',
    testAssignmentBlockZIndex: 2,
    photoUploadInputZIndex: 2,
    photoUploadLabelZIndex: 1,
    photoUploadLabelButtonZIndex: 3,
    overrides: {
        MuiCssBaseline: {
            '@global': {
                'html': {
                    boxSizing: 'border-box',
                    scrollBehavior: 'smooth',
                    width: '100%',
                    height: '100%'
                },
                'html, body': {
                    outline: 'none',
                },
                body: {
                    margin: '0 auto',
                    backgroundColor: '#FFFFFF',
                    fontSize: pxToRem(16),
                    color: '#000000',
                },
                '#root': {
                    width: '100%',
                    display: 'flex',
                    boxSizing: 'border-box',
                    justifyContent:'center',
                    alignItems: 'center'
                },
                ':focus': {
                    outline: 'none'
                },
                a: {
                    textDecoration: 'none !important',
                },
            },
        },
        MuiTypography: {
            h1: {
                fontSize: pxToRem(48),
                color: '#000000',
                fontWeight: 700,
                textTransform: 'lowercase',
            },
            h2: {
                fontSize: pxToRem(30),
                color: '#212529',
                fontWeight: 400,
                lineHeight: pxToRem(50),
            },
            h3: {
                fontSize: pxToRem(24),
                color: '#212529',
                fontWeight: 400,
                lineHeight: pxToRem(30),
            },
            h4: {
                fontSize: pxToRem(16),
                color: '#212529',
                fontWeight: 400,
                lineHeight: pxToRem(22),
            },
            h6: {
                fontSize: pxToRem(24),
                lineHeight: pxToRem(30),
            },
            subtitle1: {
                fontSize: pxToRem(16),
                color: '#fff',
                fontWeight: 400,
                lineHeight: pxToRem(24),
            },
            body1: {
                fontSize: pxToRem(16),
                color: '#4c4b4b',
                fontWeight: 400,
                lineHeight: pxToRem(24),
            },
            body2: {
                color: '#212529'
            }
        },
        MuiInputBase:{
            adornedEnd:{
                paddingRight: '0 !important'
            }
        },
        MuiListItem:{
          root: {
              paddingRight: 0
          }
        },
        MuiListItemIcon:{
            root:{
                minWidth: `${pxToRem(49)} !important`
            }
        }

        // MuiButton: {
        //     root: {
        //         textTransform: 'none',
        //         fontSize: pxToRem(16),
        //         fontWeight: 600,
        //         padding: `${pxToRem(4.5)} ${pxToRem(58.5)}`,
        //     },
        //     containedPrimary: {
        //         color: '#fefefe',
        //         '&:hover': {
        //             backgroundColor: '#D24335'
        //         }
        //     },
        //     textPrimary: {
        //         '&:hover': {
        //             backgroundColor: 'transparent'
        //         }
        //     }
        // },
    },
});

export default theme;