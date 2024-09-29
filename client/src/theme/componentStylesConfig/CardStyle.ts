import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { cardAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(cardAnatomy.keys);

const variants = {
    filled: definePartsStyle({
        container: {
            backgroundColor: "secondary",
            borderColor: "primary",
            borderWidth: "1px",
            borderRadius: "8px",
            color: "primaryDark",
            boxShadow: "2xl",
        },
    }),
};

export const CardStyle = defineMultiStyleConfig({ variants });
