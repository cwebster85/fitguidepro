const axios = require('axios')
require('dotenv').config()

const apiKey = process.env.API_KEY;

const getWorkoutData = async (muscle) => {
    try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
            headers: {
              'X-Api-Key': apiKey
            }
          });

        return response.data;

    } catch (error) {
        console.error("Error making API call", error)

        throw new Error("Internal Server Error")
    }
}

module.exports = {
    getWorkoutData
}