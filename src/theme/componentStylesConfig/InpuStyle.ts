import { defineStyleConfig } from "@chakra-ui/react";

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
        boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)",

        color: "primaryDark",
        _focus: {
          borderColor: "primary",
          borderWidth: "0.1rem",
          boxShadow: "none",
        },

        _disabled: {
          backgroundColor: "rgba(228, 228, 228, 0.8)",
          boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)",
        }
      },
    },
  },
  defaultProps: {},
});