
var ListItem = React.createClass({
  getInitialState: function(){
    return{
      task: ''
    }
  },

  handleTaskChange: function(event){
    this.setState({
      task: event.target.value
    });

  },


  render: function(){
    return(
      <div>
        <input
          type="text"
          placeholder="Learn React..."
          onChange = {this.handleTaskChange}
        />
        <input type="submit"/>
        <h1>{this.state.task}</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <ListItem />,
  document.getElementById('content')
);
