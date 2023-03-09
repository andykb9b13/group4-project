const { Profile } = require('../models');

const userProfiles = [
    {
    user_id: "1",
    location: "Durham, NC",
    height: "6",
    starting_weight: "190",
    fitness_level: "3",
    }
]


const seedProfile = () => Profile.bulkcreate(userProfiles);

module.exports = seedProfile;
