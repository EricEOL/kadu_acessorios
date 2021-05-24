import { Logo } from './Logo';
import { ImageSlider } from '../ImageSlider';

const images = [
  "url('/images/banner_1.jpg')",
  "url('/images/banner_2.jpg')",
  "url('/images/banner_3.jpg')",
]

export function Header() {

    return (
      <ImageSlider 
        width="100%"
        height={["300", "600"]}
        images={images}
      >
        <Logo />
      </ImageSlider>
    )

/*   return (
    <Flex
      as="header"
      w="100%"
      h={["300", "600"]}
      mx="auto"
      bgImage="url('/images/banner_1.jpg')"
      bgPosition={["center"]}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Logo />
    </Flex>
  ) */
}