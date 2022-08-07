const express = require('express');
const router = express();
const UserController = require('../controller/User');
const SleepController = require('../controller/sleepController');
router.get('/',async ()=>(console.log("router")))


// User API
router.post('/signup',UserController.signup)
router.post('/login',UserController.login)

// Sleep Controller API

// wakeTime
// bedTime
// sleepDuration
// sleepStruggleFrom
// addName

router.post('/addName',SleepController.addName)
router.put('/sleepStruggle/:submissionId',SleepController.sleepStruggleFrom)
router.put('/wakeTime/:submissionId',SleepController.wakeTime)
router.put('/bedTime/:submissionId',SleepController.bedTime)
router.put('/sleepDuration/:submissionId',SleepController.sleepDuration)




module.exports = router