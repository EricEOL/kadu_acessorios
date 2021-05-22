import { Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

export function CardService({title, icon}) {
  return (
    <Flex 
      align="center"
      bg="gray.800"
      padding="12px"
      borderRadius="4px"
      mb="4"
      w={["95vw","300px"]}
    >
      <Box borderRadius="50%" bg="gray.700" padding="10px" w="60px" h="60px">
        <Image src={icon} width={50} height={50}/>
      </Box>
      <Text ml="24px" fontWeight="bold">
        {title}
      </Text>
    </Flex>
  )
}