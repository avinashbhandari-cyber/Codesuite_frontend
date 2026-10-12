import './App.css';
import React , { useState } from 'react'
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar';
import Homemid from './components/Homemid';
import Footer from './components/Footer';
import Compiler from './components/Compiler';
import Courses from './components/Courses';
import Webdev from './components/Webdev';
import Practiceques from './components/Practiceques'
import Createques from './components/Createques'
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
import ContestPortal from './components/ContestPortal'
import CreateContest from './components/CreateContest';
import CreateContestQn from './components/CreateContestQn';
import ViewContest from './components/ViewContest';
import ViewContestQn from './components/ViewContestQn';
import ViewPracticeQn from './components/ViewPracticeQn';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [Ques , setQues ] = useState('No Questions available'); 

  return (
    <>
    <Router>
    <ScrollToTop />
    <Navbar/>
      <Switch>  
        <Route exact path="/" component={Homemid} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/compiler" component={Compiler} />
        <Route exact path="/webdev" component={Webdev} />
        <Route exact path="/practiceques" render={(props) => <Practiceques {...props} Ques={Ques} />} />
        <Route exact path="/createques" render={(props) => <Createques {...props} setQues={setQues} />} />
        <Route exact path="/practice/ViewPracticeQn/:id" component={ViewPracticeQn} />
        <Route exact path="/ContestPortal" component={ContestPortal} />
        <Route exact path="/createContest" component={CreateContest} />
        <Route exact path="/createContestQn/:id" component={CreateContestQn} />
        <Route exact path="/contest/ViewContest/:id" component={ViewContest} />
        <Route exact path="/contest/ViewQn/:cid/:qid" component={ViewContestQn} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
