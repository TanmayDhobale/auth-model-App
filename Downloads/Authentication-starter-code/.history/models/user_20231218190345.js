const { Schema, model } = require("mongoose");
const userSchema = new Schema({
    email:{
        type: 'string',
        required : 'true',
        unique : true
    }
    user:{
        type: 'string',
        required : 'true',
        unique : true
    }
})