import React from 'react';
import {render} from 'react-dom';
import {getDestinyPlayer} from './api';
import express from 'express';

var app = express();

app.get('/account/:membershipType/:displayName', (req, res) => {
  getDestinyPlayer(req.params.membershipType, req.params.displayName, (error, response, body) => {
    let Account = JSON.parse(body);
    console.log(Account);
  });
});

class App extends React.Component {
  render () {
    return <p> Hello friends!</p>;
  };
};

render(<App/>, document.getElementById('app'));

app.listen(3000, function(){
  console.log('Server is listening to 3000!')
});