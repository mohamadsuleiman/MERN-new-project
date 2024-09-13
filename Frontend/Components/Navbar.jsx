import { Button, Container, Flex,HStack,Text, useColorMode } from "@chakra-ui/react"
import { Link, } from "react-router-dom"
import { FaPlusSquare } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
function Navbar() {
    const {colorMode , toggleColorMode}=useColorMode()

  return (
    <Container maxW={"1140px"} p={4}>
<Flex
h={16}
alignItems={"center"}
justifyContent={"space-between"}
FlexDir={{
    base:'column',
    sm:'row'
}}>
<Text fontSize={{base:"22",sm:"28"}} 
fontWeight={"bold"}
textTransform={"uppercase"}
textAlign={"center"}
bgGradient={"linear(to-r, cyan.400, blue.500)"}
bgClip={"text"}

>
    <Link to={"/"}>
    <Flex alignItems={"center"}
justifyContent={"space-between"}
FlexDir={{
    base:'column',
    sm:'row'
}}>
    <p  style={{marginRight:5}}>product store</p> <TiShoppingCart color="orange"/></Flex></Link>
</Text>

<HStack spacing={3} alignItems={"center"}>
<Link to={"/createPage"}>
<Button>
    <FaPlusSquare/>
</Button>
</Link>
<Button onClick={toggleColorMode}>
{colorMode ==="light"?<IoMoon/>:<LuSun/>}

</Button>


</HStack>
</Flex>


    </Container>
  )
}

export default Navbar