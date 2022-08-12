import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import Footer from "@components/footer/Footer";
import AboutSectionLayout from "@components/layout/AboutSectionLayout";
import { useRouter } from "next/router";
import BaseLayout from "@components/layout/BaseLayout";
import "@styles/globals.css";
import "tailwindcss/tailwind.css";
// color codes for transparency in hex: https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
const wbytTheme = {
  colors: {
    waterblue: "#022EC7",
    buttonfill: "#022EC71A",
    buttonstroke: "#022EC74D",
    dunkelgrau: "#5E5E5E",
    dunkelschwarz: "#000000",
    transparent: "#0000000",
    white: "#fff",
    iconStrokeWidth: "10%",
  },
};

const Upandstyle = styled.div`
  background-color: red;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider theme={wbytTheme}>
      <>
        {router.pathname != "/" ? (
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        ) : (
          <Component {...pageProps} />
        )}
        {/* <Footer /> */}
      </>
    </ThemeProvider>
  );
}

export default MyApp;
