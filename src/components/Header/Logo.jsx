import { Text, Flex } from '@chakra-ui/react';

export function Logo() {
  return (
    <Flex
      w="100%"
      h={["20", "100"]}
      px="4"
      bg="rgba(24,27,35,0.4)"
      align="center"
    >
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
    </Flex>
  )
}