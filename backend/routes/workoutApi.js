const express = require('express')

const router = express.Router()

const { getWorkoutData } = require('../controllers/workoutController')

router.get('/muscle-group', async(req, res) => {
    try {
        const muscle = req.query.muscle || 'biceps'

        const data = await getWorkoutData(muscle)

        res.json(data)

    } catch (error) {
        console.error("Error handling API request:", error)
        res.status(500).json({error: 'Internal Server Error'})
    }
})

module.exports = router;