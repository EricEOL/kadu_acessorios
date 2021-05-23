import { Text, Flex, useBreakpointValue } from '@chakra-ui/react';
import { Nav } from './Nav';

export function Logo() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      w="100%"
      h={["20", "120"]}
      px="4"
      bg="rgba(24,27,35,0.8)"
      align="center"
      justifyContent="space-between"
    >
      <Flex direction="column">
        <Text
          as="i"
          fontSize={["3xl", "7xl"]}
          fontWeight="bold"
          letterSpacing="1px"
          color="red.500"
          textShadow={"2px 2px 0 #ffffff"}
        >
          KADU
        <Text as="span" ml="15px" opacity={1}>
            ACESSÓRIOS
        </Text>
        </Text>
        <Text
          fontSize={["10px", "16px"]}
          mt={["-5px", "-20px"]}
          letterSpacing="2px"
          color="yellow.300"
          fontWeight="bold"
        >
          OFICINA MECÂNICA ESPECIALIZADA
        </Text>
      </Flex>
      {isWideVersion && <Nav />}
    </Flex>
  )
}