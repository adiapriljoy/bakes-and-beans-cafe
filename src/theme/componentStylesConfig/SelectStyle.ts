import { defineStyleConfig } from "@chakra-ui/react";

export const SelectStyle = defineStyleConfig({
  baseStyle: {
    color: 'gray.500'
  },
  sizes: {},
  variants: {
    outline: {
      borderRadius: "0.25rem",
      field: {
        backgroundColor: "background",
        _placeholder: {
          color: "gray.300",
        },
        boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)",

        color: "primaryDark",
        _focus: {
          borderColor: "primary",
          borderWidth: "0.125rem",
          boxShadow: "none",
        },
      },
    },
  },
  defaultProps: {},
});
