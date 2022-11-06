/*  
Author: Deepak Rajput
EmailId: deepak.onlinework13@gmail.com
Date: 23 Aug 2022
WorkItem: Created common Navbar for all pages
*/
import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Image,
  Menu,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import {
  DrawerBody,
  DrawerCloseButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { RiContactsFill } from "react-icons/ri";

import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../Redux/AuthReducer/actionType";

const Navbar = () => {
  const auth = useSelector((store) => store.authReducer);
  const firstName = useSelector((store) => store.authReducer.firstName);
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(onClose)
  const [placement, setPlacement] = React.useState("right");
  const initRef = React.useRef();

  const [currency, setCurrency] = useState("INR");
  const [isActive, setIsActive] = useState(true);
  const [isActiveBtn, setIsActiveBtn] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleCurrency = (e) => {
    setCurrency(e.target.innerText);
    setIsActive(false);
  };

  const handleActiveBtn = () => {
    setIsActive(true);
  };

  const handleSignUp = () => {};

  const hover = {
    textDecoration: "underline",
    cursor: "pointer",
  };

  const handleLogout = () => {
    dispatch({ type: types.GET_LOGOUT_SUCCESS, payload: false });
    navigate("/");
    window.location.reload();
  };
  return (
    <Box
      w="100%"
      h="60px"
      border="1px solid black"
      backgroundColor="black"
      margin="auto"
    >
      <Flex justifyContent="space-between">
        <Box h="60px" ml="1rem">
          <Link to="/">
            <Image
              w="100%"
              h="26px"
              src="https://d2v8elt324ukrb.cloudfront.net/static/riotuikit/images/logo.c72056a22f91.png"
              alt="tripVillas_Logo"
              display="block"
              margin="auto"
              mt="1rem"
            />
          </Link>
        </Box>
        <Box h="60px" mr="1rem">
          <Flex justifyContent="center" alignItems="center" h="60px">
            <Text color="white">{firstName ? firstName : ""}</Text>
            <Popover placement="bottom">
              <PopoverTrigger>
                <Button _hover={{ background: "none" }} bg="none" p="4px">
                  <Box onClick={handleSignUp} _hover={{ cursor: "pointer" }}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      data-svg="user"
                    >
                      <circle
                        fill="none"
                        stroke="#fff"
                        stroke-width="1.1"
                        cx="9.9"
                        cy="6.4"
                        r="4.4"
                      ></circle>
                      <path
                        fill="none"
                        stroke="#fff"
                        stroke-width="1.1"
                        d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"
                      ></path>
                    </svg>
                  </Box>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                borderRadius="none"
                w="200px"
                mr="8rem"
                p="1rem"
                pl="1rem"
              >
                {isAuth ? (
                  <PopoverBody w="100px">
                    <Text
                      onClick={handleLogout}
                      fontSize="14px"
                      color="gray"
                      _hover={{ cursor: "pointer", color: "black" }}
                    >
                      <Link to="/">LOGOUT</Link>
                    </Text>
                  </PopoverBody>
                ) : (
                  <PopoverBody w="100px">
                    <Text
                      fontSize="14px"
                      color="gray"
                      _hover={{ cursor: "pointer", color: "black" }}
                      mb="1rem"
                    >
                      <Link to="/login">SIGN IN</Link>
                    </Text>
                    <Text
                      fontSize="14px"
                      color="gray"
                      _hover={{ cursor: "pointer", color: "black" }}
                    >
                      <Link to="/signup">SIGN UP</Link>
                    </Text>
                  </PopoverBody>
                )}
              </PopoverContent>
            </Popover>

            <Menu>
              <Popover placement="bottom">
                <PopoverTrigger>
                  <Button
                    onClick={() => handleActiveBtn()}
                    color="white"
                    ml="0.8rem"
                    variant="link"
                    rightIcon={<ChevronDownIcon />}
                  >
                    {currency}
                  </Button>
                </PopoverTrigger>
                {isActive ? (
                  <PopoverContent width="240px" mr="4rem" borderRadius="none">
                    <PopoverBody>
                      <Box w="200px" h="auto" color="#1e87f0">
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            AED
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            AUD
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            BRL
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            CAD
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            CHF
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            CZK
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            DKK
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            EUR
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            GBP
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            HKD
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            HUF
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            ILS
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            INR
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            JPY
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            MXN
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            NOK
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            NZD
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            PHP
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            PLN
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            SEK
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            SGD
                          </Text>
                        </Flex>
                        <Flex justifyContent="space-evenly">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            THB
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            TRY
                          </Text>
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            TWD
                          </Text>
                        </Flex>
                        <Flex justifyContent="center">
                          <Text
                            _hover={hover}
                            onClick={(e) => handleCurrency(e)}
                          >
                            USD
                          </Text>
                        </Flex>
                      </Box>
                    </PopoverBody>
                  </PopoverContent>
                ) : (
                  ""
                )}
              </Popover>
            </Menu>
            <Button
              as={IconButton}
              icon={<HamburgerIcon color="white" h="6" w="6" />}
              backgroundColor="black"
              color="white"
              colorScheme="white"
              onClick={onOpen}
              _hover={{
                bg: "none",
                color: "none",
              }}
            >
              {/* Open */}
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent backgroundColor="black">
                <DrawerCloseButton color="white" />
                <DrawerBody color="white" fontSize="14px" textAlign="center">
                  <Box mt="2rem">
                    <Text>ARE YOU A PROPERTY OWNER/MANAGER?</Text>
                    <Link
                      to="/addproperty-form-1"
                      color="whiteAlpha.700"
                      mt="0.6rem"
                      mb="0.6rem"
                    >
                      List New Property
                    </Link>
                    <Text color="whiteAlpha.700">
                      Sign in to your Dashboard
                    </Text>
                  </Box>
                  <Divider color="whiteAlpha.800" h="6" mb="4rem" />
                  <Box>
                    <Text>HOLIDAY HOMES FOR SALE</Text>
                    <Text color="whiteAlpha.700" mt="0.6rem" mb="0.6rem">
                      Tripvillas Managed
                      <Text fontSize="13px">
                        Homes from A grade developers. Rentals guaranteed
                      </Text>
                    </Text>
                    <Text color="whiteAlpha.700">
                      Marketplace
                      <Text fontSize="13px">
                        See what homes are up for sale from different property
                        owners.
                      </Text>
                    </Text>
                  </Box>
                  <Divider color="whiteAlpha.800" h="6" mb="1rem" />
                  <Box>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      About Us
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      Privacy Policy
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      Terms of Use
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      FAQs
                    </Text>
                    <Text mb="0.4rem" color="whiteAlpha.700">
                      Contact Us
                    </Text>
                  </Box>
                  <Divider color="whiteAlpha.800" h="6" mb="1rem" />
                  <Text color="whiteAlpha.800">© Tripvillas Pte Ltd</Text>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
