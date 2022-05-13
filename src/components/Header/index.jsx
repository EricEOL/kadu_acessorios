import { Logo } from './Logo';
import { ImageSlider } from '../ImageSlider';

export function Header({images}) {
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