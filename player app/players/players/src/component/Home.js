import React, { Component } from 'react'
import {Link} from "react-router-dom"


export default class Home extends Component {
  componentDidMount(){
    alert('Free Version of Atlas is Used due to which fetching speed is less, So kindly wait for 3 to 4 seconds after clicking Next or Prev button.')
  }
  render() {
    return (
    <div className="App center">
      <Link to="/players"><button className='btn btn-success'>Go To Players</button></Link>
    </div>
    )
  }
}
