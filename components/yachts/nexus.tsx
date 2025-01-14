import { AspectRatio, Box, Img, List, ListItem, Text, UnorderedList, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { TextBlock, TextBlockYachtDescription } from '../text-block';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';


export const Nexus = React.memo(() => {
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');

  const images = [
    {id: 1, src:'/yachts/nexus/1.webp'},
    {id: 2, src:'/yachts/nexus/2.webp'},
    {id: 3, src:'/yachts/nexus/3.webp'},
    {id: 4, src:'/yachts/nexus/4.webp'},
    {id: 5, src:'/yachts/nexus/5.webp'},
    {id: 6, src:'/yachts/nexus/6.webp'},
    {id: 7, src:'/yachts/nexus/7.webp'},
    {id: 8, src:'/yachts/nexus/8.webp'},
    {id: 9, src:'/yachts/nexus/9.webp'},
    {id: 10, src:'/yachts/nexus/10.webp'},
    // {id: 11, src:'/yachts/nexus/11.webp'},
    {id: 12, src:'/yachts/nexus/12.webp'},
    {id: 13, src:'/yachts/nexus/13.webp'},
    {id: 14, src:'/yachts/nexus/14.webp'},
    {id: 15, src:'/yachts/nexus/15.webp'},
  ]


  return (<Box display='flex' flexDirection='column' p={isSmallerThan900 ? '2rem 2rem' : '4rem 8rem'} >
      <Text as='h1' textStyle='yachtBlueTitle' align='left'  mb={isSmallerThan900 ? '2rem' : '1rem'}>Nexus</Text>

      <Box display='grid' 
          justify-items="center"
          align-items="center"
          gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} 
          columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} 
          mb={isSmallerThan900 ? '2rem' : '4rem'}>
        <Box mb={isSmallerThan500 ? '2rem' : 0}
          display="inline-grid"
          justify-items="center"
          margin="auto"
          align-items="center">
          <TextBlock 
            mb={isSmallerThan900 ? '0.5rem' : '1.5rem'}
            title='Welcome to the New Era of responsible luxury' 
            textStylesTitle='yachtBlockTitle'
            text="Introducing the future of luxury maritime travel: NEXUS  100-foot hybrid catamaran. Today, we will explore the key features and innovations that make the Nexus a prime example of responsible yachting." 
            />
          <TextBlock
            mb="1.5rem"
            text="A yacht where elegance meets innovation, harnessing the power of cutting-edge hybrid technology."
          />
          
          <TextBlock 
            title='Interior' 
            textStylesTitle='yachtBlockTitle'
            text="Indulge in spacious, meticulously crafted interiors. From the state-of-the-art navigation deck to lavish suites, every detail exudes sophistication." 
            />
        </Box>
        <Box display="grid">
          <AspectRatio ratio={isSmallerThan900 ? 1.5 : 1.8} maxW='100%' my={isSmallerThan900 ? '1.5rem' : '2rem'}>
            <Img loading="lazy" src='/yachts/nexus/10.webp' alt='nexus' />
          </AspectRatio>
          </Box>
      </Box>

      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '4rem'}>
        <AspectRatio 
          ratio={isSmallerThan900 ? 1.5 : 1.8} 
          w='100%'
          height={isSmallerThan500 ? '100%' : 'auto'}
          mr={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'}
        >
          <Img loading="lazy" src='/yachts/nexus/7.webp' alt='nexus' />
        </AspectRatio>
        <Box
          pt={isSmallerThan500 ? '1rem' : 0}
          display="inline-grid"
          justify-items="center"
          margin="auto"
          align-items="center">
          <TextBlock 
            mb={isSmallerThan900 ? '0.5rem' : '1.5rem'}
            title='Exterior' 
            textStylesTitle='yachtBlockTitle'
            text="With a streamlined hull design, this remarkable NEXUS glides smoothly across the open sea. The Nexus is a revolutionary sustainable yacht designed to combine luxury with eco-friendly features. This 100-foot yacht is built with a strong focus on sustainability, utilizing innovative technologies and materials to minimize environmental impact. The project aims to provide an exceptional cruising experience while preserving the beauty of our oceans and promoting responsible yachting." 
          />
          <TextBlock
            text="Its twin hulls offer unprecedented stability, while onboard, passengers experience pure opulence.
            Whether exploring secluded bays or cruising the open ocean, the Nexus ensures a journey filled with tranquility, efficiency, and respect for our planet."
          />
        </Box>
      </Box>

      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan900 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '7rem'}>
        <Box mb={isSmallerThan500 ? '1rem' : 0}
          display="inline-grid"
          justify-items="center"
          margin="auto"
          align-items="center">
          <TextBlock 
              mb={isSmallerThan900 ? '1.5rem' : '1.5rem'}
              text="The Nexus is not just a 100-foot hybrid catamaran; it's a yacht of innovation, luxury, and commitment to the environment."
              />
          <TextBlock 
            mb={isSmallerThan900 ? '1.5rem' : '1rem'}
            title='TECHNOLOGIES' 
            textStylesTitle='yachtBlockTitle'
            text="But what sets this catamaran apart is its innovative propulsion system. Combining the power of efficient solar panels, electric motors  and methanol fuel cells which can operate continuously or be activated as needed, especially during long periods without sunlight or during high power demands, it offers the ideal blend of performance and sustainability."
            />
          <TextBlock 
            mb={isSmallerThan900 ? '1.5rem' : '1rem'}
            text=" Sail the world with a reduced carbon footprint, preserving the oceans' pristine beauty for generations to come."
            />
        </Box>
        <Box display="grid">
          <AspectRatio ratio={isSmallerThan900 ? 1.5 : 1.8} maxW='100%'>
            <Img loading="lazy" src='/yachts/nexus/13.webp' alt='nexus' />
          </AspectRatio>
        </Box>
      </Box>

      <Box display='flex' flexDirection='column' px={isSmallerThan900 ? '2rem' : isSmallerThan1200 ? '3rem' : '5rem'} mb={isSmallerThan900 ? '2rem' : '7rem'}>
        <Box width='25%' height='0.05rem' alignSelf='center' bg='text' mb='1.5rem' />
        <TextBlock
          textStyles='semiBoldText' 
          propsText={{
            sx: {
              textAlign: 'center',
              mb: '1.5rem',
            }
          }}
          text="Set sail on a journey where technology meets serenity, and where tomorrow's dreams sail today" />
        <Box width='25%' height='0.05rem' alignSelf='center' bg='text'  />
      </Box>
      
      <Text textStyle='yachtDetailUppercaseTitleText' align='left' mb={isSmallerThan900 ? '0.5rem' : '1rem'}>Video Review</Text>
      <AspectRatio ratio={16 / 9} maxW='100%' mb={isSmallerThan500 ? '0.8rem' : '1.5rem'}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KsH9-2fjst4?si=b_NderZSFihXcR7S" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </AspectRatio>
      <Text textStyle='yachtsBlueTitle' as='h4' align='right' mb={isSmallerThan900 ? '2rem' : '5rem'}>Crystal 160 The Ark</Text>

      <Text textStyle='yachtDetailUppercaseTitleS48Text' align={ isSmallerThan500 ? 'center':'left'}  mb={isSmallerThan500 ? '0.8rem' : '1.5rem'}>MAIN SPECIFICATION</Text>
      <Box display='grid' gridTemplateColumns={isSmallerThan500 ? '1fr' : '1fr 1fr'} columnGap={isSmallerThan500 ? 0 : isSmallerThan1200 ? '2rem' : '4rem'} mb={isSmallerThan900 ? '2rem' : '4rem'}>
        <Box 
          mb={isSmallerThan500 ? '0.8rem' : '0'}
          textStyle="yachtDetailRegularText"
          >
            <List spacing={3}>
              <ListItem>
                Type: Catamaran
              </ListItem>
              <ListItem>
                Length: 30.5 m / 100ft
              </ListItem>
              <ListItem>
                Beam: 13.7 m / 45ft
              </ListItem>
              <ListItem>
                Number of cabins: up to 6 cabins
              </ListItem>
            </List>
        </Box>
        

        <Box 
          textAlign={isSmallerThan500 ? 'left' : 'right'}
          textStyle="yachtDetailSemiboldText"
          >
            <List spacing={3}>
              <ListItem>
                Hull material: Aluminum
              </ListItem>
              <ListItem>
                Hybrid propulsion
              </ListItem>
              <ListItem>
                Transatlantic
              </ListItem>
              <ListItem>
                Oceanwings
              </ListItem>
            </List>
        </Box> 
      </Box>
      
      <AspectRatio ratio={16 / 9} maxW='100%' mb={isSmallerThan900 ? '2rem' : '5rem'}>
        <Swiper navigation={true} modules={[Navigation, Pagination]} className="mySwiper">
            {
                images.map((image,i) => {
                return (<SwiperSlide key={i}>
                    <Img loading="lazy" src={image.src} alt='nexus' />
                    </SwiperSlide>)
                })
            }
        </Swiper>
      </AspectRatio>
    </Box>
  )
})