import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xC51A621BD29830761f0b792Be5bc38ce6B1826f0'
);

export default instance;