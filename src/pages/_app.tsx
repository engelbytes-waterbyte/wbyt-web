import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

// color codes for transparency in hex: https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
const wbytTheme = {
  colors: {
    waterblue: '#022EC7',
    buttonfill: '#022EC71A',
    buttonstroke: '#022EC74D',
    dunkelgrau: '#5E5E5E',
    dunkelschwarz: '#000000'
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={wbytTheme}>
      <>
        geht dahi
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
