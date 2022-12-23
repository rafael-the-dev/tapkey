import * as React from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { theme } from 'src/material-ui/theme';
import createEmotionCache from 'src/material-ui/createEmotionCache';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { ThemeProvider } from '@mui/material/styles';

import Layout from 'src/components/layout';

import 'src/styles/reset.css'
import 'src/styles/global.css';
import 'src/styles/tailwind.css';

import { AppContextProvider } from 'src/context';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <AppContextProvider>
                    <CacheProvider value={emotionCache}>
                        <ThemeProvider theme={theme}>
                            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                            <CssBaseline />
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </ThemeProvider>
                    </CacheProvider>
                </AppContextProvider>
            </LocalizationProvider>
        </>
    );
}

export default MyApp;
