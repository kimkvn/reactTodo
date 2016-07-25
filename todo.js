
var data = [
  {
    taskDescrip: "",
  }
];


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

  handleOnSubmit: function(event){
    alert('penis')
  },

  render: function(){
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            className="taskCreate"
            type="text"
            placeholder="Learn React..."
            onChange = {this.handleTaskChange}
          />
          <button>Add Task</button>
          <h1>{this.state.task}</h1>

          <AddedTask />
        </form>
      </div>
    );
  }
});

ReactDOM.render(
  <ListItem />,
  document.getElementById('content')
);
