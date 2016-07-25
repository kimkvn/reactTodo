
var AddNewTask = React.createClass({

  render: function(){
    var createTask = function(item){
      return <li>{item.text}</li>
    }
    return(
      <ul></ul>
    );
  }

});

var TaskList = React.createClass({


  getInitialState: function(){
    return{
      task: [],
    }
  },

  handleTaskChange: function(event){
    this.setState({
      task: event.target.value
    });

  },

  handleOnSubmit: function(event){
    event.preventDefault();

    //push-add-bind the current text into its own div

    //"append" the new div/li to the ListItem
    //clear the text/task item "cache"
    this.setState({
      task: ''
    });
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
        </form>
        <ul>
          <AddNewTask addedTask = {this.state.task}/>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <TaskList />,
  document.getElementById('content')
);
