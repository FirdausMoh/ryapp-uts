import { Heading, Center, } from "native-base";
import { Header } from "../components";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Profile = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header title={"Profile"} />
      <Center flex={1}>
        <Heading>For You</Heading>
        <TouchableOpacity
        onPress={() => navigation.navigate("Login")}>
          <Text>Login</Text>
        </TouchableOpacity>
      </Center>
    </>
  );
};

export default Profile;