import { defineStyleConfig } from "@chakra-ui/react";
import { darkenHexColor } from "../../utils/darkenHexcolor";

export const ButtonStyle = defineStyleConfig({
  // style object for base or default style
  baseStyle: {
    borderRadius: 4,
    _focus: {
      ring: 2,
      ringColor: "primary",
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    solid: {
      bg: "primary", 
      color: "secondary",
        
      _loading: {
        backgroundColor: "primary", 
        cursor: "not-allowed", 
      }, 

      _focus: {
        ring: 1,
        borderRadius: 6,
        ringColor: "primary",
      },

      _hover: {
        backgroundColor: darkenHexColor("#C07F00", 0.2),
        borderColor: "primary",
      },

      _active: {
        backgroundColor: darkenHexColor("#C07F00", 0.2),
      },

      _disabled: {
        _hover: {
          backgroundColor: "primary",
        },
      },
    },
    rounded: {
      bg: "primary", 
      color: "secondary",
      borderRadius: 50,
        
      _loading: {
        backgroundColor: "primary", 
        cursor: "not-allowed", 
      }, 

      _focus: {
        ring: 1,
        ringColor: "primary",
      },

      _hover: {
        backgroundColor: darkenHexColor("#C07F00", 0.2),
        borderColor: "primary",
      },

      _active: {
        backgroundColor: darkenHexColor("#C07F00", 0.2),
      },

      _disabled: {
        _hover: {
          backgroundColor: "primary",
        },
      },
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: { colorScheme: "primary" },
});
