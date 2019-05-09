var mongoose = require("mongoose");
var Video = mongoose.model("Video");

module.exports = {

  getById: (req, res, next, id) => {
    if(!id) return next(new Error("ID is not exist"));

  },


  getVideo: (req, res, next) => {
    var video = new Video(req.body);
    Video.find();
  }
}