const sleepModel = require('../model/sleepModel')
const validator = require('../validator/valiator')
const jwt = require('jsonwebtoken')

const addName = async (req, res) => {
   
    try {
        let {
            nickName,
            dataCollectedStep
        } = req.body;
        const token = req.headers["x-auth-token"];
        let obj = {}
        if (!validator.isValid(nickName)) {
            return res.status(404).send({
                status: "false",
                msg: "Please insert name "
            })
        }
        obj.nickName = nickName

        if (!validator.isValid(dataCollectedStep)) {
            return res.status(404).send({
                status: "false",
                msg: "Please insert step"
            })
        }

        obj.dataCollectedStep = dataCollectedStep

        let decodedToken = jwt.verify(token, "Shubham");
        let userId = decodedToken.userId;
        obj.userId = userId
        let nameInserted = await sleepModel.create(obj);
        return res.status(201).send({
            status: true,
            data: nameInserted
        });
    } catch (error) {
        return res.status(500).send({
            status: false,
            msg: error.message
        })
    }

}

const sleepStruggleFrom = async (req, res) => {
   
    try {
        let {
            sleepStruggleFrom,
            dataCollectedStep
        } = req.body

        if (!validator.isValid(sleepStruggleFrom)) {
            return res.status(404).send({
                status: "false",
                msg: "Please sleepStruggleFrom data is not inserted"
            })
        }

        let submissionId = req.params.submissionId
        let obj = {}

         obj.sleepStruggleFrom=sleepStruggleFrom
        obj.dataCollectedStep = dataCollectedStep

        let updateSleepForm = await sleepModel.findByIdAndUpdate(submissionId, {
            ...obj
        }, {
            new: true
        });
        return res.status(200).send({
            status: true,
            data: updateSleepForm
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            msg: error.message
        });
    }


}

const bedTime = async (req, res) => {
   
    try {
        let {bedTime,dataCollectedStep} = req.body;

        if (!validator.isValid(bedTime)) {
            return res.status(404).send({
                status: "false",
                msg: "Please bedTime data is not inserted"
            })
        }



        let obj = {}
        obj.bedTime=bedTime
        obj.dataCollectedStep=dataCollectedStep
        let submissionId = req.params.submissionId
        let bedTimeForm = await sleepModel.findByIdAndUpdate(submissionId, {
            ...obj
        }, {
            new: true
        });
        return res.status(200).send({
            status: true,
            data: bedTimeForm
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            msg: error.message
        });
    }


}

const wakeTime = async (req, res) => {
  
    try {
        let {wakeTime,dataCollectedStep} = req.body;


        if (!validator.isValid(wakeTime)) {
            return res.status(404).send({
                status: "false",
                msg: "Please wakeTime data is not inserted"
            })
        }


        let obj = {}
        obj.wakeTime=wakeTime
        obj.dataCollectedStep=dataCollectedStep
        let submissionId = req.params.submissionId
        let wakeTimeForm = await sleepModel.findByIdAndUpdate(submissionId, {
            ...obj
        }, {
            new: true
        });
        return res.status(200).send({
            status: true,
            data: wakeTimeForm
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            msg: error.message
        });
    }


}

const sleepDuration = async (req, res) => {
  
    try {
        let {sleepDuration,dataCollectedStep} = req.body;


        if (!validator.isValid(sleepDuration)) {
            return res.status(404).send({
                status: "false",
                msg: "Please sleepDuration data is not inserted"
            })
        }


        let obj = {}
        obj.sleepDuration=sleepDuration
        obj.dataCollectedStep=dataCollectedStep
        let submissionId = req.params.submissionId
        let sleepDurationForm = await sleepModel.findByIdAndUpdate(submissionId, {
            ...obj
        }, {
            new: true
        });
        return res.status(200).send({
            status: true,
            data: sleepDurationForm
        });

    } catch (error) {
        return res.status(500).send({
            status: false,
            msg: error.message
        });
    }


}

module.exports.wakeTime=wakeTime
module.exports.bedTime = bedTime
module.exports.sleepDuration = sleepDuration
module.exports.sleepStruggleFrom = sleepStruggleFrom
module.exports.addName = addName