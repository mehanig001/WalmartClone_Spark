import React, { useState } from 'react';
import { Box, Text, Button, Image, Flex, Tooltip, HStack, VStack, useBreakpointValue } from '@chakra-ui/react';

const EcoBadgePopover = ({ product, isOpen, onOpen, onClose }) => {
  // Responsive popover width
  const popoverWidth = useBreakpointValue({ base: '90vw', md: '320px' });
  // Eco stars (1-5)
  const ecoStars = Array(parseInt(product.ecoBadgeLevel))
    .fill('')
    .map((_, i) => (
      <Text key={i} as="span" color="#43A047" fontSize="xl" aria-label="eco star">★</Text>
    ));
  // Certification icons (use fallback if not found)
  const certIconMap = {
    Fairtrade: '/images/fairtrade.png',
    Organic: '/images/organic.png',
    'Vegan Seal': '/images/vegan.png',
    FSC: '/images/fsc.png',
    Recycled: '/images/recycled.png',
    EcoCert: '/images/ecocert.png',
    Bamboo: '/images/bamboo.png',
    Handmade: '/images/handmade.png',
    'Sustainable Wood': '/images/wood.png',
    'Natural Jute': '/images/jute.png',
    Compostable: '/images/compostable.png',
    Biodegradable: '/images/biodegradable.png',
    Reusable: '/images/reusable.png',
  };
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="2xl"
      p={4}
      minW={popoverWidth}
      maxW="350px"
      zIndex={100}
      tabIndex={0}
      role="dialog"
      aria-label="Eco Badge Details"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      outline="none"
    >
      {/* Badge Level Display */}
      <Flex direction="column" alignItems="center" mb={2}>
        <Box
          borderRadius="full"
          bgGradient="linear(to-br, #A8E063, #56AB2F)"
          boxSize="60px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="md"
          mb={1}
        >
          <Text fontWeight="bold" fontSize="2xl" color="white">
            {product.ecoBadgeLevel.replace(/[^0-9]/g, '')}
          </Text>
        </Box>
        <HStack spacing={1}>{ecoStars}</HStack>
        <Text fontSize="sm" color="#388e3c" fontWeight="bold" mt={1}>
          {product.ecoBadgeLevel.replace(/[^0-9]/g, '')} STARS SUSTAINABLE
        </Text>
      </Flex>
      {/* Certification Statement */}
      <Text fontSize="sm" color="#222" textAlign="center" mb={2}>
        {product.ecoCertificationStatement || 'Certified Eco-Friendly Product'}
      </Text>
      {/* Eco Parameters Table */}
      <Box bg="#F1F8E9" borderRadius="md" p={2} mb={2}>
        <VStack align="stretch" spacing={1}>
          <Flex justifyContent="space-between">
            <Text fontSize="sm">Plastic Reduced:</Text>
            <Text fontWeight="bold" fontSize="sm">{product.plasticReduced}%</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontSize="sm">Chemicals Used:</Text>
            <Text fontWeight="bold" fontSize="sm">{product.chemicalUsed}%</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontSize="sm">Recyclable:</Text>
            <Text fontWeight="bold" fontSize="sm">{product.recyclable ? 'Yes' : 'No'}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontSize="sm">Carbon Emission:</Text>
            <Text fontWeight="bold" fontSize="sm">{product.carbonEmission}% less</Text>
          </Flex>
        </VStack>
      </Box>
      {/* Official Certifications */}
      <HStack spacing={2} justifyContent="center" flexWrap="wrap">
        {product.certificates?.map((cert, idx) => (
          <Tooltip key={idx} label={cert} aria-label={cert} hasArrow>
            <Image
              src={certIconMap[cert] || '/images/cert_default.png'}
              alt={cert}
              boxSize="28px"
              borderRadius="md"
              bg="#E8F5E9"
              border="1px solid #C8E6C9"
            />
          </Tooltip>
        ))}
      </HStack>
    </Box>
  );
};

const EcoProductCard = ({ product, onAddToCart }) => {
  const [showEcoDetails, setShowEcoDetails] = useState(false);
  return (
    <Box className="productg" borderRadius="md" boxShadow="sm" bg="#fafbfc" p={4} m={2} minW="260px" maxW="300px" border="1px solid #e0e0e0" display="flex" flexDirection="column" justifyContent="space-between" height="430px">
      {/* Bestseller label */}
      {product.isBestseller && (
        <Text textAlign="center" fontWeight="bold" color="#222" fontSize="sm" mb={1} letterSpacing={0.5}>
          BESTSELLER
        </Text>
      )}
      {/* Product name with fixed height and ellipsis */}
      <Box height="40px" display="flex" alignItems="center" justifyContent="center" mb={1}>
        <Text fontWeight="bold" fontSize="md" textAlign="center" noOfLines={2} overflow="hidden" textOverflow="ellipsis" whiteSpace="normal" maxW="95%">
          {product.name}
        </Text>
      </Box>
      {/* Price and rating */}
      <Flex justifyContent="center" alignItems="center" mb={1}>
        <Text fontWeight="bold" fontSize="lg" color="#222" mr={2}>
          ${product.price}
        </Text>
        <Flex>
          {Array(product.rating).fill('').map((_, i) => (
            <Text key={i} fontSize="lg" color="#FFC21F">★</Text>
          ))}
        </Flex>
      </Flex>
      {/* Product image */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <Image src={product.image} alt={product.name} boxSize="140px" objectFit="contain" borderRadius="md" />
      </Box>
      {/* Carbon emission and eco badge row */}
      <Flex alignItems="center" justifyContent="flex-start" mb={1}>
        <Image src={product.co2BadgeImg} alt="CO2 Badge" boxSize="24px" mr={2} />
        <Text fontSize="sm" color="#795548">{product.carbonEmission}% Less Carbon Emission</Text>
      </Flex>
      <Flex alignItems="center" justifyContent="flex-start" mb={2}>
        <Box position="relative" onMouseEnter={() => setShowEcoDetails(true)} onMouseLeave={() => setShowEcoDetails(false)}>
          <Image
            src={product.badgeImg}
            alt="Eco Badge"
            boxSize="24px"
            style={{ cursor: 'pointer' }}
            aria-label="Eco Badge"
          />
          {showEcoDetails && (
            <Box position="absolute" top="110%" left="0" zIndex={1000} onMouseEnter={() => setShowEcoDetails(true)} onMouseLeave={() => setShowEcoDetails(false)}>
              <EcoBadgePopover product={product} isOpen={showEcoDetails} onOpen={() => setShowEcoDetails(true)} onClose={() => setShowEcoDetails(false)} />
            </Box>
          )}
        </Box>
        <Text fontSize="sm" color="#388e3c" ml={2}>Eco-Friendly Badge</Text>
      </Flex>
      {/* Add to Cart button at the bottom, fixed color */}
      <Box mt="auto">
        <Button w="100%" bg="#F3B53B" color="black" _hover={{ bg: '#FFD740' }} fontWeight="bold" onClick={() => onAddToCart(product)}>
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default EcoProductCard;
