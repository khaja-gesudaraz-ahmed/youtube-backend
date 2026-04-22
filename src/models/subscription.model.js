import mongoose, {Schema} from "mongoose";

const subscriptionSchema=new Schema({
    Subscriber:{
        type:Schema.Types.ObjectId,//one who subscribing
        ref:"User"
    },
    channel:{
        type:Schema.Types.ObjectId,//one to whom 'subscriber' is subscribing
        ref:"User"
    }
},{timestamp:true})




export const Subscription=mongoose.model("Subscription",subscriptionSchema)