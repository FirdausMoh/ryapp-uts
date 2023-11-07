import { Heading, Image, Text,  ScrollView, Box,View, Center, VStack, HStack} from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <>
    <View>
    <Header/>
    </View>
    <ScrollView>
    <Box>
        <Image source={require("../assets/baner.jpg")}
        alt="banner"
        w="full"
        h="full"
        resizeMode="contain"
        />
    </Box>
    <VStack>
    <Box>
      <HStack>
      <Text marginTop={'3.5'} marginLeft={3} marginBottom={5} fontSize={20}>
    Apa Yang Anda Cari ?
    </Text>
    <TouchableOpacity onPress={() => navigation.navigate("Product")}>
    <Text marginTop={'5'} marginLeft={'70px'} marginBottom={5} fontSize={14} color={"green.500"}>
    Lihat Semua
    </Text>
    </TouchableOpacity>
      </HStack>
    
    </Box>
    </VStack>
    <Box>
      <ScrollView marginLeft={'1'} horizontal={true} scrollEnabled={true}>
          <Box marginLeft={3}>
          <Image
                source={require("../assets/dinding.jpg")}
                w="100px"
                h="100px"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Dinding</Text>
          </Center> 
          </Box>   

          <Box marginLeft={3}>
          <Image
                source={require ("../assets/atap.jpg")}
                w="100px"
                h="100px"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Atap</Text>
          </Center> 
          </Box>  

          <Box marginLeft={3}>
          <Image
                source={require ("../assets/cat.jpg")}
                w="100px"
                h="100px"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Cat</Text>
          </Center> 
          </Box>  

          <Box marginLeft={3}>
          <Image
                source={require ("../assets/lain.jpg")}
                w="100px"
                h="100px"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={5} fontSize={18}>Lain-lain</Text>
          </Center> 
          </Box>  
      </ScrollView>
    <VStack>
      <Center>
      <Box>
          <Heading color={"red.500"}fontSize={18}>#ApaAjaAda</Heading>
      </Box>
      </Center>
    </VStack>
    </Box> 
    
    </ScrollView>
    </>
  );
};

export default HomeScreen;