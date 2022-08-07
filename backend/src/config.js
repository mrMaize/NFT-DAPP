require('dotenv').config();
const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Kukuruzza 28th B-Day";
const description = "Each NFT of the collection is the individual and unique invitation to a private b-day party. Go here https://t.me/+1yWTeieWEwJkNTY6 to join the amazing B-Day Party!!!";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background" },
      { name: "Portrait" },
      { name: "Hair" },
      { name: "Glasses" },
      { name: "Tattoo" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 3751,
  height: 3751,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://kukuruzza.netlify.app", // Replace with your website or remove this line if you do not have one.
};

// // NFTPort Info
//
// // ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit

const rarityDelimiter = "#";

module.exports = {
  format,
  baseUri,
  description,
  layerConfigurations,
  rarityDelimiter,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  namePrefix,
  network,
  AUTH,
  LIMIT
};
