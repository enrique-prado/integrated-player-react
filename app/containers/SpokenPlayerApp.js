var React = require('react');
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import SpokenTheme from '../themes/SpokenTheme';
var MediaPlayBar = require('../components/MediaPlayBar');

    
const appStyles = {
    topnav: {
        height:'20%',
        width:'100%'
    },
    menunav: {
        height:'300px',
        width: '250px',
        float:'left',
    },
    content: {
        width:'700px',
        float:'left'
    }
}



var SpokenPlayerApp = React.createClass({
  //LIFE CYCLE EVENTS 
  
  //Use context to pass down Theme; must be called "muiTheme"
  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },
/*
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(SpokenTheme),
    };
  },  */
  
  propTypes: {
    dataService: React.PropTypes.object.isRequired,
    someCallId: React.PropTypes.string.isRequired
  },
  
  getInitialState: function(){
    console.log('getInitialState CALLED...')
    return { 
        recordingId: "",
        hasImages: false,
        hasTranscription: false,
        currentPos: "",
        showPhraseBlocks:true
    };
  },

  componentDidMount: function() {
    console.log('componentDidMount CALLED...')
      var self = this;

  },
  
  componentDidUpdate: function(prevProps, prevState) {
      console.log("componentDidUpdate CALLED");

      if ((prevState.selectedCustomer !== this.state.selectedCustomer) || (prevState.schedType !== this.state.schedType)) {
        this.populateSchedNavMenu();
      }
      
      if (prevState.selectedMenuEntry !== this.state.selectedMenuEntry)  {
            this.populateHoursTable();
            this.populateExceptionsTable();
      }
  },
  
  // USER DRIVER EVENTS

  
  //UI RENDERING
  render: function() {
    var customer_id = this.state.customer_id;

    return (
      <div className="hrs-section" >
        <div className="topNav" style={appStyles.topnav}>

        </div>  
        <div className="leftNav" style={appStyles.menunav}>

        </div>
        <div className="mainPane" style={appStyles.content}>
            <MediaPlayBar loadedPct={75}/>
        </div>                    
      </div>
    );
  }
});

module.exports = SpokenPlayerApp;