import { Flex, Box, Text } from '@chakra-ui/react';
import { Logo } from './Logo';

export function Header() {
  return (
    <Box>
      <Flex
        as="header"
        w="100%"
        h={["300","600"]}
        mx="auto"
        bgImage="url('/images/background-top.jpg')"
        bgPosition={["top","bottom"]}
        bgSize="auto"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Logo />
      </Flex>
      <Box
        pt="8"
      >
        <Text fontSize={["1xl","3xl"]} fontWeight="bold" textAlign="center">SERVIÇOS QUE OFERECEMOS</Text>

      </Box>
    </Box>
  )
}