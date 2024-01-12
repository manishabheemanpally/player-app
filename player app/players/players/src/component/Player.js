import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'
export default class Player extends Component {
  constructor(){
    super()
    this.state={
      id:1,
      data:[]
    }
  }
  componentDidMount(){
    this.fetch()
  }
  fetch = ()=>{
    axios.get(`https://santoplayers.onrender.com/players_data/${this.state.id}`)
    .then(res=>{
      this.setState({
        data:[res.data[0]]
      },()=>{
        console.log(this.state.data);
      })
    })
    .catch(err=>{
    console.log(err)
    })
  }
  next=()=>{
    if(this.state.id<7){
      this.setState({
        id:this.state.id + 1
      },()=>{
        this.fetch()
      })
      console.log("next");
    }
    else{
      alert("No Further data Available")
    }
  }
  prev=()=>{
    if(this.state.id>1){
      this.setState({
        id: this.state.id -1
      },()=>{
        this.fetch()
      })
    }
    else{
      alert("This is the first data")
    }
  }
  render() {
    return (
      <div className='text-center pt-5'>
        <div className="center">
        {this.state.data? this.state.data.map(res=>(
          <div className="card" style={{width: "18rem"}}>
          <img src={res.url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{res.name}</h5>
            <p className="card-text">{res.country}</p>
            <p className="card-text">{res.role}</p>
            <p className="card-text">{res.ipl}</p>
          </div>
        </div>
        )):
        alert("No data ")
        
      }
      </div>
      <button className="btn btn-warning m-4" onClick={()=>this.prev()}>Previous</button>
      <button className="btn btn-warning m-4" onClick={()=>this.next()}>Next</button>
      </div>
    )
  }
}

