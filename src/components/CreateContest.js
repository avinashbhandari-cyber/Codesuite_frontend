import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Course.css";
import "../App.css";
import AuthService from "../Service/AuthenticationService"
import axios from "axios";
import api from '../api/api.js'

// import { Container, Form }from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'



export default class createContest extends Component {

  constructor(props){
    super(props);
    this.state = {
      email : AuthService.getLoggedInUserName(),
      title : "",
      status  : "",
      about : [],
      };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onAttach = this.onAttach.bind(this);
  }

  handleOnChange(event){
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
    event.preventDefault();
  }

  onSubmit(event){
    event.preventDefault();
    const formData = new FormData()
    formData.append('email', this.state.email)
    formData.append('title', this.state.title)
    formData.append('about', this.state.about)
    formData.append('status', this.state.status)
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };

    return axios.post(`${api}/contest/createContest`, formData, config).then(
      (response) => {
        console.log(response)
        console.log("Contest Created Successfully")
      },(error) => {
        console.log(error)
        console.log("error")
      }
    )

  }

  onAttach(event) {
    const summaryFile = new Blob([document.getElementById('inputSummary').value],    
    {type: 'text/plain;charset=utf-8'});
    let file1 = new File([summaryFile], "summary")
    this.setState({about : file1})
  }

  render() {
    return (
      <>
        <br />
        <br /> <br />
        <div className="questions">
          <div className="editdetails">
            <form onSubmit={this.onSubmit}>
              <label>Email:</label>
              <br />
              <input 
                type="email" 
                id="email" 
                name="email"
                value={this.state.email} 
                onChange={this.handleOnChange}
                defaultValue={this.state.Email}  /> <br/>
              <br />

              <label>Title:</label>
              <br />
              <input 
                type="text" 
                id="title"
                name="title"
                onChange={this.handleOnChange} 
                /> 
                <br /> <br/>

              <label>Status:</label>
              <select 
              type="select"
                id="status"
                name="status"
                onChange={this.handleOnChange}
                 >
                <option value=""></option>
                <option value="Running">Running</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Terminated">Terminated</option>
              </select>{" "}
              <br /> <br/>
              
              <Link to='/practiceques'><button style={{width:"100%"}} id="sub-btn" onClick={this.onSubmit} value="Submit">  Submit </button></Link>
              </form>
          </div>
          <div className="enterquestion">
            <label forName=""> Enter About Your Contest : </label> <br />
            <textarea
              id="inputSummary"
              name="w3review1"
              rows="20"
              cols="70"
              placeholder="Enter Contest Summary Here"
              defaultValue=""
              ></textarea> <br />
              <br/><br/>
              
              <button style={{width:"30%"}} id="sub-btn" onClick={this.onAttach} >  Attach </button>
            
            <br/><br/>
          </div>
        </div>
      </>
    );
  }
}
