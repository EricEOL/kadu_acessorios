import { Logo } from './Logo';
import { ImageSlider } from '../ImageSlider';

const images = [
  "url('/images/banner_1.webp')",
  "url('/images/banner_2.webp')",
  "url('/images/banner_3.webp')",
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
}