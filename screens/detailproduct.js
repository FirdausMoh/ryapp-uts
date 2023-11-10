import { Heading, Center, Text, Box, Image, Button, HStack, Divider,Input,FormControl,FlatList, ScrollView } from "native-base";
import { useNavigation } from "@react-navigation/native";

const DetailProduct = ({route}) => {
    const { image, title, content, Price, category } = route.params.item;
    const navigation = useNavigation();
return(
    <ScrollView>
    <Center mt={16}>
    <Box m={10} shadow={3} backgroundColor={"white"} >
    <Center mt={30}>
        <HStack>
        <Box> 
        <Image
            source={{ uri: image }}
            width={400}
            height={200}
            alt={title}
            resizeMode="contain"
          />
          </Box>
        </HStack>
    </Center>
        <Box m={5}>
            <Box mt={5}>
            <Heading fontSize={16} m={3}> Kategori Barang : <Text color={"gray.600"}>{category}</Text></Heading> 
            </Box>
            <Divider color={"black"} thickness={2}></Divider>
            <Box>
            <Heading fontSize={16} m={3}> Nama Barang : <Text color={"gray.600"}>{title}</Text></Heading> 
            </Box>
            <Divider color={"black"} thickness={2}></Divider>
            <Box>
            <Heading fontSize={16} m={3}> Deskripsi : <Text color={"gray.600"}>{content}</Text></Heading> 
            </Box>
            <Divider color={"black"} thickness={2}></Divider>
            <Box>
            <Heading fontSize={16} m={3}> Harga Barang : <Text color={"gray.600"}>{Price}</Text></Heading> 
            </Box>
            <Divider color={"black"} thickness={2}></Divider>
            <Box>
            <FormControl>
            <FormControl.Label><Text color={"black"} bold >Jumlah</Text></FormControl.Label>
            <Input borderColor={"coolGray.500"}/>
          </FormControl>
            </Box>
            <Divider color={"black"} thickness={2}></Divider>
            <Box my={'10%'}>
                <Center>
                <Button w={300} borderRadius={30} backgroundColor={'red.600'} 
                onPress={() => navigation.navigate("Pembelian")}>
                    <Text fontSize={"xl"} color={"white"}>Beli</Text>
                </Button>
                </Center>  
            </Box>
        </Box> 
    </Box>
    </Center>        
    </ScrollView>
);
};
export default DetailProduct;