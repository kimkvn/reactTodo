
var AddNewTask = React.createClass({

  getInitialState: function(){
    return{
      complete: false
    }
  },

  taskClick: function(){
    console.log('success')
  },


  render: function(){
    var createTask = function(item){
      return(

          <div key={item.id}>
            { (4<5) ? console.log("yes") : console.log("no")}
            {item.text}
          </div>

      )
    }
    return(
      <section>
        {this.props.addedTask.map(createTask)}
      </section>
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
    var nextTask = this.state.task.concat([ {text:this.state.text, id:this.state.task.length + 1} ])
    this.setState({
      task: nextTask,
      text: ''
    });
  },

  taskClick: function(){
    console.log('success')
  },

  render: function(){
    return(
      <div>
        <form
        className="text-center"
          onSubmit={this.handleOnSubmit}>
          <input
            className="taskCreate"
            type="text"
            placeholder="Learn React..."
            value = {this.state.text}
            onChange = {this.handleTaskChange}
          />
          <button className="">Add Task</button>
        </form>
        <AddNewTask addedTask = {this.state.task}/>
        <div className="taskCountWrapper">
          <span className="taskCount">{this.state.task.length} Items Remain</span>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <TaskList />,
  document.getElementById('content')
);
