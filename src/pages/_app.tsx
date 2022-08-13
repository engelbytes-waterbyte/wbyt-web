import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import Footer from "@components/footer/Footer";
import AboutSectionLayout from "@components/layout/AboutSectionLayout";
import { useRouter } from "next/router";
import BaseLayout from "@components/layout/BaseLayout";
import "@styles/globals.css";
import "tailwindcss/tailwind.css";
import { route } from "next/dist/server/router";

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
  { path: "/about", heading: "About", subheading: "About WBYT" },
  { path: "/projects", heading: "Projects", subheading: "Projects" },
  { path: "/team", heading: "Team", subheading: "Team" },
  { path: "/events", heading: "Events", subheading: "Events" },
  { path: "/stickers", heading: "Stickers", subheading: "Stickers" },
  { path: "/blog", heading: "Blog", subheading: "Blog" },
];

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  return (
    <ThemeProvider theme={wbytTheme}>
      <BaseLayout
        route={routes.find(
          (x) => route.pathname.includes(x.path) && x.path != "/"
        )}
      >
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
}

function GetMatchingRoute(theroute: string) {}

export default MyApp;
