declare module "../assets/*.svg" {
    import React from "react";
    const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default Component;
}

declare module "react-double-marquee";
declare module "react-scroll";
