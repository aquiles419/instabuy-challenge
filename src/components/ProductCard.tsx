import { Box, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";

const ProductCard: React.FC = () => {
  const imageUrl = "/teste.png";
  const description = "Hamburguer 400/360G Seara Gourmet Angus";
  const currentPrice = "100,00";
  const oldPrice = "150,00";

  return (
    <Box maxW="13em" overflow="hidden">
      <Flex justifyContent="center" alignItems="center" h="150px">
        <Image
          src={imageUrl}
          alt="Product Image"
          boxSize="150px"
          objectFit="cover"
        />
      </Flex>
      <Box p="6">
        <Flex justifyContent="space-between" alignItems="baseline">
          <Text
            color="red.500"
            fontSize="md"
            fontWeight="bold"
            display="inline"
            verticalAlign="baseline"
          >
            R$ {currentPrice}
          </Text>
          <Text
            as="del"
            color="gray.600"
            fontSize="sm"
            display="inline"
            verticalAlign="baseline"
            pl="2"
            fontWeight="bold"
          >
            R$ {oldPrice}
          </Text>
        </Flex>
        <Text fontSize="sm" mt="0.8" color="gray.600">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default ProductCard;
