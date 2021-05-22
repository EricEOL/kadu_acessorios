import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';

export function Header() {
  return (
      <Flex
        as="header"
        w="100%"
        h={["300","600"]}
        mx="auto"
        bgImage="url('/images/car-bg2.jpg')"
        bgPosition={["center"]}
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Logo />
      </Flex>
  )
}