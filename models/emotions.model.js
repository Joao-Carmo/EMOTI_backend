module.exports = (sequelize, DataTypes) => {
    const Emotion = sequelize.define('emotion', {
        id_emotion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            validate: { notNull: { msg: 'ID_EMOTION!' } }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: 'EMOTION_NAME!' } }
        },
        image: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: false
    })
    return Emotion;
};