import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider  } from '@mui/material';
import { lightTheme, darkTheme } from '@/themes';
import { UIProvider } from '@/context/ui';
import { EntriesProvider } from '@/context/entries/EntriesProvider';
import { SnackbarProvider } from 'notistack'


function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={ 3 }>
      <EntriesProvider entries={[]}>
        <UIProvider sidemenuOpen={false} isAddingEntry={false} isDragging={false}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  )
    
}

export default App
