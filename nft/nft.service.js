const addNFT =
  (NFT) => (id, name, image, wallet_address, likes, shown_to_user) => {
    if (!id || !name || !image || !wallet_address || !likes || !shown_to_user)
      throw new Error(
        "Missing Data. Please provide values for id, name, image, wallet_address, and likes."
      );

    const NFT = new NFT({
      id,
      name,
      image,
      wallet_address,
      likes,
      shown_to_user,
    });

    return NFT.save();
  };

  
const listNFT = (NFT) => () => {
  return NFT.find({});
};

const randomNFT = (NFT) => async () => {
  const count = await NFT.countDocuments();

  let random = Math.floor(Math.random() * count);

  return NFT.findOne().skip(random);
};

module.exports = (NFT) => {
  return {
    addNFT: addNFT(NFT),
    randomNFT: randomNFT(NFT),
    listNFT: listNFT(NFT),
  };
};
