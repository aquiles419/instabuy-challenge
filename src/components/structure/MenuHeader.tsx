import { Button } from "@chakra-ui/button";
import { Stack } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { BsTags } from "react-icons/bs";
import { TbGrill } from "react-icons/tb";
import { LuBeef } from "react-icons/lu";
import { LiaCheeseSolid } from "react-icons/lia";
import React from "react";

const MenuHeader: React.FC = () => {
  return (
    <Stack direction="row" spacing={4} align="center" justify="center" py={4}>
      <Button
        colorScheme="gray"
        variant="ghost"
        leftIcon={<IoHomeOutline size="1.5em" />}
        fontSize="lg"
      >
        Início
      </Button>
      <Button
        colorScheme="gray"
        variant="ghost"
        leftIcon={<BiCategory size="1.5em" />}
        fontSize="lg"
      >
        Todas Categorias
      </Button>
      <Button
        colorScheme="gray"
        variant="ghost"
        leftIcon={<BsTags size="1.5em" />}
        fontSize="lg"
      >
        Ofertas
      </Button>
      <Button
        colorScheme="gray"
        variant="ghost"
        leftIcon={<TbGrill size="1.5em" />}
        fontSize="lg"
      >
        Kit Churrasco
      </Button>
      <Button
        colorScheme="gray"
        variant="ghost"
        leftIcon={<LuBeef size="1.5em" />}
        fontSize="lg"
      >
        Açougue / Aves / Peixaria
      </Button>
      <Button
        colorScheme="gray"
        variant="ghost"
        leftIcon={<LiaCheeseSolid size="1.5em" />}
        fontSize="lg"
      >
        Frios e Laticínios
      </Button>
    </Stack>
  );
};

export default MenuHeader;
