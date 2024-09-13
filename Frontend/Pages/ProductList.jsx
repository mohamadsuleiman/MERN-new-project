import { Box,Heading,HStack,IconButton,Image ,Modal,ModalOverlay,ModalFooter,ModalCloseButton ,Button,ModalContent,Text, useColorModeValue,useDisclosure, ModalHeader, ModalBody, VStack, Input} from "@chakra-ui/react"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
function ProductList({product,Delete,Update}) {
    const textColor=useColorModeValue("gray.600","gray.200")
    const bg=useColorModeValue("white","gray.800")
const { isOpen, onOpen, onClose } = useDisclosure()
const [updateproduct, setUpdateproduct] = useState(product)

const Remove=()=>{
Delete(product._id)
}

const Edit=()=>{
  Update(updateproduct._id,updateproduct)
  onClose()
console.log(updateproduct)
}

  return (
    <Box
    rounded={"lg"}
    shadow={"lg"}
   overflow={"hidden"}
   transition='all 0.3s'
   _hover={{transform:"translateY(-5px)",shadow:"xl"}}
   bg={bg}


 mx={'auto'}
 cursor={'pointer'}
  >

<Image src={product.image} alt={product.name} h={48} w='full'objectFit="cover"/>

<Box p={4} w={{base:'200px',sm:'300px'}}>
    <Heading as={'h3'} size='md' mb={2}>
        {product.name}
    </Heading>
    <Text fontweight="bold" fontSize={'xl'} color={textColor} mb={4}>
        ${product.price}
    </Text>
    <HStack spacing={2}>
        <IconButton icon={<FaEdit/>} onClick={onOpen} colorScheme="blue"/>
        <IconButton icon={<MdDelete/>} onClick={Remove}  colorScheme="red"/>
    </HStack>
</Box>
<Modal isOpen={isOpen} onClose={onClose}>

  <ModalOverlay/>
  <ModalContent>
<ModalHeader>
  update product
</ModalHeader>
<ModalCloseButton />
<ModalBody>
  <VStack spacing={4}>
    <Input
    placeholder="product Name"
    name="name"
    value={updateproduct.name}
    onChange={(e)=>setUpdateproduct({...updateproduct,name:e.target.value})}/>


<Input
    placeholder="price"
    name="price"
    value={updateproduct.price}
    onChange={(e)=>setUpdateproduct({...updateproduct,price:e.target.value})}
    />

<Input
    placeholder="URLimage"
    name="image"
    value={updateproduct.image}
    onChange={(e)=>setUpdateproduct({...updateproduct,image:e.target.value})}
    
    />

  </VStack>
</ModalBody>
<ModalFooter>
            <Button onClick={Edit} variant='ghost'>update</Button>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
  </ModalContent>
</Modal>
  </Box>
  )
}

export default ProductList