import React, { useState } from 'react';
import { Box, Text, Button, Image, Flex, Tooltip } from '@chakra-ui/react';

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
        <Tooltip
          label={
            <Box p={2} minW="220px">
              <Text fontWeight="bold" mb={1}>{product.ecoBadgeLevel} Badge</Text>
              <Text fontSize="sm" mb={1}>{product.ecoCertificationStatement}</Text>
              <Text fontSize="sm" mb={1}>Plastic Reduced: <b>{product.plasticReduced}%</b></Text>
              <Text fontSize="sm" mb={1}>Chemical Used: <b>{product.chemicalUsed}%</b></Text>
              <Text fontSize="sm" mb={1}>Recyclable: <b>{product.recyclable ? 'Yes' : 'No'}</b></Text>
              <Text fontSize="sm" mb={1}>Certificates:</Text>
              <Box pl={2}>
                {product.certificates?.map((cert, idx) => (
                  <Text key={idx} fontSize="xs">• {cert}</Text>
                ))}
              </Box>
            </Box>
          }
          isOpen={showEcoDetails}
          onClose={() => setShowEcoDetails(false)}
          onOpen={() => setShowEcoDetails(true)}
          placement="top"
          hasArrow
          bg="#e6ffe6"
          color="#222"
          boxShadow="lg"
        >
          <Box position="relative" onMouseEnter={() => setShowEcoDetails(true)} onMouseLeave={() => setShowEcoDetails(false)}>
            <Image
              src={product.badgeImg}
              alt="Eco Badge"
              boxSize="24px"
              style={{ cursor: 'pointer' }}
            />
          </Box>
        </Tooltip>
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
