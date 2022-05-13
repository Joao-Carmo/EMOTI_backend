module.exports = (sequelize, DataTypes) => {
    const EmotionStat = sequelize.define('question', {
        id_emotion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            validate: { notNull: { msg: 'ID_EMOTION!' } }
        },
        username_child: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { notNull: { msg: 'NAME_OF_CHILD!' } }
        },
        right: {
            type: DataTypes.INT
        },
        wrong: {
            type: DataTypes.INT
        }
    },
    {
        timestamps: false
    })
    return EmotionStat;
};