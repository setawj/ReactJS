import React from 'react';

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            now : (new Date())
        }
        setInterval(e => {
            this.setState({ now : (new Date()) })
        }, 1000)
    }
      render() {
          const now = this.state.now
          const hh = this.fmt(now.getHours())
          const mm = this.fmt(now.getMinutes())
          const ss = this.fmt(now.getSeconds())
          const style = {
              position : 'absolute',
              left : '50%',
              top : '50%',
              width : '100px',
              height : '100px',
              transform : 'translate(-50%, -50%)',
              border : '2px solid #888',
              borderRadius : '100%',
              color : 'red',
              fontSize : '18px',
              lineHeight : '100px',
              textAlign : 'center'
      }
    return (
      <div style={style}>
          {hh}:{mm}:{ss}
      </div>
    )
  }
  fmt (v) {
        const s = '00' + v
      return s.substr(s.length - 2, 2)
  }
}

export default App;
