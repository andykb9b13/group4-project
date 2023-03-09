const { Goals } = require('../models');

const userGoals = [
    {
        goalsLog_id: "1",
        user_id: "1",
        week_of: "2023-03-5",
        activity_type: "",
        duration: "180",
        distance: "",
        intensity: "4",
    }
]


const seedGoals = () => Goals.bulkcreate(userGoals);

module.exports = seedGoals;
