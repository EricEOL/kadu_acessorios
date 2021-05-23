import { HStack, VStack, Text, Link } from '@chakra-ui/react';
import Image from 'next/image';

export function Footer() {
  return (
    <HStack
      w="100%"
      justify="space-evenly"
      align="top"
      p="20px 5px 20px 5px"
      borderTop="2px solid rgba(255,255,255,0.6)"
      bg="gray.800"
      color="whiteAlpha.600"
    >

      <VStack align="right" w={["95px","200px"]}>
        <Text h="35px" fontSize={["sm", "md"]} fontWeight="bold" color="whiteAlpha.900">Sobre a Kadu Acessórios</Text>

        <Text textAlign="justify" fontSize={["sm", "md"]}>
          A Kadu Acessórios é uma oficina mecânica
          com muitos anos de anos de experiência em manutenção
          de veículos automotivos localizada em Bonsucesso. 
        </Text>
      </VStack>

      <VStack align="right">
        <Text h="35px" fontSize={["sm", "md"]} fontWeight="bold" color="whiteAlpha.900">Seções do Site</Text>

        <Link href="#services" colorScheme="red" bg="transparent" fontSize={["sm", "md"]}>Serviços</Link>
        <Link href="#contact-us" colorScheme="red" bg="transparent" fontSize={["sm", "md"]}>Contato</Link>
        <Link href="#location" colorScheme="red" bg="transparent" fontSize={["sm", "md"]}>Localização</Link>
      </VStack>

      <VStack align="right">
        <Text h="35px" fontSize={["sm", "md"]} fontWeight="bold" color="whiteAlpha.900">Desenvolvedor</Text>

        <Text fontSize={["sm", "md"]}>Eric Lopes</Text>
        <HStack>
          <Link href="https://github.com/EricEOL" target="_blank"><Image src="/icons/github.svg" width={25} height={25}/></Link>
          <Link href="https://www.linkedin.com/in/eric-oliveira-lopes/" target="_blank"><Image src="/icons/linkedin.svg" width={25} height={25}/></Link>
        </HStack>
      </VStack>

    </HStack>
  )
}