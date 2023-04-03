import { createTheme  } from '@mui/material'
import { grey, red } from '@mui/material/colors';


export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#4a18c'
      },
      secondary: {
        main: '#19857b'
      },
      error: {
        main: red.A400
      }
    },

    components: {
      MuiAppBar: {
        defaultProps: {  },
        styleOverrides: {
          root: {
            backgroundColor: '#4a148c'
          }
        }
      }
    }

});