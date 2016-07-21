
var ListItem = React.createClass({
  getInitialState: function(){
    return{
      task: ''
    }
  },

  handleTaskChange: function(text){
    this.setState({
      task: text.target.value
    });

  },

  handleTextCopy: function(){

  },

  render: function(){
    return(
      <div>
        <input
          type="text"
          placeholder="Learn React..."
          value={this.state.task}
          onChange = {this.handleTaskChange}
        />
        <input type="submit"/>
        <textarea
          value="Duplicates go here"
          onChange={this.handleTextCopy}
        />
      </div>
    );
  }
});

ReactDOM.render(
  <ListItem />,
  document.getElementById('content')
);
