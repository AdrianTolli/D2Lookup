import React from 'react';
import {render} from 'react-dom';
import {getDestinyPlayer, getDestinyProfile} from './api';
import express from 'express';

var app = express();

const membershipID = 4611686018467245213;
const membershipTYPE = 4;

app.get('/account/:membershipType/:displayName', (req, res) => {
  getDestinyPlayer(req.params.membershipType, req.params.displayName, (error, response, body) => {
    let account = JSON.parse(body);
    console.log(account);
    console.log(account.Response[0].membershipId);
    console.log(account.Response[0].membershipType);
    console.log('NYYYYY CAAAAAAALL');
    getDestinyProfile(4, "4611686018467245213", (error, response, body) =>{
      let profile = JSON.parse(body);
      console.log(profile);
    })
  });
});

app.listen(3000, function(){
  console.log('Server is listening to 3000!')
});