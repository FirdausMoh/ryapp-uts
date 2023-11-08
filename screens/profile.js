import { Heading, Center,Image, Box,Text, VStack, Button} from "native-base";
import { Header } from "../components";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Profile = () => {
  const navigation = useNavigation();
  return (
    <>
    <VStack mt={20} >
      <Box>
      <Center>
      <Image
          source={require ("../assets/pp.jpg")}
          w="140"
          h="140"
          alt="Logo"
          borderRadius={100}
          resizeMode="contain"
          mb={5}
            />
      </Center>
      <Box ml={5}>
        <Center>
        <Text fontSize={24} fontWeight={'medium'}> H. Miftah Syukron</Text>
        <Text fontSize={24} fontWeight={'medium'} color={"red.400"}> miftah@gmail.com</Text>
        </Center>
      <Box>
        <Center>
        <Button mt="2" w={100}
            onPress={() => navigation.navigate("Login")}
            backgroundColor={"red.600"}>Logout</Button>
        </Center>
        
      </Box>
      </Box>
      </Box>
    </VStack>
      
      
      

    </>
  );
};

export default Profile;