module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('game', {
        id_game: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            validate: { notNull: { msg: 'ID!' } }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notNull: { msg: 'NAME!' } }
        },
        image: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { message: 'DESCRIPTION!' } 
            }
        }
    },
    {
        timestamps: false
    })
    return Game;
};