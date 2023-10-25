// This file is part of cedge-library

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
    fonts: {
      primary: string;
    };
    sizes: {
      logo: {
        small: string;
      };
    };
  }
}
