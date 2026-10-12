import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Course.css";
import "../App.css";
import AuthService from "../Service/AuthenticationService"
import axios from "axios";
import api from '../api/api.js'

// import { Container, Form }from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

export default class CreateContestQn extends Component {

  constructor(props){
    super(props);
    this.state = {
      ContestID : localStorage.getItem('Contestid'),
      email : AuthService.getLoggedInUserName(),
      title : "",
      type  : "",
      hints : "",
      relatedTopic : "",
      noOfTestCase : "",
      question : [],
      testcase : [],
      testcaseAns : [],
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
    formData.append('type', this.state.type)
    formData.append('hints', this.state.hints)
    formData.append('relatedTopic', this.state.relatedTopic)
    formData.append('question', this.state.question)
    formData.append('testcase', this.state.testcase)
    formData.append('testcaseAns', this.state.testcaseAns)
    formData.append('noOfTestCase', this.state.noOfTestCase)
    const config = { headers: { 'Content-Type': 'multipart/form-data' } };

    return axios.post(`${api}/contest/${this.state.ContestID}/createQn`, formData, config).then(
      (response) => {
        console.log(response)
        console.log("practice question posted successfully")
      },(error) => {
        console.log(error)
        console.log("error")
      }
    )

  }

  onAttach(event) {
    const questionFile = new Blob([document.getElementById('inputQn').value],    
    {type: 'text/plain;charset=utf-8'});
    let file1 = new File([questionFile], "question")
    this.setState({question : file1})
  
    const testcaseFile = new Blob([document.getElementById('inputTC').value],    
    {type: 'text/plain;charset=utf-8'});
    let file2 = new File([testcaseFile], "testcase")
    this.setState({testcase : file2})
  
    const testcaseAnsFile = new Blob([document.getElementById('inputTCAns').value],    
    {type: 'text/plain;charset=utf-8'});
    let file3 = new File([testcaseAnsFile], "testcaseAns")
    this.setState({testcaseAns : file3})
  
  }

  render() {
    return (
      <>
        <br />
        <br /> <br />
        <div className="questions">
          
        <div>
          <b>CONTEST ID: {this.state.ContestID}</b>
        </div>
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

              <label>Type:</label>
              <select 
              type="select"
                id="type"
                name="type"
                onChange={this.handleOnChange}
                 >
                <option value=""></option>
                <option value="Easy"> Easy </option>
                <option value="Medium"> Medium </option>
                <option value="Hard">Hard</option>
              </select>{" "}
              <br /> <br/>

              <label>Hint:</label>
              <br />
              <input 
                type="text" 
                id="hints"
                name="hints" 
                onChange={this.handleOnChange}
                /> <br /> <br/>

              <label>Related Topics:</label>
              <br />
              <input 
                type="text" 
                id="relatedTopic" 
                name="relatedTopic"
                onChange={this.handleOnChange}
                /> <br /> <br />
              
              <label>No. of TestCases:</label>
              <br />
              <input 
                type="text" 
                id="noOfTestCases" 
                name="noOfTestCases"
                onChange={this.handleOnChange}
                /> <br /> <br /> <br/> 
              {/* <input type="submit" value="Submit" id="sub-btn"/>   <br/> */}
              
              <Link to='/practiceques'><button style={{width:"100%"}} id="sub-btn" onClick={this.onSubmit} value="Submit">  Submit </button></Link>
              </form>
          </div>
          <div className="enterquestion">
            <label forName=""> Enter Question : </label> <br />
            <textarea
              id="inputQn"
              name="w3review1"
              rows="20"
              cols="70"
              placeholder="Enter Questions Here"
              defaultValue=""
              ></textarea> <br />
            <label forName=""> Enter Test Cases  : </label> <br />
            <textarea
              id="inputTC"
              name="w3review2"
              rows="7"
              cols="70"
              placeholder="Enter Test Cases Here"
              defaultValue=""
            ></textarea>{" "}
            <br />
            <label forName=""> Test Cases Answer : </label> <br />
            <textarea
              id="inputTCAns"
              name="w3review3"
              rows="7"
              cols="70"
              placeholder="Enter Test Cases Answer Here"
              defaultValue=""
            ></textarea> <br/><br/>
              
              <button style={{width:"30%"}} id="sub-btn" onClick={this.onAttach} >  Attach </button>
            
            <br/><br/>
          </div>
        </div>
      </>
    );
  }
}
