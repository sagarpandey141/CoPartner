const mongoose=require("mongoose")
const ProfileSchema=mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     Email:{
        type:String,
        required:true
     },
     ContactInf:{
        type:String,
     },
     CurrentYear:{
        type:String,
        required:true
     },
     TechStack:{
        type:Array,
        required:true
     },
     password:{
      type:String,
      required:true
     },
    
},{ timestamps: true })

module.exports=mongoose.model("Profile",ProfileSchema)