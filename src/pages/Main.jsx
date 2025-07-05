import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SkeletonCircle,
  SkeletonText,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import EcoProductCard from "../components/EcoProductCard";
import RecyclePurchaseCard from "../components/RecyclePurchaseCard";
import Heading1 from "./Heading1";

export const Main = () => {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [userPurchases, setUserPurchases] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // Fetch all products and user purchases here (replace with real API calls)
    // Example static data for demo:
    setProducts([
      {
        id: 1,
        name: "Beco Bamboo Kitchen Towels, 20 sheets",
        image: "/images/tissue_eco.jpg",
        price: 6.35,
        rating: 5,
        numReviews: 120,
        shortDescription:
          "Reusable upto 2000 times, 100% Natural and Ecofriendly Alternative to Tissue Papers",
        ecoFriendly: true,
        carbonEmission: 65,
        ecoBadgeLevel: "4-Leaf",
        ecoCertificationStatement: "Certified eco-friendly and sustainable.",
        plasticReduced: 73,
        chemicalUsed: 21,
        recyclable: true,
        certificates: ["Fairtrade", "Organic", "Vegan Seal"],
        isBestseller: true,
        returnForRecycle: true,
        purchasedByUser: true,
        co2BadgeImg: "/images/co2badge.png",
        badgeImg: "/images/badge5.png",
      },
      {
        id: 2,
        name: "Jutify Eco-Friendly Printed Unisex Canvas Shopping Bag, Women's Tote Bag | Spacious, Stylish, Sturdy Handbag",
        image: "/images/bag_eco.jpg",
        price: 15.35,
        rating: 4,
        numReviews: 98,
        shortDescription: "Women's Tote Bag | Spacious, Stylish, Sturdy Handbag",
        ecoFriendly: true,
        carbonEmission: 60,
        ecoBadgeLevel: "4-Leaf",
        ecoCertificationStatement: "Eco-friendly canvas, reusable and sustainable.",
        plasticReduced: 68,
        chemicalUsed: 18,
        recyclable: true,
        certificates: ["Organic", "Vegan Seal"],
        isBestseller: true,
        returnForRecycle: false,
        purchasedByUser: false,
        co2BadgeImg: "/images/co2badge.png",
        badgeImg: "/images/badge4.png",
      },
      {
        id: 3,
        name: "Qudrat Natural Straw | Coconut Leaf | Biodegradable, Eco-Friendly & Sustainable Drinking Straws (Pack of 100)",
        image: "/images/straw_eco.jpg",
        price: 8.99,
        rating: 4,
        numReviews: 67,
        shortDescription: "Biodegradable, Eco-Friendly & Sustainable Drinking Straws",
        ecoFriendly: true,
        carbonEmission: 75,
        ecoBadgeLevel: "5-Leaf",
        ecoCertificationStatement: "100% biodegradable and compostable.",
        plasticReduced: 90,
        chemicalUsed: 10,
        recyclable: true,
        certificates: ["Compostable", "EcoCert"],
        isBestseller: true,
        returnForRecycle: true,
        purchasedByUser: false,
        co2BadgeImg: "/images/co2badge.png",
        badgeImg: "/images/badge5.png",
      },
      {
        id: 4,
        name: "Sow and Grow Plantable Pencils (Pack Of 10 Single Pencils) Made With 100% Recycled Paper|Eco Friendly|Return Gift|Corporate Gifting|Green",
        image: "/images/pencils_eco.jpg",
        price: 14.0,
        rating: 4,
        numReviews: 54,
        shortDescription: "Made with 100% recycled paper, plantable pencils.",
        ecoFriendly: true,
        carbonEmission: 80,
        ecoBadgeLevel: "3-Leaf",
        ecoCertificationStatement: "Plantable and made from recycled materials.",
        plasticReduced: 95,
        chemicalUsed: 5,
        recyclable: true,
        certificates: ["Recycled", "EcoCert"],
        isBestseller: true,
        returnForRecycle: false,
        purchasedByUser: false,
        co2BadgeImg: "/images/co2badge.png",
        badgeImg: "/images/badge3.png",
      },
      {
        id: 5,
        name: "Wooden Eyewear Holder | Made With Sheesham Wood | Eyewear Showcase | 6-Inch Height | Decoration | Gift Material",
        image: "/images/sunglasses_eco.jpg",
        price: 37.99,
        rating: 3,
        numReviews: 32,
        shortDescription: "Handcrafted from Sheesham wood, eco-friendly gift.",
        ecoFriendly: true,
        carbonEmission: 50,
        ecoBadgeLevel: "2-Leaf",
        ecoCertificationStatement: "Handmade, sustainable wood.",
        plasticReduced: 60,
        chemicalUsed: 15,
        recyclable: true,
        certificates: ["Handmade", "Sustainable Wood"],
        isBestseller: true,
        returnForRecycle: false,
        purchasedByUser: false,
        co2BadgeImg: "/images/co2badge.png",
        badgeImg: "/images/badge2.png",
      },
      {
        id: 6,
        name: "Terracotta Clay Water Bottle | Capacity of 1 Litres | Purely Biodegradable | Plastic Alternative",
        image: "/images/bottle_eco.jpg",
        price: 25.78,
        rating: 5,
        numReviews: 41,
        shortDescription: "Biodegradable, natural clay water bottle.",
        ecoFriendly: true,
        carbonEmission: 65,
        ecoBadgeLevel: "4-Leaf",
        ecoCertificationStatement: "Plastic alternative, biodegradable.",
        plasticReduced: 85,
        chemicalUsed: 12,
        recyclable: true,
        certificates: ["Biodegradable", "EcoCert"],
        isBestseller: true,
        returnForRecycle: true,
        purchasedByUser: false,
        co2BadgeImg: "/images/co2badge.png",
        badgeImg: "/images/badge4.png",
      },
      {
        id: 7,
        name: "Bamboo Hot Dish Mats / Table Coasters | 30cm x 30cm | Bamboo Product | Strong and Durable",
        image: "/images/mats_eco.jpg",
        price: 21.0,
        rating: 4,
        numReviews: 29,
        shortDescription: "Strong and durable bamboo mats/coasters.",
        ecoFriendly: true,
        carbonEmission: 70,
        ecoBadgeLevel: "3-Leaf",
        ecoCertificationStatement: "Bamboo, strong and reusable.",
        plasticReduced: 80,
        chemicalUsed: 10,
        recyclable: true,
        certificates: ["Bamboo", "Reusable"],
        isBestseller: true,
        returnForRecycle: false,
        purchasedByUser: false,
        co2BadgeImg: "/images/co2badge.png",
        badgeImg: "/images/badge3.png",
      },
      {
        id: 8,
        name: "Hand Made Jute Hanging Chair | Durable Jute Product | Stylish | Comfortable | Elegant Design",
        image: "/images/hangingchair_eco.png",
        price: 599.99,
        rating: 4,
        numReviews: 12,
        shortDescription: "Handmade, durable, stylish jute hanging chair.",
        ecoFriendly: true,
        carbonEmission: 50,
        ecoBadgeLevel: "1-Leaf",
        ecoCertificationStatement: "Handmade from natural jute.",
        plasticReduced: 70,
        chemicalUsed: 20,
        recyclable: true,
        certificates: ["Handmade", "Natural Jute"],
        isBestseller: true,
        returnForRecycle: false,
        purchasedByUser: false,
        co2BadgeImg: "/images/co2badge.png",
        badgeImg: "/images/badge1.png",
      },
      {
        id: 9,
        name: "HomeStorie Eco-Friendly Foldable Bamboo Laundry Basket Hamper with Lid, Large - 57 Liter (Light Brown)",
        image: "/images/bamboolaundry.jpg",
        price: 20.99,
        rating: 4,
        numReviews: 22,
        shortDescription: "Foldable, eco-friendly bamboo laundry basket.",
        ecoFriendly: true,
        carbonEmission: 85,
        ecoBadgeLevel: "5-Leaf",
        ecoCertificationStatement: "Eco-friendly, foldable, bamboo.",
        plasticReduced: 90,
        chemicalUsed: 8,
        recyclable: true,
        certificates: ["Bamboo", "EcoCert"],
        isBestseller: true,
        returnForRecycle: true,
        purchasedByUser: false,
        co2BadgeImg: "/images/co2badge.png",
        badgeImg: "/images/badge5.png",
      },
    ]);
    setUserPurchases([
      {
        id: 2,
        name: "Eco Bottle",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        shortDescription: "Reusable, BPA-free, 100% recyclable",
        returnForRecycle: true,
        purchasedByUser: true,
      },
      // ...add more purchases as needed
    ]);
  }, []);

  // Check if Greenovation Zone is active (by route)
  const isGreenovation = location.pathname === "/green";

  if (isLoading) {
    return (
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    );
  }

  if (isGreenovation) {
    // Eco-Friendly Products
    const ecoProducts = products.filter((p) => p.ecoFriendly);
    // Recyclable Purchases
    const recycleProducts = userPurchases.filter(
      (p) => p.returnForRecycle && p.purchasedByUser
    );
    return (
      <Box w="100%" p={5}>
        <Heading size="lg" mb={4}>
          Eco-Friendly Products
        </Heading>
        <Flex wrap="wrap" gap={6} mb={10} alignItems="stretch">
          {ecoProducts.map((product) => (
            <Box key={product.id} flex="1 1 260px" minW="260px" maxW="320px" display="flex">
              <EcoProductCard
                product={product}
                onAddToCart={() => {}}
              />
            </Box>
          ))}
        </Flex>
        <Heading size="md" mb={3}>
          Recycle Your Previous Purchase
        </Heading>
        <Flex wrap="wrap" gap={4}>
          {recycleProducts.map((product) => (
            <RecyclePurchaseCard
              key={product.id}
              product={product}
              onRecycle={() => {}}
            />
          ))}
        </Flex>
      </Box>
    );
  }

  return (
    <Flex w="100%" justifyContent={"space-evenly"} mt={5}>
      <Box w="20%">
        <Box height="250px" bg="#E6CFA7" borderRadius={8}>
          <Box ml={10} display={"flex"} flexDirection={"column"}>
            <Text fontSize={20} className="roboto-bold" mt={5}>
              Floor care for so much less
            </Text>
            <Link textAlign="center">
              <u>Shop now</u>
            </Link>
          </Box>
          <Flex justifyContent={"flex-end"}>
            <Image
              src="https://github.com/B2Kumar03/homepageImage/blob/main/shark-removebg-preview.png?raw=true"
              alt="logo"
              w={230}
            />
          </Flex>
        </Box>
        <Box bg="#D9E4F5" mt={8}>
          <Box ml={5} display={"flex"} flexDirection={"column"}>
            <Text fontSize={20} className="roboto-bold" mt={5}>
              Top styles-low,low <br />
              Prices
            </Text>
          </Box>
          <Flex>
            <Box>
              <Box ml={5}>
                <Link textAlign="center">
                  <u>Shop now</u>
                </Link>
              </Box>

              <Box mt={100} ml={5}>
                <Heading>
                  <sup>$</sup>22<sup>43</sup>
                </Heading>
              </Box>
            </Box>
            <Box overflow={"hidden"} ml={5}>
              <Image
                src="https://github.com/B2Kumar03/homepageImage/blob/main/woman-removebg-preview.png?raw=true"
                alt="woman"
                w="100%"
              />
            </Box>
          </Flex>
        </Box>
        <Box bg="#95BBF9" mt={8} borderRadius={8}>
          <Flex justifyContent={"space-around"}>
            <Box>
              <Text fontSize={20} className="roboto-bold" mt={8} ml={5}>
                Let's play under $25
              </Text>
              <Box mt={8} ml={5}>
                <Link>
                  <u>Shop toys</u>
                </Link>
              </Box>
            </Box>
            <Image
              src="https://github.com/B2Kumar03/homepageImage/blob/main/toys-removebg-preview.png?raw=true"
              alt="toys"
              w="60%"
            />
          </Flex>
        </Box>
      </Box>
      <Box w="50%">
        <Box height="370px" bg="#B3CEFE" borderRadius={8}>
          <Flex justifyContent={"space-evenly"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Box mt={8}>
                <Heading color="black" size="4xl" mb={5}>
                  Springs
                </Heading>
                <Heading color="black" size="2xl" mt="-5">
                  Savings
                </Heading>
              </Box>
              <Box mt={10}>
                <Button border={"1px solid black"} borderRadius={20}>
                  Shop all
                </Button>
              </Box>
              <Box>
                <Text
                  textOverflow={"ellipsis"}
                  overflow={"hidden"}
                  whiteSpace={"nowrap"}
                  className="text-truncate"
                >
                  <Image
                    src="https://github.com/B2Kumar03/homepageImage/blob/main/price-removebg-preview.png?raw=true"
                    ml={-10}
                  />
                </Text>
              </Box>
            </Box>
            <Box>
              <Box>
                <Image
                  src="https://github.com/B2Kumar03/homepageImage/blob/main/samsungTv-removebg-preview.png?raw=true"
                  alt="tv"
                  w={450}
                />
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box mt={8} borderRadius={8}>
          <Flex justifyContent={"space-between"}>
            <Box
              w="47%"
              height={"250px"}
              bg="#D0CCC0"
              h="100%"
              bgImage={
                "https://i5.walmartimages.com/seo/Better-Homes-Gardens-Oaklee-2-Drawer-Nightstand-for-bedroom-Charcoal-Finish_4daaa94e-a1d5-45ec-8893-092a1289c2dd.3e44901795490ec5efab0fc6859d5192.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
              }
              backgroundSize="cover"
              borderRadius={8}
            >
              <Box height={"280px"} ml={5} borderRadius={8}>
                <Box>
                  <Heading>
                    Budget friendly <br /> furniture
                  </Heading>
                </Box>
                <Box>
                  <Link>
                    <u>Shop now</u>
                  </Link>
                </Box>
                <Box mt={15}>
                  <Text>From</Text>
                  <Heading>
                    <sup>$</sup>78
                  </Heading>
                </Box>
              </Box>
            </Box>
            <Box w="47%" bg="#FDE77F" h="100%" borderRadius={8}>
              <Box ml={5} display={"flex"} flexDirection={"column"}>
                <Text fontSize={20} className="roboto-bold" mt={10}>
                  Up to 40% off
                  <br />
                </Text>
              </Box>
              <Flex>
                <Box>
                  <Box ml={5}>
                    <Link textAlign="center">
                      <u>Shopow</u>
                    </Link>
                  </Box>

                  <Box mt={100} ml={5}>
                    <Heading>
                      Flase <br />
                      Deals
                    </Heading>
                  </Box>
                </Box>
                <Box overflow={"hidden"} ml={5}>
                  <Image
                    src="https://github.com/B2Kumar03/homepageImage/blob/main/lamp-removebg-preview.png?raw=true"
                    alt="woman"
                    w="100%"
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box bg="#FFC21F" mt={8} borderRadius={8}>
          <Flex>
            <Box w={"70%"} p={10}>
              <Text fontSize={20}>
                Enjoy Free Same-day delivery low prices !{" "}
              </Text>
              <Text>Apply tearm</Text>
              <Box mt={8}>
                {" "}
                <Link>
                  <u>Join walmart+</u>
                </Link>
              </Box>
            </Box>
            <Box w={"30%"} bg="white" color="#0170DA" borderLeftRadius={50}>
              <Image
                src="https://github.com/B2Kumar03/homepageImage/blob/main/walmartlogo.png?raw=true"
                alt="walmart logo"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box w="20%">
        <Box height="250px" bg="#E7EDF6" borderRadius={8}>
          <Box>
            <Text fontSize={25} className="roboto-bold" p={5}>
              Save on personal care
            </Text>
          </Box>
          <Flex p={5}>
            <Box className="roboto-regular">
              <Link>
                <u>Shop now</u>
              </Link>
            </Box>
            <Box>
              <Image src="https://github.com/B2Kumar03/homepageImage/blob/main/savingss-removebg-preview.png?raw=true" />
            </Box>
          </Flex>
        </Box>
        <Box height="250px" bg="#FEEABF" mt={5}>
          <Box>
            <Text fontSize={18} className="roboto-bold" p={5}>
              Apple savings up to $150 off
            </Text>
          </Box>
          <Flex p={5}>
            <Box className="roboto-regular">
              <Link>
                <u>Shop now</u>
              </Link>
            </Box>
            <Box ml={10}>
              <Image
                src="https://github.com/B2Kumar03/homepageImage/blob/main/smartphone2-removebg-preview.png?raw=true"
                w="70%"
              />
            </Box>
          </Flex>
        </Box>
        <Box height="350px" bg="#A5CBEE" mt={8} borderRadius={8}>
          <Image
            src="https://github.com/B2Kumar03/homepageImage/blob/main/wholeContent.png?raw=true"
            alt="image"
            h={"100%"}
            borderRadius={8}
            cursor={"pointer"}
          />
        </Box>
      </Box>
    </Flex>
  );
};
