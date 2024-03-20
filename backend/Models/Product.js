const mongoose=require('mongoose');

const ProductSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
      
    },
   price:{
    type:Number,

   },
   quantity:{
    type:Number
   },
   category:{
    type:String,

   },
   color:{
    type:String,
 
   },
   size:{
     type:String
   },
   image:{
    type:String
   }

}
    
);

const Product=mongoose.model("Product", ProductSchema);
module.exports=Product;