const User = require('./User');
const Profile = require('./Profile');
const Activity = require('./Activitylog');

User.hasOne(Profile, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
Profile.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Activity, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});
Activity.belongsTo(User, {
    foreignKey: 'user_id',
})


module.exports = { User, Profile, Activity };
