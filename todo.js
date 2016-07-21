
var AddedTask = React.createClass({
  getInitialState: function(){
    return{
      new: ''
    }
  },

  render: function(){
    return(
      <div>
        <br />
        <h3>Some cool shit</h3>
      </div>
    )
  }
});

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

  handleAddTask: function(){


  },

  render: function(){
    return(
      <div>
        <input
          type="text"
          placeholder="Learn React..."
          onChange = {this.handleTaskChange}
        />
        <input
          type="submit"
          value="Add To List"
          onClick={this.handleAddTask}
        />
        <h1>{this.state.task}</h1>
        <AddedTask />
      </div>
    );
  }
});

ReactDOM.render(
  <ListItem />,
  document.getElementById('content')
);
