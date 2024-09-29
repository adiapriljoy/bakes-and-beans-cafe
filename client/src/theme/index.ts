import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
  InputGroup,
} from "@chakra-ui/react";
import { ButtonStyle } from "./componentStylesConfig/ButtonStyle";
import { lightTheme } from "./lightTheme";
import { InpuStyle } from "./componentStylesConfig/InpuStyle";
import { TextStyle } from "./componentStylesConfig/TextStyle";
import { SelectStyle } from "./componentStylesConfig/SelectStyle";
import { CardStyle } from "./componentStylesConfig/CardStyle";

const globalStyles = {
  styles: {
    global: {
      body: {
        color: lightTheme.colors.primaryDark
      },
      'input[type="password"]::-ms-reveal, input[type="password"]::-ms-clear': {
        display: "none", // Hide in Microsoft browsers
      },
      'input[type="password"]::-webkit-clear-button': {
        display: "none", // Hide in WebKit browsers
      },
      'input[type="password"]::-webkit-inner-spin-button, input[type="password"]::-webkit-outer-spin-button': {
        display: "none", // Hide any extra buttons in WebKit browsers
      },
      'input[type="password"]::-moz-clear': {
        display: "none", // Hide in Firefox
      },
    },
  },
};

const theme = extendTheme(
  {
    initialColorMode: "light",
    useSystemColorMode: true,
    ...globalStyles,
    colors: { ...lightTheme.colors },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Button: ButtonStyle,
      Input: InpuStyle,
      Text: TextStyle,
      Select: SelectStyle,
      Card: CardStyle,
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Input", "Checkbox"],
  }),
  withDefaultVariant({
    variant: "outline",
    components: ["Input", "Select", "Textarea"],
  })
);

export default theme;
