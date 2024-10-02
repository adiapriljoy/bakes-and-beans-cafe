import { defineStyleConfig } from "@chakra-ui/react";
import { darkenHexColor } from "../../utils/darkenHexcolor";

export const InpuStyle = defineStyleConfig({
  baseStyle: {},
  sizes: {},
  variants: {
    filled: {
      field: {
        borderRadius: "0.25rem",
        border: "1px",
        borderColor: "#E2E8F0",
        color: "primaryDark",
        _focus: {
          borderColor: "primary",
        },
        _active: {
          borderColor: "primary",
        },
      },
    },
    outline: {
      borderRadius: "0.25rem", 
      field: {
        backgroundColor: "background",
        _placeholder: {
          color: "rgba(76, 61, 61, 0.5)",
        },
        borderColor: "#E2E8F0",
        boxShadow: "md",

        color: "primaryDark",
        _focus: {
          borderColor: "primary",
          borderWidth: "0.1rem",
          boxShadow: "md",
        },

        _disabled: {
          backgroundColor: "#E4E4E4",
          borderColor: darkenHexColor("#E4E4E4", 0.2),
          boxShadow: "md",
        },

        _invalid: {
          borderColor: "danger",
          borderWidth: "0.1rem",
          boxShadow: "md",

          _focus: {
            borderColor: "danger",
          }
        }
      },
    },
  },
  defaultProps: {
    variant: "outline",
  },
});