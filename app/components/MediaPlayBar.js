/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
var React = require('react');
var LinearProgress = require('material-ui/lib/linear-progress');
//import Colors from 'material-ui/lib/styles/colors';
var moment = require('moment');

var MediaPlayBar = React.createClass({
  propTypes: {
    loadedPct: React.PropTypes.number
  },  
    
  render: function() {
    return (
    <div>
        <LinearProgress mode="determinate" value={this.props.loadedPct} />
    </div>
    );
  }
});

module.exports = MediaPlayBar;