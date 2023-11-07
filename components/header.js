import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Image, Heading } from "native-base";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";


const Header = ({ title, withBack = false }) => {
  const trueGray900 = "#171717";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light" backgroundColor={trueGray900} />
      <Box bg={"white"} p={"4"}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
              <>
                <Image
                source={require ("../assets/RYPOS.png")}
                w="16"
                h="12"
                alt="Logo"
                resizeMode="contain"
                />
              </>
            <Heading color={"red.500"} marginLeft={10}>{title}</Heading>
          </HStack>
        </HStack>
      </Box>
      <Box>
        
      </Box>
    </SafeAreaView>
  );
};

export default Header;