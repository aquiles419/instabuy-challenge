import { useState } from "react";
import { Box, Flex, IconButton, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import ProductCard from "./ProductCard";

const ProductCarousel = () => {
  const products = [
    {
      imageUrl: "/product1.png",
      description: "Produto 1",
      currentPrice: "100,00",
      oldPrice: "150,00",
    },
    {
      imageUrl: "/product1.png",
      description: "Produto 1",
      currentPrice: "100,00",
      oldPrice: "150,00",
    },
    {
      imageUrl: "/product1.png",
      description: "Produto 1",
      currentPrice: "100,00",
      oldPrice: "150,00",
    },
    // Adicione mais produtos conforme necessário
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const { imageUrl, description, currentPrice, oldPrice } =
    products[currentIndex];

  return (
    <Box bg="gray.200" p={4} borderRadius="md" position="relative">
      <Flex justifyContent="center">
        <IconButton
          icon={<Icon as={ChevronLeftIcon} />}
          aria-label="Slide anterior"
          onClick={handlePrev}
          position="absolute"
          left="4"
          top="50%"
          transform="translateY(-50%)"
          variant="outline"
        />
        <ProductCard
          imageUrl={imageUrl}
          description={description}
          currentPrice={currentPrice}
          oldPrice={oldPrice}
        />
        <IconButton
          icon={<Icon as={ChevronRightIcon} />}
          aria-label="Próximo slide"
          onClick={handleNext}
          position="absolute"
          right="4"
          top="50%"
          transform="translateY(-50%)"
          variant="outline"
        />
      </Flex>
    </Box>
  );
};

export default ProductCarousel;
