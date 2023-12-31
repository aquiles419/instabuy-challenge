import { Box, Text, Flex, Stack } from "@chakra-ui/react";
import React from "react";

const AdditionalInfo: React.FC = () => {
  return (
    <Box py={8}>
      <Flex maxW="6xl" mx="auto" px={4}>
        <Stack>
          <Text fontSize="sm">
            Supermercado Modelo - CNPJ: 00.038.174/0001-43
          </Text>
          <Text fontSize="sm">
            Asa Norte, Campus Universitário Darcy Ribeiro Bloco A PMU I Sala AT
            08/03 - AC UNB, Edificio CDT, Brasília - DF
          </Text>
          <Text fontSize="sm">
            Supermercado Modelo - CNPJ: 00.038.174/0001-43
          </Text>
          <Text fontSize="sm">© 2023 Todos os Direitos Reservados</Text>
          <Text fontSize="sm">
            Fotos ilustrativas. Compras podem ser canceladas em caso de suspeita
            de fraude. O valor total de sua compra poderá ser alterado para mais
            ou para menos por conta dos produtos de peso variável. Preços,
            ofertas e condições exclusivos para internet e válidos durante o dia
            de hoje, podendo sofrer alterações sem prévia notificação. Em caso
            de divergência de valores no site, o valor válido é o do carrinho de
            compras. Venda sujeita à disponibilidade de estoque no dia da
            entrega. No caso de faltar algum produto, este não será entregue e o
            valor correspondente não será cobrado. Proibida a venda de bebidas
            alcoólicas para menores de 18 anos. Beba com moderação.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default AdditionalInfo;
