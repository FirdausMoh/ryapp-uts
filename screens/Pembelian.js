import { Heading, Center, Box, } from "native-base";
import { Header } from "../components";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Pembelian = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header title={"pembelian"} />
      <Center>
      <Box backgroundColor={'green.500'} w={"full"} h={'full'} >
      <Center>
      <Heading>
        pembelian berhasil
      </Heading>
      </Center>
      
      </Box>
      </Center>
      
    </>
  );
};

export default Pembelian;