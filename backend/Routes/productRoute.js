const express= require("express");
const router=express.Router();
const Product = require("../Models/Product");


router.post("/add" , async (req,res)=>{
   try{

    const productDetails={
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        quantity:req.body.quantity,
        size:req.body.size,
        category:req.bidy.category,
        color:req.body.color
    }

  const newProduct= await Product.create(productDetails);

    res.status(200).json(newProduct);

   }
  catch (err){
    res.status(400).send({message:"There has been an error while creating the new product" + err})

  }
   
});

router.get("/", async (req,res)=>{
    try{

        const Products=await Product.find();

        res.status(400).json(Products);

    }catch(err){
        res.status(400).send({message:"There has been an error while fetching the data" + err})
    }
})




router.get("/:productId" , async(req,res)=>{
    
    
    try{         
    const id=req.params.productId;
    const Products=await Product.findById(id);

    res.status(200).json(Products);
    }
    catch(err){
       res.status(404).json({
        message:"Could not Find",
        err
       });
    }
})


router.delete("/delete/:productId", async (req,res)=>{

    try{  const ProductId=req.params.productId;
  
     const Product= await Product.findById(ProductId);
  
     if(!Product){
      res.status(202).json({
          message:"Product Not Found"
      });
  
      await Product.findByIdAndDelete(ProductId);
     }

  
     res.status(400).json({
      Message:"Product Deleted Successfully"
     })
  }
  


  catch(err){
      res.status(202).json({
          Message:"There has been an error while deleting the product",
          Error:err
      })
  }
  }
  )
module.exports=router;


