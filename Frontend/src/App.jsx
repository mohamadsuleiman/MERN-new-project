import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route , Routes } from "react-router-dom";
import Home from "../Pages/Home";
import CreatePage from "../Pages/CreatePage";
import Navbar from "../Components/Navbar";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
      <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/createPage" element={<CreatePage/>}/>
   </Routes>
   </Box>
  )
}

export default App