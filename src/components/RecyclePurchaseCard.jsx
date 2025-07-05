import React from 'react';
import { Box, Image, Text, Badge, Button, Flex } from '@chakra-ui/react';

const RecyclePurchaseCard = ({ product, onRecycle }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={3} boxShadow="sm" bg="gray.50" _hover={{ boxShadow: 'md' }}>
    <Image src={product.image} alt={product.name} boxSize="100px" objectFit="cover" mx="auto" mb={2} />
    <Text fontWeight="bold" fontSize="md" mb={1}>{product.name}</Text>
    <Text color="gray.600" fontSize="xs" mb={1}>{product.shortDescription}</Text>
    <Badge colorScheme="purple" mb={1}>Eligible for Recycling</Badge>
    <Button mt={2} size="sm" colorScheme="green" w="100%" onClick={() => onRecycle(product)}>
      Recycle
    </Button>
  </Box>
);

export default RecyclePurchaseCard;
