const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    // 藏书种类
    name: {
        type: String,
        required: true,
        max: 100,
        min: 3,
    }
});

// 虚拟属性'url'：书本种类url
GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });

// 导出 Genre 模型
module.exports = mongoose.model('Genre', GenreSchema);