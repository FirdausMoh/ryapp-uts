import { Heading, Center, } from "native-base";
import { Header } from "../components";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Galvalum = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header title={"Galvalum"} />
    </>
  );
};

export default Galvalum;