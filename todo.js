
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
    event.preventDefault();
    alert(this.state.task)
    //push-add-bind the current text into its own div
    //"append" the new div/li to the ListItem
    //clear the text/task item "cache"
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

          <AddedTask />
        </form>
        <ul>
        <li>
          {this.state.task}
        </li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <ListItem />,
  document.getElementById('content')
);
