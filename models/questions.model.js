module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('question', {
     
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { message: 'Question must be asked!' } 
            }
        },
        answer: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false
    })
    return Question;
};