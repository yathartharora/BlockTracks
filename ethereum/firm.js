import web3 from './web3';
import Match from './build/Firms.json';

const instance = new web3.eth.Contract(JSON.parse(Match.interface),'0x218F657cDeDdd279aD90D4e76E2369535056dda8');


export default instance;