/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FaSistrix } from "react-icons/fa";
import { FiList } from "react-icons/fi";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Text, Image } from "@chakra-ui/react";

const FindMenu: React.FC = () => {
  return (
    <>
      <Stack spacing={4} direction="row" align="center" justify="center">
        <Image
          borderRadius="full"
          boxSize="70px"
          src="/imgMarket.png"
          alt="Dan Abramov"
        />
        <Text fontWeight="bold">Supermercado Teste</Text>

        <InputGroup maxW="sm">
          <InputLeftElement
            pointerEvents="none"
            children={<FaSistrix color="gray.300" />}
          />
          <Input placeholder="O que você procura?" />
        </InputGroup>

        <Button
          colorScheme="gray"
          variant="ghost"
          leftIcon={<FiList size="1.5em" />}
          fontSize="1.0em"
        >
          Listas
        </Button>

        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            fontSize="1.1em"
            rightIcon={<ChevronDownIcon />}
            leftIcon={<HiOutlineUser size="1.5em" />}
            bg="transparent"
          >
            Minha Conta
          </MenuButton>
          <MenuList>
            <MenuItem>Entrar</MenuItem>
            <MenuItem>Termos de Serviço </MenuItem>
            <MenuItem>Política de Privacidade</MenuItem>
          </MenuList>
        </Menu>

        <Button
          colorScheme="gray"
          variant="ghost"
          leftIcon={<AiOutlineShoppingCart size="1.5em" />}
          fontSize="1.0em"
          bgColor={"#43B02A"}
          color={"white"}
          _hover={{ bgColor: "#238C23" }}
        >
          Carrinho
        </Button>
      </Stack>
    </>
  );
};

export default FindMenu;
