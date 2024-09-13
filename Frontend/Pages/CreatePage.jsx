import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
  useToast
} from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom'
export default function CreatePage() {
  const Navigate=useNavigate()
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [Error, setError] = useState(null);
  const [isloading, setIsloading] = useState(false);
 
  const SubmitHandle = async () => {
    setIsloading(false);
    setError(false);
 
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return setError("please fill out all fields");
    }
    setIsloading(true);
   
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    

    const data = await res.json();
    if (data.success === false) {
      setIsloading(false);
      setError(true);
      return setError(data.message);
    }
    
  
     
     
     
    setIsloading(false);
    setError(false);
    setNewProduct({ name: "", price: "", image: "" });
    if(res.ok)
      {
        Navigate('/')

      }
  };
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            {isloading ? (
              <span>
                ...Loading <Spinner color="red.300" />
              </span>
            ) : (
              <Button w={"full"} onClick={SubmitHandle} disabled={isloading}>
                Add
              </Button>
            )}

            {Error && (
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription color={"red.300"}>{Error}</AlertDescription>
              </Alert>
            )}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
