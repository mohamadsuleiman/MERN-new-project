import Product from "../models/product.js";
import mongoose from 'mongoose'
export const getProduct=async (req,res)=>{
  try{
   const product=await Product.find({})
   res.status(200).json({success:true,data:product})
  }catch(error){
   res.status(500).json({success:false,message:"Error Server"})
  }
}
export const createProduct=async (req,res)=>{
    const product=req.body
    if(!product.name||!product.price||!product.image){
        return res.status(400).json({success:false,message:"please fill all fields"})

    }
    const newProduct=new Product(product)
    try{
        await newProduct.save()
        res.status(200).json({success:true,message:"successful Added", data:newProduct})
    }catch (error){
        res.status(500).json({success:false,message:error.message})
    }
}
export const updatedProduct=async (req,res)=>{
  const {id}=req.params
  const product=req.body
  if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ success: false, message: "unavalible" });
    }
  try{
      const updatedProduct=await Product.findByIdAndUpdate(id,product,{new:true})
      res.status(200).json({success:true,data:updatedProduct})
  }catch(error){
      res.status(500).json({success:false,message:error.message})
  }
}
export const deleteProduct=async (req, res) => {
    const { id } = req.params;
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "removed" });
    } catch (error) {
      res.status(500).json({ success: false, message: "error internal" });
    }
  };
