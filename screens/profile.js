import { Heading, Center } from "native-base";
import { Header } from "../components";

const Profile = () => {
  return (
    <>
      <Header title={"Profile"} />
      <Center flex={1}>
        <Heading>For You</Heading>
      </Center>
    </>
  );
};

export default Profile;