import React from 'react';
import {render} from 'react-dom';
import {getDestinyUser,getDestinyMembershipData, getDestinyProfile} from './api';
import express from 'express';

var app = express();

const blizzArray = [];

app.get('/searchUser/:userName', (req, res) => {
  getDestinyUser(req.params.userName, (error, response, body) => {
    let user = JSON.parse(body);

    var blizzNr = 0;
    for(var i=0; i<user.Response.length; i++){
      if(user.Response[i].blizzardDisplayName){
        blizzArray[blizzNr] = user.Response[i];
        blizzNr++;
      }
    }

    getDestinyMembershipData(blizzArray[0].membershipId, -1, (error, response, body) => {
      let membershipData = JSON.parse(body);

      let bigMembershipId = membershipData.Response.destinyMemberships.find(a => a.membershipType === 4).membershipId;

      getDestinyProfile(4, bigMembershipId, (error, response, body) => {
        let profile = JSON.parse(body);
        console.log(profile.Response.profile.data.characterIds);
      });
    });

   
  });
});


app.listen(3000, function(){
  console.log('Server is listening to 3000!')
});