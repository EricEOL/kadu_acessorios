import { Box, Flex, VStack } from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';

export function ImageSlider({ width, height, images, children }) {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter < images.length) {
      setTimeout(() => {
        setCounter(counter + 1);
      }, 5000)
    } else {
      setCounter(0);
    }
  }, [counter])

  return (
    <Flex
      w={width}
      h={height}
      bgImage={images[counter]}
      bgPosition={["center"]}
      bgSize="cover"
      bgRepeat="no-repeat"
      align="right"
      direction="column"
      transition="2s"
      justify="space-between"
    >
      {children}
      <VStack align="right" p="4px 0 50px 4px">
        {images.map((item, index) => (
          <Box
            key={index}
            w="20px"
            h="20px"
            borderRadius="4px"
            bg={index == counter ? '#ffffff' : '#333333'}
            mt="5px"
            opacity="0.4"
          >
          </Box>
        ))}
      </VStack>
    </Flex>
  )
}