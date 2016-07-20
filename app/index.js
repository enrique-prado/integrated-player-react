console.log('React Spoken Player is up and running!');
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SpokenPlayerApp from './containers/SpokenPlayerApp';
import SpokenPlayerService from '../services/SpokenPlayerService';
//import MockHoursDataService from '../services/mockDataService'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(
    <SpokenPlayerApp dataService={SpokenPlayerService} />,
    document.getElementById('app')
);