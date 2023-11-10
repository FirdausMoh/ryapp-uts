import * as React from "react";
import { Box, Text, Heading, VStack, FormControl, Input, Button, HStack, Center, NativeBaseProvider, Image } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Login = () => {
  const navigation = useNavigation();
  return <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Center mb={10}>
      <Image
              source={require("../assets/RYPOS.png")}
              w="110px"
              h="80px"
              alt="Logo"
              resizeMode="cover"
            />
      </Center>
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome 
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="red.600" fontWeight="bold" size="xs">
          Subur Jaya APP
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label><Text color={"black"} bold >Email ID</Text></FormControl.Label>
            <Input borderColor={"coolGray.500"}/>
          </FormControl>
          <FormControl>
          <FormControl.Label><Text color={"black"} bold >Password</Text></FormControl.Label>
            <Input borderColor={"coolGray.500"} type="password" />
          </FormControl>
          <Button mt="2"  onPress={() => navigation.navigate("Home")} backgroundColor={"red.600"}>
            <Text color={"white"}>Login</Text>
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Login />
            </Center>
          </NativeBaseProvider>
        );
    };
    