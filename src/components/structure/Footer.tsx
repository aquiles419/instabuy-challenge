import { Box, Flex, Link, Stack, Text, Image } from "@chakra-ui/react";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTelephone,
  BsWhatsapp,
} from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <Box py={8}>
      <Flex
        maxW="6xl"
        mx="auto"
        px={4}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
      >
        <Stack spacing={4} mb={{ base: 4, md: 0 }}>
          <Text fontWeight="bold">Institucional</Text>
          <Link href="#">Início</Link>
          <Link href="#">Sobre Nós</Link>
          <Link href="#">blog</Link>
        </Stack>
        <Stack spacing={4} mb={{ base: 4, md: 0 }}>
          <Text fontWeight="bold">Suporte</Text>
          <Link href="#">Fale Conosco</Link>
          <Link href="#">Primeira Compra</Link>
          <Text fontWeight="bold">
            Telefone
            <Flex align="center">
              <BsTelephone />
              <Link fontWeight="bold" href="tel:+556199999999" ml={2}>
                (61) 9999-9999
              </Link>
            </Flex>
          </Text>

          <Text fontWeight="medium">
            E-mail
            <Link href="">
              <IoMailOutline />
            </Link>
          </Text>
        </Stack>
        <Stack spacing={4} mb={{ base: 4, md: 0 }}>
          <Text fontWeight="bold">Termos</Text>
          <Link href="#">Termos de Uso</Link>
          <Link href="#">Política de Privacidade</Link>
          <Text fontWeight="bold"> Segurança</Text>
          <Image
            borderRadius="full"
            width="8em"
            src="/google.png"
            alt="Dan Abramov"
          />
        </Stack>
        <Stack spacing={4} mb={{ base: 4, md: 0 }}>
          <Text fontWeight="bold">Nossos Canais</Text>
          <Flex align="center">
            <Link href="#">
              <BsInstagram
                style={{
                  fontSize: "24px",
                  color: "#E4405F",
                  marginRight: "8px",
                }}
              />
            </Link>
            <Link href="#">
              <BsFacebook
                style={{
                  fontSize: "24px",
                  color: "#1877F2",
                  marginLeft: "8px",
                  marginRight: "8px",
                }}
              />
            </Link>
            <Link href="#">
              <BsWhatsapp
                style={{
                  fontSize: "24px",
                  color: "#25D366",
                  marginLeft: "8px",
                }}
              />
            </Link>
          </Flex>
          <Text fontWeight="bold">Pagamento</Text>
          <Text fontWeight="medium">
            Pagamento Online
            <Flex align="center">
              <Image src="/pix.gif" h="1em" m="1px" />
              <Box boxSize="40px" h="1.6em" m="1px">
                <Image src="/elo.gif" boxSize="100%" />
              </Box>
              <Box boxSize="40px" h="1em" m="1px">
                <Image src="/visa.gif" boxSize="100%" />
              </Box>
              <Box boxSize="40px" h="1.8em" m="1px">
                <Image src="/master.gif" boxSize="100%" />
              </Box>
              <Box boxSize="40px" h="1em" m="1px">
                <Image src="/hipercard.gif" boxSize="100%" />
              </Box>
              <Box boxSize="40px" h="1.3em" m="1px">
                <Image src="/amex.gif" boxSize="100%" />
              </Box>
            </Flex>
            <Box boxSize="18em" h="10m">
              <Text fontWeight="medium">
                Ou pague na entrega com dinheiro, cartão ou boleto
              </Text>
            </Box>
          </Text>
          <Text fontWeight="semibold">Desenvolvido por</Text>
          <Box>
            <Image src="/instabuy.png" boxSize="100%" />
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
