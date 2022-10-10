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
  FormHelperText,
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
  const [validPassword, setValidPassword] = useState(false);

  const [otp, setOtp] = useState(Math.floor(Math.random() * 5000));
  const storedEmail = useSelector((store) => store.authReducer.signup);
  const passwordChange = (e) => {
    setPassword(e.target.value);
    const lowercase = new RegExp("(?=.*[a-z])");
    const uppercase = new RegExp("(?=.*[A-Z])");
    const numeric = new RegExp("(?=.*[0-9])");
    const specialChar = new RegExp("(?=.*[!@#$%^$*])");
    const sixLetter = new RegExp("(?=.{8,})");
    if (
      lowercase.test(password) &&
      uppercase.test(password) &&
      numeric.test(password) &&
      specialChar.test(password) &&
      sixLetter.test(password)
    ) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }
  };
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
      if (!validPassword) {
        toast({
          title: "Password validation failed",
          description:
            "Password must be of atleast 8 characters long containing atleast one lowercase, uppercase, numeric and special characters",
          status: "info",
          duration: 4000,
          isClosable: true,
          position: "top",
        });
      }
      if (
        email &&
        password &&
        phone &&
        firstName &&
        lastName &&
        validPassword
      ) {
        dispatch(postData(payload));
        toast({
          title: `Hi ${firstName} welcome`,
          position: "top",
          description: `We've created your account for you.`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setPhone("");
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
        navigation("/login");
      }

      // notification success signup toast
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
              <FormControl ml="20px">
                <Input
                  type="tel"
                  maxLength="10"
                  placeholder="Phone number"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FormHelperText>
                  Please provide a valid mobile number
                </FormHelperText>
              </FormControl>
            </InputGroup>
            <InputGroup>
              <FormControl>
                <Input
                  mt="20px"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormHelperText>
                  Please provide a valid email address
                </FormHelperText>
              </FormControl>
            </InputGroup>
            <InputGroup>
              <FormControl>
                <Input
                  mt="20px"
                  type="password"
                  placeholder="Password"
                  onChange={passwordChange}
                />
                <FormHelperText color={validPassword ? "green" : "red"}>
                  Please provide a strong password atleast 8 characters long
                  e.g. meUser@#45
                </FormHelperText>
              </FormControl>
            </InputGroup>
            <InputGroup>
              <Flex justifyContent="space-between" gap="10px">
                <FormControl>
                  <Input
                    mt="20px"
                    type="text"
                    placeholder="First name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <FormHelperText>
                    Provide your firstname here...
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <Input
                    mt="20px"
                    type="text"
                    placeholder="Last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <FormHelperText>Provide your lastname here...</FormHelperText>
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
