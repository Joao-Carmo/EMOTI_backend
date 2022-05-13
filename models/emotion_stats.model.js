module.exports = (sequelize, DataTypes) => {
    const EmotionStat = sequelize.define('emotionstat', {       
        right: {
            type: DataTypes.INTEGER
        },
        wrong: {
            type: DataTypes.INTEGER
        }
    },
    {
        timestamps: false
    })
    return EmotionStat;
};