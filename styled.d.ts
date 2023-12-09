import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string & {
      P25: string;
      P50: string;
      P100: string;
      P200: string;
      P300: string;
      P400: string;
      P500: string;
      P600: string;
      P700: string;
      P800: string;
      P900: string;
    };
    secondary: string & {
      S25: string;
      S50: string;
      S100: string;
      S200: string;
      S300: string;
      S400: string;
      S500: string;
      S600: string;
      S700: string;
      S800: string;
      S900: string;
    };
  }
}
