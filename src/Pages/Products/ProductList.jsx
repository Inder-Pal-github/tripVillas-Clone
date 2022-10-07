/*  
Author: Inder Pal
EmailId: inder39811@gmail.com
Date: 24 Aug 2022
WorkItem: Created page for listing all products
          containing info like cities, types, FAQS etc
*/

import React, { useState } from "react";
import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  SimpleGrid,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import Navbar from "../../Components/Navbar";
import statesData from "../../utils/states.json";
import types from "../../utils/types.json";
import { Link, useLocation, useParams } from "react-router-dom";
import CarousalComponent from "../../Components/Carousal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCities } from "../../Redux/AppReducer/action";
import Searchbar_HomePage from "../../Components/Searchbar_HomePage";
const ProductList = () => {
  const dispatch = useDispatch();
  const country_id = "101";
  const cities = statesData.filter((state) => state.country_id === country_id);
  const allProducts = useSelector((store) => store.appReducer.allProducts);
  useEffect(() => {
    dispatch(getCities());
  }, []);
  return (
    <Box>
      {/* navbar  */}
      <Box>
        <Navbar />
      </Box>
      {/* search  */}
      <Box textAlign="center" border="1px solid" mt="5px">
        <Searchbar_HomePage />
      </Box>
      <Box margin="3rem" padding="1rem" boxShadow="md">
        {/* tabs  */}
        <Box>
          <Tabs>
            <TabList>
              <Tab>CITIES</Tab>
              <Tab>TYPES</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <SimpleGrid
                  minChildWidth="100px"
                  fontSize="12px"
                  fontWeight="light"
                  textAlign="center"
                  spacing=".5rem"
                  width="80%"
                >
                  {cities?.map((city) => (
                    <div key={city.state_id}>
                      <Link
                        style={{
                          boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.1)",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        to={{
                          pathname: `/products/${city.state_name}`,
                          state: city.state_name,
                        }}
                      >
                        {city.state_name}
                      </Link>
                    </div>
                  ))}
                </SimpleGrid>
              </TabPanel>
              <TabPanel>
                <SimpleGrid
                  minChildWidth="100px"
                  fontSize="12px"
                  fontWeight="light"
                  textAlign="center"
                  spacing=".5rem"
                  width="70%"
                >
                  {types?.map((type) => (
                    <Link
                      style={{
                        boxShadow: "0px 0px 1px 0px rgba(0,0,0,0.1)",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      to={{
                        pathname: `/products/${type.type}`,
                        state: type.type,
                      }}
                      key={type.id}
                    >
                      {type.type}
                    </Link>
                  ))}
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        {/* Breadcrumb  */}
        <Box>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>Country</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>City</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        <Heading as="h3">City Holiday Homes</Heading>
        {/* carousel */}
        <Box mt="1rem">
          <CarousalComponent allProducts={allProducts} />
        </Box>
        {/* faq  */}
        <Box>
          <Heading as="h2" size="1xl" m="1rem auto">
            FAQs
          </Heading>
          <Box color="gray" fontSize="14px">
            <Text m="1rem auto">
              <b>
                {" "}
                Can I get a holiday with swimminig pool in Central Province?
              </b>
            </Text>
            <Text>
              Yes. We have close to 15 holiday homes with swimming pool in
              Central Province. You can also choose a villa or bungalow with a
              swimming pool. Each vacation rental will have its own swimming
              pool policies & timings though. Make sure you talk to the property
              manager or the owner when you make a reservation.
            </Text>
          </Box>
          <Box color="gray" fontSize="14px">
            <Text m="1rem auto">
              <b>
                {" "}
                What are the most popular destinations in Central Province?{" "}
              </b>
            </Text>
            <Text>
              Tripvillas has around 138 of vacation rentals in Central Province.
              Some of the most popular destinations are Kandy (88 vacation
              rentals), Nuwara Eliya (54 vacation rentals), Dambulla (9 vacation
              rentals).
            </Text>
          </Box>
          <Box color="gray" fontSize="14px">
            <Text m="1rem auto">
              <b>
                {" "}
                Can I get any accommodation in Central Province if I am
                travelling with my family or a group of friends?{" "}
              </b>
            </Text>
            <Text>
              You will have to choose number of bedrooms depending on the group
              size. You can go for any of the 18 Bungalows, 13 Villas. You can
              go for 5 2BHKS, 9 3BHKS, 7 4BHKS holiday homes
            </Text>
          </Box>
          <Box color="gray" fontSize="14px">
            <Text m="1rem auto">
              <b>
                {" "}
                What are the different types of holiday homes I can get in
                Central Province?
              </b>
            </Text>
            <Text>
              Tripvillas has different types of holiday homes you can choose
              from in Central Province. We have 18 Bungalows, 6 Guesthouses, 8
              Homestays, 82 Rooms, 13 Villas
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductList;
