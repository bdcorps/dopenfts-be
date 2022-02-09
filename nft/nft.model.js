var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var nftSchema = new Schema({
  id: Number,
  name: String,
  image: String,
  wallet_address: String,
  likes: Number,
  shown_to_user: Number,
});

var nftModel = mongoose.model("nft", nftSchema);

module.exports = nftModel;
