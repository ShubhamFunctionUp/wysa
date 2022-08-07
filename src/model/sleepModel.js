const mongoose = require('mongoose')


const sleepDataSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    nickName:{
        type:String,
        required:true,
        unique:true
    },
    sleepStruggleFrom:{
      type:String,
      default:null
    },
    bedTime:{
        type:String,
        default:null
    },
    wakeTime:{
        type:String,
        default:null
    },
    sleepDuration:{
        type:Number,
        min:0,
        max:24,
        default:0
    },
    dataCollectedStep:{
        type:Number,
        min:1,
        max:4
    },
    deletedAt:{
        type:Date,
        default:null
    }


},{timestamps:true})


module.exports = mongoose.model('SleepData',sleepDataSchema)
