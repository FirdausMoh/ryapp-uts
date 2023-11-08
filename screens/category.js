import { Heading, FlatList, Image, Text, Box , ScrollView,View, Center, VStack, HStack} from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Category = () => {
  const navigation = useNavigation();
  return (
    <>
    <View>
    <Header/>
    </View>
    <VStack>
      <ScrollView>
      <Box>
      <Heading ml={5} mb={4}>Kategori Barang</Heading>
      
      <HStack>
        <TouchableOpacity
        onPress={() =>
        navigation.navigate("Semen")}>
          <Box mr={'80px'} ml={'55px'}>
          <Image
                source={require ("../assets/semen.jpg")}
                w="130"
                h="130"
                alt="Logo"
                borderRadius={30}
            />
            <Center>
            <Text color={"gray.600"} marginTop={1} marginBottom={2} fontSize={18}>Pilihan Semen</Text>
            </Center>
          </Box>  
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() =>
        navigation.navigate("Cat")}>
          <Box marginLeft={3}>
          <Image
                source={require ("../assets/cat.png")}
                w="130"
                h="130"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Pilihan Cat</Text>
          </Center> 
          </Box>  
        </TouchableOpacity>     
    </HStack>
    <HStack>
        <TouchableOpacity
        onPress={() =>
        navigation.navigate("Bata")}>
          <Box mr={'80px'} ml={'55px'}>
          <Image
                source={require ("../assets/bata.webp")}
                w="130"
                h="130"
                alt="Logo"
                borderRadius={30}
            />
            <Center>
            <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Pilihan Bata</Text>
            </Center>
           
          </Box>  
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() =>
        navigation.navigate("Galvalum")}>
          <Box marginLeft={3}>
          <Image
                source={require ("../assets/galvalum.png")}
                w="130"
                h="130"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Pilihan Galvalum</Text>
          </Center> 
          </Box>  
        </TouchableOpacity>
      </HStack>  
    <HStack>
        <TouchableOpacity
        onPress={() =>
        navigation.navigate("Product")}>
          <Box mr={'80px'} ml={'55px'}>
          <Image
                source={require ("../assets/other.png")}
                w="130"
                h="130"
                alt="Logo"
                borderRadius={30}
            />
            <Center>
            <Text marginTop={1} color={"gray.600"}  marginBottom={5} fontSize={18}>Semua</Text>
            </Center>  
          </Box>  
        </TouchableOpacity>
      </HStack>
    </Box>
    </ScrollView>
    
    </VStack>
    </>
   
    );
}

export default Category;