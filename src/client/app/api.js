import request from 'request';
import key from './secret';

const urls = {
    destinyPlayer: 'https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/{membershipType}/{displayName}/',
    destinyProfile: 'https://www.bungie.net/Platform/Destiny2/{membershipType}/Profile/{destinyMembershipId}/'
}

export const getDestinyPlayer = (membershipType, name, callback) => {
    let url = urls.destinyPlayer;
    url = url.replace('{membershipType}', membershipType);
    url = url.replace('{displayName}', name);

    _bungieApiGet(url, callback);
};

export const getDestinyProfile = (membershipType, membershipId, callback) => {
    let url = urls.destinyProfile;
    url = url.replace('{membershipType}', membershipType);
    url = url.replace('{destinyMembershipId}', membershipId);
    console.log(url);
    _bungieApiGet(url, callback);
};

function _bungieApiGet(url, callback){
    let options = {
        url: url,
        headers: {
            'X-API-Key': key
        }
    }
    request(options, callback);
}