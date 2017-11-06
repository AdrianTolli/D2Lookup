import request from 'request';
import key from './secret';

const urls = {
    destinyPlayer: 'https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/{membershipType}/{displayName}/'
}

export const getDestinyPlayer = (membershipType, name, callback) => {
    let url = urls.destinyPlayer;
    url = url.replace('{membershipType}', membershipType);
    url = url.replace('{displayName', name);

    _bungieApiGet(url, callback);
}

function _bungieApiGet(url, callback){
    let options = {
        url: url,
        headers: {
            'X-API-Key': key
        }
    }
    request(options, callback);
}