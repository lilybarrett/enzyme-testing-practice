import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';

$(function() {
  ReactDOM.render(
    <Game />,
    document.getElementById('app')
  );
});
