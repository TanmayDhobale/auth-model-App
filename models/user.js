const { Schema, model } = require("mongoose");
const userSchema = new Schema({
    email:{
        type: 'string',
        required : 'true',
        unique : true
    },
    password:{
        type: 'string',
        required : 'true',
        unique : true
    },
    verified: {
        type: Boolean,
        // specifies the default value of the field
        default: false,
      },
      refreshtoken: {
        type: String,
      },
    });
    
   
 // exporting the user model
 module.exports = model("User", userSchema);