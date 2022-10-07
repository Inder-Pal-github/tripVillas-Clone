/*  
Author: Ashish Kumar Chaudhary
EmailId: 
Date: 23 Aug 2022
WorkItem: Created SignUp page for first time users
*/
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { postData, registerData } from "../../Redux/AuthReducer/action";
const Signup = () => {
  const [selectValue, setSelectValue] = useState("91");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure({ isOpen: true });
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const toast = useToast();

  // Empty error
  const phoneError = phone === "";
  const emailError = email === "";
  const passwordError = password === "";
  const firstNameError = firstName === "";
  const lasNameError = lastName === "";
  const [otp, setOtp] = useState(Math.floor(Math.random() * 5000));
  const storedEmail = useSelector((store) => store.authReducer.signup);

  const handlePostData = () => {
    let checkEmail = storedEmail.map((e) => {
      return e.email;
    });
    if (checkEmail.includes(email)) {
      alert(`${email} Email already registered`);
      navigation("/signup");
    } else {
      let payload = {
        selectValue,
        phone,
        email,
        password,
        firstName,
        lastName,
      };
      dispatch(postData(payload));
      setPhone("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");

      // notification success signup toast
      toast({
        title: `Hi ${firstName} welcome`,
        position: "top",
        description: `We've created your account for you.`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const handleClose = () => {
    navigation("/");
  };
  useEffect(() => {
    dispatch(registerData());
  }, []);
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Flex justifyContent="space-between" p="20px">
            <Heading fontSize="lg">Signup</Heading>
            <Link to="/login">Already Sign In </Link>
          </Flex>
          <hr style={{ width: "90%", margin: "auto" }} />
          <ModalBody>
            <InputGroup>
              <select
                style={{
                  border: "1px solid lightgray",
                  height: "40px",
                  borderRadius: "5px",
                }}
                onChange={(e) => setSelectValue(e.target.value)}
              >
                <option value="91">+91</option>
                <option value="1">+1</option>
                <option value="7">+7</option>
                <option value="20">+20</option>
                <option value="27">+27</option>
                <option value="30">+30</option>
                <option value="31">+31</option>
                <option value="32">+32</option>
                <option value="33">+33</option>
                <option value="34">+34</option>
                <option value="36">+36</option>
                <option value="39">+39</option>
                <option value="40">+40</option>
                <option value="41">+41</option>
                <option value="43">+43</option>
                <option value="44">+44</option>
                <option value="45">+45</option>
                <option value="46">+46</option>
                <option value="47">+47</option>
                <option value="48">+48</option>
                <option value="49">+49</option>
              </select>
              <FormControl isInvalid={phoneError} ml="20px">
                <Input
                  type="tel"
                  placeholder="Phone number"
                  onChange={(e) => setPhone(e.target.value)}
                />
                {!phoneError ? (
                  ""
                ) : (
                  <FormErrorMessage>Phone number is required.</FormErrorMessage>
                )}
              </FormControl>
            </InputGroup>
            <InputGroup>
              <FormControl isInvalid={emailError}>
                <Input
                  mt="20px"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!emailError ? (
                  ""
                ) : (
                  <FormErrorMessage>Email is required.</FormErrorMessage>
                )}
              </FormControl>
            </InputGroup>
            <InputGroup>
              <FormControl isInvalid={passwordError}>
                <Input
                  mt="20px"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!passwordError ? (
                  ""
                ) : (
                  <FormErrorMessage>Password is required.</FormErrorMessage>
                )}
              </FormControl>
            </InputGroup>
            <InputGroup>
              <Flex justifyContent="space-between" gap="10px">
                <FormControl isInvalid={firstNameError}>
                  <Input
                    mt="20px"
                    type="text"
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {!firstNameError ? (
                    ""
                  ) : (
                    <FormErrorMessage>First is required.</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={lasNameError}>
                  <Input
                    mt="20px"
                    type="text"
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {!lasNameError ? (
                    ""
                  ) : (
                    <FormErrorMessage>Last is required.</FormErrorMessage>
                  )}
                </FormControl>
              </Flex>
            </InputGroup>
          </ModalBody>
          <hr style={{ width: "90%", margin: "auto" }} />

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={handleClose}>
              CANCEL
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handlePostData}
              disabled={
                !phone || !password || !email || !firstName || !lastName
              }
            >
              REGISTER
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Signup;
