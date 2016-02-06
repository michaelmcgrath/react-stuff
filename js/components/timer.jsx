import React, {Component} from 'react'
import TimeDisplay from './timeDisplay.jsx'


class Timer extends Component{
  constructor (props){
    super(props)
  }

  render() {
    return (
      <div className={'stopWatch'}>
      <TimeDisplay />
      </div>
      )

  }
}

export default Timer
