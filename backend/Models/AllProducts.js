const mongoose=require('mongoose');

const AllProductSchema= new mongoose.Schema({
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
    data:Buffer,
    contentType: String
   }

}
    
);

const AllProduct=mongoose.model("AllProduct", AllProductSchema);
module.exports=AllProduct;