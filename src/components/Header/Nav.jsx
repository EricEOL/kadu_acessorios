import { HStack, Button } from '@chakra-ui/react';
import Link from 'next/link';

export function Nav() {
  return (
    <HStack spacing="12" pr="40px">
      <Button as="a" href="#services" colorScheme="red" bg="transparent">SERVIÇOS</Button>
      <Button as="a" href="#contact-us" colorScheme="red" bg="transparent">CONTATO</Button>
      <Button as="a" href="#location" colorScheme="red" bg="transparent">LOCALIZAÇÃO</Button>
    </HStack>
  )
}