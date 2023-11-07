import { Heading, FlatList, Image, Text,  ScrollView, Box,View, Center} from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import data from "../data";

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <>
    <View>
    <Header title={"RYAPP"}  />
    </View>
    <ScrollView>
    <Box marginLeft={'3.5'} >
        <Heading>Welcome To</Heading>
        <Text fontSize={'20'} color={'red.600'} bold > Subur Jaya Store</Text>
    </Box>
    <Box>
    <Heading marginTop={10} marginLeft={3} marginBottom={5}> Best Seller Product</Heading>
    </Box>
    
    <Box>
      <ScrollView marginLeft={'1'} horizontal={true} scrollEnabled={true}>
        <TouchableOpacity 
        onPress={() =>
        navigation.navigate("Cat")}>
          <Box marginLeft={3}>
          <Image
                source={require ("../assets/cat.png")}
                w="140"
                h="140"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Pilihan Cat</Text>
          </Center> 
          </Box>  
        </TouchableOpacity>  
        <TouchableOpacity 
        onPress={() =>
        navigation.navigate("Cat")}>
          <Box marginLeft={3}>
          <Image
                source={require ("../assets/cat.png")}
                w="140"
                h="140"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Pilihan Cat</Text>
          </Center> 
          </Box>  
        </TouchableOpacity>  
        <TouchableOpacity 
        onPress={() =>
        navigation.navigate("Cat")}>
          <Box marginLeft={3}>
          <Image
                source={require ("../assets/cat.png")}
                w="140"
                h="140"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Pilihan Cat</Text>
          </Center> 
          </Box>  
        </TouchableOpacity>  
        <TouchableOpacity 
        onPress={() =>
        navigation.navigate("Cat")}>
          <Box marginLeft={3}>
          <Image
                source={require ("../assets/cat.png")}
                w="140"
                h="140"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Pilihan Cat</Text>
          </Center> 
          </Box>  
        </TouchableOpacity>  
      </ScrollView>
    
    </Box> 
    {/* <FlatList
        data={data}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
    /> */}
    </ScrollView>
    </>
  );
};

export default HomeScreen;