import Image from 'next/image';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Flex, Box, Text } from '@chakra-ui/react';
import { CardService } from '../components/CardServices';
import { ImageSlider } from '../components/ImageSlider';

const imagesOficina = [
  "url('/images/oficina_1.webp')",
  "url('/images/oficina_2.webp')",
  "url('/images/oficina_3.webp')",
]

const Home = ({imagesBanner}) => {
  return (
    <Box>
      <Header images={imagesBanner}/>

      <Flex pt="8" pb="8" justify="center" align="center" w="100%" direction="column">

        <Text id="services" fontSize={["1xl", "3xl"]} fontWeight="bold" textAlign="center">SERVIÇOS QUE OFERECEMOS</Text>

        <Box>
          <Flex justify="center" align="center" w="100%" mt="4" direction="column">

            <Flex w={["95%", "630px"]} justify={["center", "space-between"]} align="center" direction={["column", "row"]}>
              <CardService title="SUSPENSÃO" icon={"/icons/suspension.svg"} />
              <CardService title="AMORTECEDORES" icon={"/icons/shock_breaker.svg"} />
            </Flex>
            <Flex w={["95%", "630px"]} justify={["center", "space-between"]} align="center" direction={["column", "row"]}>
              <CardService title="FREIOS" icon={"/icons/brake.svg"} />
              <CardService title="MECÂNICA DE MOTORES" icon={"/icons/car-engine.svg"} />
            </Flex>

          </Flex>
        </Box>

      </Flex>

      <Flex pt="4" pb="8" justify="center" align="center" w="100%" direction="column">

        <Text id="contact-us" mb="4" fontSize={["1xl", "3xl"]} fontWeight="bold" textAlign="center">FALE COM O MECÂNICO</Text>

        <Flex
          align="center"
          justify="space-evenly"
          bg="gray.800"
          padding="12px"
          borderRadius="4px"
          mb="4"
          w={["95vw", "630px"]}
          h={["280px", "250px"]}
          direction={["column", "row"]}
        >
          <Flex align="center" justify="center" borderRadius="50%" bg="gray.700" padding="10px" w="160px" h="160px">
            <Image src="/icons/mechanic.svg" width={120} height={120} />
          </Flex>

          <Box mt={["8px", "0"]}>
            <Text mb="2">Profissional: <Text as="strong">Paulo Marques</Text></Text>
            <Text mb="2">Telefone: <Text as="strong" color="yellow.400"><a href="http://api.whatsapp.com/send?1=pt_BR&phone=5521974933498" target="_blank">(21) 97493-3498 <Image src="/icons/whatsapp.svg" width={20} height={20} /></a></Text></Text>
            <Text>E-mail: <Text as="strong">paulomarques9170@gmail.com</Text></Text>
          </Box>
        </Flex>

      </Flex>

      <Flex pt="4" pb="8" justify="center" align="center" w="100%" direction="column">

        <Text id="location" mb="4" fontSize={["1xl", "3xl"]} fontWeight="bold" textAlign="center">VENHA ATÉ A NOSSA OFICINA</Text>

        <Flex
          align="center"
          justify="space-evenly"
          direction="column"
          bg="gray.800"
          padding="12px"
          borderRadius="4px"
          mb="4"
          w={["95vw", "630px"]}
          h={["600px", "600px"]}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14706.935744119686!2d-43.26182070128308!3d-22.84933112344026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997bfed4512355%3A0xc07fd22fc55b58d6!2sKADU%20ACESS%C3%93RIOS!5e0!3m2!1spt-BR!2sbr!4v1621712474378!5m2!1spt-BR!2sbr"
            width="100%"
            height="400px"
            loading="lazy"
          ></iframe>

          <Box>
            <Flex w={["100%", "400px"]} justify="space-between" direction={["column", "row"]}>
              <Text mb="2">Rua: <Text as="strong">Cardoso de Morais</Text></Text>
              <Text mb="2">Nº: <Text as="strong">400 A/B</Text></Text>
            </Flex>
            <Flex w={["100%", "400px"]} justify="space-between" direction={["column", "row"]}>
              <Text mb="2">Bairro: <Text as="strong">Bonsucesso</Text></Text>
              <Text mb="2">Cidade: <Text as="strong">Rio de Janeiro/RJ</Text></Text>
            </Flex>
          </Box>

        </Flex>

      </Flex>

      <Flex pt="4" pb="8" justify="center" align="center" w="100%" direction="column">

        <Text id="office" mb="4" fontSize={["1xl", "3xl"]} fontWeight="bold" textAlign="center">NOSSA OFICINA</Text>

        <Flex
          align="center"
          justify="space-evenly"
          bg="gray.800"
          padding="12px"
          borderRadius="4px"
          mb="4"
          w={["95vw", "630px"]}
          h={["280px", "450px"]}
          direction={["column", "row"]}
        >
          <ImageSlider
            width="100%"
            height={["250", "400"]}
            images={imagesOficina}
          />
        </Flex>

      </Flex>

      <Footer />
    </Box>
  )
}

export const getStaticProps = async () => {
  
  const images = [
    "url('/images/banner_1.webp')",
    "url('/images/banner_2.webp')",
    "url('/images/banner_3.webp')",
  ]
  
  return {
    props: {
      imagesBanner: images
    }
  }
}

export default Home;