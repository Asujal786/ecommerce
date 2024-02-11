const mongoose=require('mongoose');

const Kids= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   price:{
    type:Number,
    required:true
   },
   quantity:{
    type:Number
   },
   category:{
    type:String,
    required:true
   },
   color:{
    type:String,
    required:true
},
   size:{
     type:String
   }

}
    
);

const Product=mongoose.model("Kids", Kids);
module.exports=Product;