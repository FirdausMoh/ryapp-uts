import { Heading, Image, Text,  ScrollView, Box,View, Center, VStack, HStack} from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <>
    <Header/>
    <ScrollView>
      <VStack>
      <Box>
        <Image source={require("../assets/baner.jpg")}
        alt="banner"
        w="full"
        h="200"
        resizeMode="contain"
        />
      </Box>
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
      </Box>
      <Center>
      <Box backgroundColor={'rose.300'}>
          <Center marginTop={5} marginBottom={5}>
            <Text fontWeight={'semibold'} fontSize={16} color={'black'}>Kenapa harus beli di <Text color={'red.500'}>RYAPP</Text> ?? </Text>
          </Center>
          <ScrollView marginLeft={'1'} horizontal={true} scrollEnabled={true}>
          <Box marginLeft={3}>
          <Image
                source={require("../assets/1.png")}
                w="150px"
                h="200px"
                alt="Logo"
                resizeMode="contain"
            />
          </Box>
          <Box marginLeft={3}>
          <Image
                source={require("../assets/1.png")}
                w="150px"
                h="200px"
                alt="Logo"
                resizeMode="contain"
            />
          </Box>
          <Box marginLeft={3}>
          <Image
                source={require("../assets/1.png")}
                w="150px"
                h="200px"
                alt="Logo"
                resizeMode="contain"
            />
          </Box>  
          <Box marginLeft={3}>
          <Image
                source={require("../assets/1.png")}
                w="150px"
                h="200px"
                alt="Logo"
                resizeMode="contain"
            />
          </Box>      
          
      </ScrollView>
      </Box>
      </Center>
    </VStack>

    </ScrollView>
    </>
  );
};

export default HomeScreen;