// This file is part of cedge-library

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      background: string;
      text: string;
    };
    fonts: {
      family: {
        primary: string;
      };
      types: {
        small: {
          lineHeight: string;
          fontWeight: string;
          size: string;
        };
        medium: {
          lineHeight: string;
          fontWeight: string;
          size: string;
        };
        large: {
          lineHeight: string;
          fontWeight: string;
          size: string;
        };
        extraLarge: {
          lineHeight: string;
          fontWeight: string;
          size: string;
        };
      };
    };
    sizes: {
      logo: {
        small: "5rem";
      };
    };
  }
}
