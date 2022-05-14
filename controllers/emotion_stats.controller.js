const db = require("../models/index.js");
const EmotionStat = db.emotion_stats;

exports.getAll = async (req, res) => {
    res.status(200).json({ message: 'All okay'})
}
