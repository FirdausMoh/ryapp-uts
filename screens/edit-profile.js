import { Heading, Center } from "native-base";
import { Header } from "../components";

const EditProfile = () => {
  return (
    <>
      <Header title={"edit"} />
      <Center flex={1}>
        <Heading>For You</Heading>
      </Center>
    </>
  );
};

export default EditProfile;