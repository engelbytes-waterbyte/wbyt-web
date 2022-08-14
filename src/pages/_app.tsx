import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import Footer from "@components/footer/Footer";
import AboutItemLayout from "@components/layout/AboutItemLayout";
import { useRouter } from "next/router";
import BaseLayout from "@components/layout/BaseLayout";
import "@styles/globals.css";
import "tailwindcss/tailwind.css";
import { route } from "next/dist/server/router";
import HomeTop from "@components/layout/HomeTop";
import HomeLayout from "@components/layout/HomeLayout";

export const wbytTheme = {
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

export interface Route {
  path: string;
  heading: string;
  subheading: string;
}

const routes: Route[] = [
  { path: "/", heading: "Home", subheading: "Welcome to WBYT" },
  { path: "/projects", heading: "Projects", subheading: "Projects" },
  { path: "/team", heading: "Team", subheading: "Team" },
  { path: "/blog", heading: "Blog", subheading: "Blog" },
];

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const routeObjOtherThanHome = routes.find(
    (x) => route.pathname.includes(x.path) && x.path != "/"
  );
  return (
    <ThemeProvider theme={wbytTheme}>
      {route.pathname == "/" ? (
        <HomeLayout><Component {...pageProps} /></HomeLayout>
      ) : (
        <BaseLayout route={routeObjOtherThanHome}>
          <Component {...pageProps} />
        </BaseLayout>
      )}
    </ThemeProvider>
  );
}

function GetMatchingRoute(theroute: string) {}

export default MyApp;
