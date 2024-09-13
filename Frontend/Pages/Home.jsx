import {Container, VStack,Text,SimpleGrid, Flex } from '@chakra-ui/react'
import { IoRocketOutline } from "react-icons/io5";
import { useEffect,useState } from 'react';
import ProductList from './ProductList';
import { set } from 'mongoose';




export default function Home() {
const [Data, setData] = useState([])
   useEffect(() => {
    const addedProducts=async()=>{
      const res=await fetch('/api/products')
      const data=await res.json()
      
setData(data.data)
 console.log("dd")
  
    }
    addedProducts()
  },[] );
  

  const deleteHandle=async (pid)=>{
    const res =await fetch(`/api/products/${pid}`,{
        method:"DELETE"
    })
    const data=await res.json()
    
   console.log(data.message)
    Data.filter((pId)=>pId!==pid)
    if(res.ok){
        console.log("deleted")
    
    }
        }
        const updateHandle=async(pid,product)=>{
          const res=await fetch(`/api/products/${pid}`,{
            method:"PUT",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(product)
          })
          const data=await res.json()
          console.log(data.message)
        
        }

  return (
    <Container maxW='container.xl'py={12}>

<VStack spacing={8}>

<Text fontSize={"30"} 
fontWeight={"bold"}
textTransform={"uppercase"}
textAlign={"center"}
bgGradient={"linear(to-r, cyan.400, blue.500)"}
bgClip={"text"}

>

{Data.length===0&&(  <div style={{display:'flex',flexWrap:'wrap',alignItems:'center'}}>
<p style={{marginRight:5}}>there is no Products</p>

</div>)}

  <div style={{display:'flex',flexWrap:'wrap',alignItems:'center'}}>
<p style={{marginRight:5}}>Current Products</p>
<p ><IoRocketOutline color='orange'/></p>
</div>

</Text>
<Flex gap={10} alignItems={'center'}justifyContent={'center'} flexWrap='wrap'  w={'full'}>

{Data.map((product)=>(
  <ProductList key={product._id} product={product} Delete={deleteHandle} Update={updateHandle}/>
))}
</Flex>
</VStack>

    </Container>
  )
}
