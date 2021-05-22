import { Header } from '../components/Header';
import { Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { CardService } from '../components/CardServices';

export default function Home() {
  return (
    <Box>
      <Header />

      <Flex pt="8" pb="8" justify="center" align="center" w="100%" direction="column">

        <Text fontSize={["1xl", "3xl"]} fontWeight="bold" textAlign="center">SERVIÇOS QUE OFERECEMOS</Text>

        <Box>
          <Flex justify="center" align="center" w="100%" mt="4" direction="column">

            <Flex w={["95%", "630px"]} justify={["center", "space-between"]} align="center" direction={["column", "row"]}>
              <CardService title="SUSPENSÃO" icon={"/icons/suspension.svg"} />
              <CardService title="AMORTECEDORES" icon={"/icons/shock_breaker.svg"} />
            </Flex>
            <Flex w={["95%", "630px"]} justify={["center", "space-between"]} align="center" direction={["column", "row"]}>
              <CardService title="FREIOS" icon={"/icons/brake.svg"} />
              <CardService title="MECÂNICA DE MOTORES" icon={"/icons/car-engine.svg"} />
            </Flex>

          </Flex>
        </Box>

      </Flex>

      <Flex pt="4" justify="center" align="center" w="100%" direction="column">

        <Text mb="4" fontSize={["1xl", "3xl"]} fontWeight="bold" textAlign="center">FALE COM O MECÂNICO</Text>

        <Flex
          align="center"
          justify="space-evenly"
          bg="gray.800"
          padding="12px"
          borderRadius="4px"
          mb="4"
          w={["95vw", "630px"]}
          h={["280px","250px"]}
          direction={["column","row"]}
        >
          <Flex align="center" justify="center" borderRadius="50%" bg="gray.700" padding="10px" w="160px" h="160px">
            <Image src="/icons/mechanic.svg" width={150} height={150} />
          </Flex>

          <Box>
            <Text mb="2">Profissional: <Text as="strong">Paulo Cesar</Text></Text>
            <Text mb="2">Telefone: <Text as="strong">(21) 99999-9999</Text></Text>
            <Text>E-mail: <Text as="strong">paulocesar@gmail.com</Text></Text>
          </Box>
        </Flex>

      </Flex>
    </Box>
  )
}
