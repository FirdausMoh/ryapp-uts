import { Heading, FlatList, Image, Text,  ScrollView, Box,View } from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import data from "../data";

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("", { item: item })}
      >
        <Box
          p={"3"}
          flexDirection="row"
          flex={1}
        >
          <Box flex={2} mr={"4"}>
            <Image
              source={{ uri: item.image }}
              w="100"
              h="100"
              alt="Image Data"
            />
          </Box>
          <Box flex={4}>
            <Heading lineHeight={"md"} fontSize={"md"}>
              {item.title}
            </Heading>
          </Box>
          <Box flex={4}>
            <Heading lineHeight={"md"} fontSize={"md"}>
              {item.desc}
            </Heading>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  
  return (
    <>
    <View>
    <Header title={"RYAPP"}  />
    </View>
    <ScrollView>
    <Box marginLeft={'3.5'} >
        <Heading>Welcome Back,</Heading>
        <Text fontSize={'20'} color={'red.600'} bold > Subur Jaya </Text>
    </Box>
    <Box margin={'30'}>
    <Heading>Best Seller Product</Heading>
   
    </Box> 
    <FlatList
        data={data}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
    />
    
    </ScrollView>
    </>
  );
};

export default HomeScreen;