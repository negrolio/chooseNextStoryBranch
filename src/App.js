import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import nodes from './nodes/nodes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CurrentNode />
      </div>
    );
  }
}

class CurrentNode extends Component {

  constructor (props) {
    super(props);
    this.renderButtons = this.renderButtons.bind(this);
    this.getSelectedNode = this.getSelectedNode.bind(this);
    this.onSelectNode = this.onSelectNode.bind(this);

    this.state = {
      currentNode: this.getSelectedNode(1, nodes)
    }
  }

  renderButtons (list) {
    let buttons = list.map((element) => {
      return (
        <button onClick={this.onSelectNode} id={element} key={element}>{element}</button>
      )
    });
    return buttons;
  }

  getSelectedNode (id, nodesList) {
    let current = nodesList.find((obj) => {
      return obj.id === id;
    });
    return current;
  }   

  onSelectNode (clickedButton) {
    let selectedNodeId = parseInt(clickedButton.target.id);
    this.setState({
        currentNode: this.getSelectedNode(selectedNodeId, nodes)
      }
    )
  }

  render () {
    let { currentNode } = this.state;

    return (
      <div>
        {/* <img src={currentNode.currentImg} alt={currentNode.id}/> */}
        <Picture src={currentNode.currentImg} />
        {this.renderButtons(currentNode.options)}
      </div>
    );
  }
}

class Picture extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sourceImg: this.props.src
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      sourceImg: nextProps.src
    })
  }

  render () {
    return (
      <div>
        <img src={this.state.sourceImg} alt='currentImg'/>
      </div>
    )
  }
}

export default App;
