import { Heading, FlatList, Image, Text, Box , ScrollView} from "native-base";
import { Header } from "../components";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import datacsemen from "../datacsemen";

const CategoryDetail = ({ route }) => {
  const navigation = useNavigation();
  const params = route.params.item;

  const renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("CategoryDetail", { item: item })}
      >
        <Box
          p={"3"}
          flexDirection="row"
          flex={1}
          borderWidth={'1'}
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
        </Box>
      </TouchableOpacity>
      
    );
  };

  
  return (
    <>
    <ScrollView>
    <Header title={params.title}/>
    <FlatList
        data={datacsemen}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
    />
    </ScrollView> 
    </>
  );
};

export default CategoryDetail;