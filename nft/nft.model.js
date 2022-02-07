var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var nftSchema = new Schema({
  id: Number,
  name: String,
  image: String,
  wallet_address: String,
  likes: Number
});

var nftModel = mongoose.model("nft", nftSchema);

module.exports = nftModel;
