import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
          <Header title={this.props.headerTitle} />
          <Content title={this.props.contentTitle} />
      </div>
    );
  }
}

class Header extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>Hey!</p>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle : 'Hello World!!',
    contentTitle : 'Default contentTitle'
};

export default App;
