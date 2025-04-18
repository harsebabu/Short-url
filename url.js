const mongoose=require("mongoose");

const urlSchema=new mongoose.Schema({
    shortID:{
        type:String,
        require:true,
    },
    redirectID:{
        type:String,
        require:true,
    },
    visiblehistory:
        [{timestamp:{type:Number}}],
},
{timestamps:true}
);
const url=mongoose.model("url",urlSchema)
module.exports=url;