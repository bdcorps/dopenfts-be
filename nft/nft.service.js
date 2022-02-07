const addNFT = (NFT) => (id, name, image, wallet_address, likes) => {
  if (!id || !name || !image || !wallet_address || !likes)
    throw new Error(
      "Missing Data. Please provide values for id, name, image, wallet_address, and likes."
    );
  const NFT = new NFT({ id, name, image, wallet_address, likes });
  return NFT.save();
};

const listNFT = (NFT) => () => {
  return NFT.find({});
};

module.exports = (NFT) => {
  return {
    addNFT: addNFT(NFT),
    listNFT: listNFT(NFT),
  };
};
