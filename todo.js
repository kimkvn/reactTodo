
var AddNewTask = React.createClass({

  render: function(){
    var createTask = function(item){
      return(
        <li>
          <input type="checkbox"/>
          {item.text}
        </li>
      )
    }
    return(
      <ul>{this.props.addedTask.map(createTask)}</ul>
    );
  }

});

var TaskList = React.createClass({


  getInitialState: function(){
    return{
      task: [],
      text: ''
    }
  },

  handleTaskChange: function(event){
    this.setState({
      text: event.target.value
    });

  },

  handleOnSubmit: function(event){
    event.preventDefault();

    var nextTask = this.state.task.concat([ {text:this.state.text} ])

    this.setState({
      task: nextTask,
      text: ''
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
            value = {this.state.text}
            onChange = {this.handleTaskChange}
          />
          <button>Add Task</button>
        </form>
        <AddNewTask addedTask = {this.state.task}/>

      </div>
    );
  }
});

ReactDOM.render(
  <TaskList />,
  document.getElementById('content')
);
