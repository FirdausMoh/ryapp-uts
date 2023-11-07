import { Heading, FlatList, Image, Text, Box , ScrollView,View, Center} from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Category = () => {
  const navigation = useNavigation();
  return (
    <>
    <View>
    <Header title={"Category Items"}  />
    </View>
    <Box>
      <ScrollView marginLeft={'1'} horizontal={true} scrollEnabled={false}>
        <TouchableOpacity
        onPress={() =>
        navigation.navigate("Semen")}>
          <Box marginLeft={'20px'} marginRight={'35px'}>
          <Image
                source={require ("../assets/semen.jpg")}
                w="140"
                h="140"
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
    
    <Box marginTop={0}>
      <ScrollView marginLeft={'1'} horizontal={true} scrollEnabled={false}>
        <TouchableOpacity
        onPress={() =>
        navigation.navigate("Bata")}>
          <Box marginLeft={'20px'} marginRight={'35px'}>
          <Image
                source={require ("../assets/bata.webp")}
                w="140"
                h="140"
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
                w="140"
                h="140"
                alt="Logo"
                borderRadius={30}
            />
          <Center>
          <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Pilihan Galvalum</Text>
          </Center> 
          </Box>  
        </TouchableOpacity>
      </ScrollView>
    </Box>
    
    <Box>
      <ScrollView marginLeft={'1'} horizontal={true} scrollEnabled={false}>
        <TouchableOpacity
        onPress={() =>
        navigation.navigate("Product")}>
          <Box marginLeft={'20px'} marginRight={'35px'}>
          <Image
                source={require ("../assets/other.png")}
                w="140"
                h="140"
                alt="Logo"
                borderRadius={30}
            />
            <Center>
            <Text marginTop={1} color={"gray.600"}  marginBottom={2} fontSize={18}>Semua</Text>
            </Center>  
          </Box>  
        </TouchableOpacity>

      </ScrollView>
    </Box>
    </>
    );
}

export default Category;