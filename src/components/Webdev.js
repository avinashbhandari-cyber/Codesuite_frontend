import React from 'react';
import {Link } from "react-router-dom"
import '../style/Coursetemp.css'


export default function Webdev() {
    return (
        <>
            <div className="tabs">
        <Link to="" style={{margin: "1%"}}>
            <div className="tablinks"> <img
                    src="https://i.pinimg.com/originals/da/e0/92/dae092a545e4c09714ee9842ab15dc10.jpg" alt="iconhome"
                    width="30px" height="30px"/> </div>
        </Link>
        <Link to="" style={{margin: "1%"}}>
            <div className="tablinks"> HTML </div>
        </Link>
        <Link to="" style={{margin: "1%"}}>
            <div className="tablinks"> CSS </div>
        </Link>
        <Link to="" style={{margin: "1%"}}>
            <div className="tablinks"> JAVASCRIPT </div>
        </Link>
        <Link to="" style={{margin: "1%"}}>
            <div className="tablinks"> JQUERY </div>
        </Link>
        <Link to="" style={{margin: "1%"}}>
            <div className="tablinks"> PYTHON </div>
        </Link>
        <Link to="" style={{margin: "1%"}}>
            <div className="tablinks"> JAVA </div>
        </Link>
        <Link to="" style={{margin:"1%"}}>      
            <div className="tablinks">
                <select className="form-select" aria-label="Disabled select example">
                    <option selected> REFERENCE </option>
                    <option value="1">  Code With Harry </option>
                    <option value="2"> W3 School </option>
                    <option value="3"> Coursera </option>
                </select>
            </div>
        </Link>
        <Link to="/courses" style={{margin: "1%"}}>
            <div className="tablinks"> COURSES </div>
        </Link>
    </div>

    <div className="course_contain">

        <div className="sidebar">
            <div className="in_sidebar" id="head" style={{textalign:"center",fontvariant:"petite-caps"}}>
                <h3 > Web Development </h3>
            </div>

            <div className="alllinks" style={{overflowy:"scroll",height:"100vh"}}>
                <Link to="#">
                    <div className="links" id="page1" style={{margintop:"7%",height:"29px"}}> What is Roadmap </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page2"> What is HTTP </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page3"> What is HTML </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page4"> What is CSS </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page5"> What is Responsive </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page6"> What is Javascript </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page7"> What is ES5 </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page8"> What is HTML DOM </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page9"> What is Google Fonts </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page10"> What is Google Charts </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page11"> What is XML </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page12"> What is AJAX </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page13"> What is JSON </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page14"> What is CSS Icons </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page15"> What is Bootstrap </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page16"> What is CLI </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page17"> What is npm </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page18"> What is Github </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page19"> What is JQuery </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page20"> What is Angular JS </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page21"> What is React </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page22"> What is Vue.js </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page23"> What is FullStack.js </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page24"> What is SQL </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page24"> What is SQL </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page24"> What is SQL </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page24"> What is SQL </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page24"> What is SQL </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page24"> What is SQL </div>
                </Link>
                <Link to="#">
                    <div className="links" id="page24"> What is SQL </div>
                </Link>
            </div>

        </div>
        <div className="pages" style={{color: "white"}}>

            <div className="course" id="page6" style={{backgroundcolor:"cyan"}}>
                <h1> PAGE 6 </h1>
                {/* <!-- Write your code below  --> */}
            </div>

            <div className="course" id="page5" style={{backgroundcolor:"cyan"}}>
                <h1> PAGE 5 </h1>
                {/* <!-- Write your code below  --> */}
            </div>

            <div className="course" id="page4" style={{backgroundcolor:"violate"}}>
                <h1> PAGE 4 </h1>
                {/* <!-- Write your code below --> */}
            </div>

            {/* <!--  --------------------------------------------------------------------------------------   --> */}
            <div className="course" id="page3" style={{backgroundcolor:"white",color:"black"}}>
                <div className="title" style={{height:"10em",borderbottom:"2px solid grey"}}>
                    <center>
                        <h1> What Is HTML ? </h1>
                    </center> <br/>
                    <Link to=""> <button type="button" className="btn btn-success" style={{float: "left",marginleft:"2%"}}>
                            PREVIOUS </button> </Link>
                    <Link to=""> <button type="button" className="btn btn-success" style={{float: "right",marginright:"2"}}>
                            NEXT </button> </Link>
                </div>

                
            </div>
            {/* <!--  --------------------------------------------------------------------------------------   --> */}

            <div className="course" id="page2" style={{backgroundcolor:"white",color:"black"}}>

                {/* <!-- HEADING  --> */}
                <div className="title" style={{height:"10em",borderbottom:"2px solid grey"}}>
                    <center>
                        <h1> What Is HTTP ? </h1>
                    </center> <br/>
                    <Link to=""> <button type="button" className="btn btn-success" style={{float: "left",marginleft:"2%"}}>
                            PREVIOUS </button> </Link>
                    <Link to=""> <button type="button" className="btn btn-success" style={{float: "right",marginright:"2%"}}>
                            NEXT </button> </Link>
                </div>
                {/* <!-- HEADING  --> */}

                <div className="content">

                    <br/>
                    <b>
                        <h2 style={{margin: "0% 3%"}}> World Wide Web Communication </h2>
                    </b>
                    <br/>
                    <div className="step" id="step1" style={{backgroundcolor:"#3e665f"}}>
                        <br/>
                        <div className="stepboxes" id="box1">

                            <p> The World Wide Web is about communication between web <b> clients </b> and <b> web
                                    servers.</b> </p>

                            <p> <b> Clients </b> are often browsers (Chrome, Edge, Safari), but they can be any type of
                                program or device. </p>

                            <p> <b> Servers </b> are most often computers in the cloud. </p>
                        </div>
                    </div>
                    <div
                        style={{
                height: "44em",
                width: "77%",
                margin: "auto",
                background: "url('https://blog.nus.edu.sg/3217w6/files/2019/03/OverallorganizationoftheWeb.-1no5ruo.jpg') no-repeat 100%"}}>
                    </div>

                    <br/>
                    <b>
                        <h2 style={{margin: "0% 3%"}}> HTTP Request / Response </h2>
                    </b>

                    <div className="step" id="step1" style={{backgroundcolor:"#3e665f"}}>
                        <p style={{margin: "0% 1%",color:"white"}}> Communication between clients and servers is done by <b>
                                requests </b> and <b> responses </b>:</p>
                        <div className="stepboxes" id="box1">

                            <p>1. A client (a browser) sends an HTTP request to the web <br/>
                                2. A web server receives the request <br/>
                                3. The server runs an application to process the request <br/>
                                4. The server returns an HTTP response (output) to the browser <br/>
                                5. The client (the browser) receives the response <br/> </p>
                        </div>
                    </div> <br/>

                    <b>
                        <h2 style={{margin:"0% 3%"}}> The HTTP Request Circle </h2>
                    </b>

                    <div className="step" id="step1" style={{backgroundcolor:"#3e665f"}}>
                        <p style={{margin: "0% 1%",color:"white"}}> A typical HTTP request / response circle: </p>
                        <div className="stepboxes" id="box1">

                            <p>1. The browser requests an HTML page. The server returns an HTML file. <br/>
                                2. The browser requests a style sheet. The server returns a CSS file.
                                <br/>
                                3. The browser requests an JPG image. The server returns a JPG file. <br/>
                                4. The browser requests JavaScript code. The server returns a JS file <br/>
                                5. The browser requests data. The server returns data (in XML or JSON). <br/>
                            </p>
                        </div>
                    </div>

                    <b>
                        <h2 style={{margin: "0% 3%"}}> XHR - XML Http Request </h2>
                    </b>

                    <div className="step" id="step1" style={{backgroundcolor:"#3e665f"}}>
                        <div className="stepboxes" id="box1">

                            <p> All browsers have a built-in <b> XMLHttpRequest Object (XHR) </b>. </p>

                            <p> XHR is a JavaScript object that is used to transfer data between a web browser and a web
                                server. </p>

                            <p> XHR is often used to request and receive data for the purpose of modifying a web page.
                            </p>

                            <p> Despite the XML and Http in the name, XHR is used with other protocols than HTTP, and
                                the data can be of many different types like HTML, CSS, XML, JSON, and plain text.</p>

                            <p>
                                The XHR Object is a Web Developers Dream, because you can:
                            </p>
                            <p>1. Update a web page without reloading the page <br/>
                                2. Request data from a server - after the page has loaded
                                <br/>
                                3. Receive data from a server - after the page has loaded <br/>
                                4. Send data to a server - in the background <br/> <br/>
                                The XHR Object is the underlying concept of <b> AJAX </b> and <b> JSON </b>:
                            </p>
                        </div>
                    </div>
                    <div style={{
                height: "24em",
                width: "56%",
                background: "url('https://www.w3schools.com/whatis/img_ajax.gif') no-repeat 100%"}}>
                    </div>

                    <div className="title" style={{margintop:"5%"}}>
                        <Link to=""> <button type="button" className="btn btn-success" style={{float: "left",marginleft:"2%"}}>
                                HOME </button> </Link>
                        <Link to=""> <button type="button" className="btn btn-success" style={{float: "right",marginright:"2%"}}>
                                NEXT </button> </Link>
                    </div>

                </div>
            </div>

            <div className="course" id="page1" style={{backgroundcolor:"white",color:"black"}}>

                <div className="title" style={{height:"10em",borderbottom:"2px solid grey"}}>
                    <center>
                        <h1 style={{color:"whitesmoke"}}> Web Development Roadmap </h1>
                    </center> <br/>
                    <Link to=""> <button type="button" className="btn btn-success" style={{float: "left",marginleft:"2%"}}>
                            HOME </button> </Link>
                    <Link to=""> <button type="button" className="btn btn-success" style={{float: "right",marginright:"2%"}}>
                            NEXT </button> </Link>
                </div>

                <div className="content">

                    <center>
                        <h1> Front-End Roadmap </h1>
                    </center> <br/>

                    <div className="step" id="step1" style={{backgroundcolor:"#3e665f"}}>
                        <br/>
                        <center>
                            <h1> Step 1 </h1>
                        </center>
                        <center>
                            <h1> Learn the basics </h1>
                        </center> <br/>
                        <div className="stepboxes" id="box1">

                            <p> Every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. </p>

                            <p> Responsive Web Design is used in all types of modern web development. </p>

                            <p> ECMAScript 5 (JavaScript 5) is supported in all modern browsers. Take a good look at it,
                                especially the new array functions.
                            </p>

                        </div>

                        <div className="stepboxes2" id="box2">
                            <h1 style={{borderbottom:"2px solid black"}}> HTML</h1> <br/>
                            <div className="steplinks">
                                <Link to="">
                                    <div id="link1" style={{height:"2em",cursor:"pointer"}}> HTML </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> HTTP/XHR </div>
                                </Link>
                            </div>
                        </div>

                        <div className="stepboxes2" id="box3">

                            <h1 style={{borderbottom:"2px solid black"}}> CSS </h1> <br/>
                            <div className="steplinks">
                                <Link to="">
                                    <div id="link1" style={{height:"2em",cursor:"pointer"}}> CSS </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> CSS RESPONSIVE </div>
                                </Link>
                            </div>

                        </div>
                        <div className="stepboxes2" id="box4">

                            <h1 style={{borderbottom:"2px solid black"}}> JAVASCRIPT </h1> <br/>
                            <div className="steplinks">
                                <Link to="">
                                    <div id="link1" style={{height:"2em",cursor:"pointer"}}> JAVASCRIPT </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> ECMASCRIPT 5 </div>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="step" id="step2" style={{backgroundcolor:"#3e665f"}}>
                        <br/>
                        <center>
                            <h1> Step 2 </h1>
                        </center>
                        <center>
                            <h1> Dig Deeper </h1>
                        </center> <br/>
                        <div className="stepboxes" id="box1">

                            <p> When you feel comfortable with HTML and CSS, it is time to dig deeper. </p>

                            <p> You should learn how to use Maps, Fonts and Icons in HTML. </p>

                            <p> On the JavaScript side, you should learn how to access the HTML DOM</p>

                            <p> You should also learn how to use AJAX and JSON for making server requests.</p>

                        </div>

                        <div className="stepboxes2" id="box2">
                            <h1 style={{borderbottom:"2px solid black"}}> HTML</h1> <br/>
                            <div className="steplinks">
                                <Link to="">
                                    <div id="link1" style={{height:"2em",cursor:"pointer"}}> HTML DOM </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> GOOGLE MAPS </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> GOOGLE FONTS </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> GOOGLE CHARTS </div>
                                </Link>
                            </div>
                        </div>

                        <div className="stepboxes2" id="box3">

                            <h1 style={{borderbottom:"2px solid black"}}> CSS </h1> <br/>
                            <div className="steplinks">
                                <Link to="">
                                    <div id="link1" style={{height:"2em",cursor:"pointer"}}> CSS ICONS </div>
                                </Link>
                            </div>

                        </div>
                        <div className="stepboxes2" id="box4">

                            <h1 style={{borderbottom:"2px solid black"}}> JAVASCRIPT </h1> <br/>
                            <div className="steplinks">
                                <Link to="">
                                    <div id="link1" style={{height:"2em",cursor:"pointer"}}> XML </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> JSON </div>
                                </Link>
                                <Link to="">
                                    <div id="link1" style={{height:"2em",cursor:"pointer"}}> AJAX </div>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="step" id="step3" style={{backgroundcolor:"#3e665f"}} >

                        <br/>
                        <center>
                            <h1> Step 3 </h1>
                        </center>
                        <center>
                            <h1> Choose Frameworks </h1>
                        </center> <br/>
                        <div className="stepboxes" id="box1">

                            <p> Now it is time to look at some Frameworks. </p>

                            <p> On the CSS side you should choose a framework for reponsive web design: <br/>
                                Bootstrap / Material Design / W3.CSS </p>

                            <p> On the JavaScript side you should learn at least one modern framework: <br/>
                                React.js / Angular.js / Vue.js / W3.JS
                            </p>

                            <p> Maybe the popularity of jQuery has passed the top, but it is still the most used
                                JavaScript framework.</p>

                        </div>

                        <div className="stepboxes2" id="box2">
                            <h1 style={{borderbottom:"2px solid black"}}> CSS </h1> <br/>
                            <div className="steplinks">
                                <Link to="">
                                    <div id="link1" style={{height:"2em",cursor:"pointer"}}> BOOTSTRAP </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> EDU.CSS </div>
                                </Link>
                            </div>
                        </div>

                        <div className="stepboxes2" id="box3">

                            <h1 style={{borderbottom:"2px solid black"}}> JAVASCRIPT </h1> <br/>
                            <div className="steplinks">
                                <Link to="">
                                    <div id="link1" style={{height:"2em",cursor:"pointer"}}> jQuery </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> AngularJS </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> Vue.js </div>
                                </Link>
                            </div>

                        </div>
                        <div className="stepboxes2" id="box4">

                            <h1 style={{borderbottom:"2px solid black"}}> XML </h1> <br/>
                            <div className="steplinks">
                                <Link to ="">
                                    <div id="link1" style={{height:"2em",cursor:"pointer"}}> XSLT </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> XPATH </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> XQuery </div>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div style={{
                        height: "74em",
                        width:"96%",
                        margin: "2%",
                        background: "url('https://www.w3schools.com/whatis/img_frontend.jpg') no-repeat 100%"
                    }}>

                    </div>

                    <center>
                        <h1> Back-End Roadmap </h1>
                    </center> <br/>

                    <div className="step" id="step4" style={{backgroundcolor:"#3e665f"}}>
                        <br/>
                        <center>
                            <h1> Step 4 </h1>
                        </center>
                        <center>
                            <h1> Back-End Roadmaps </h1>
                        </center> <br/>

                        <div className="stepboxes2" id="box2" style={{width:"49%"}}>
                            <h1 style={{borderbottom:"2px solid black"}}> FULLSTACK JS </h1> <br/>
                            <div className="steplinks">
                                <Link to="">
                                    <div id="link1" style={{height:"2em",cursor:"pointer"}}> SQL </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> Node.js </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> MySQL </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> Mongo.db </div>
                                </Link>
                            </div>
                        </div>

                        <div className="stepboxes2" id="box3" style={{width:"49%"}}>

                            <h1 style={{borderbottom:"2px solid black"}}> FULLSTACK </h1> <br/>
                            <div className="steplinks">
                                <Link to="">
                                    <div id="link1" style={{height:"2em",cursor:"pointer"}}> SQL </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> PHP </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> PYTHON </div>
                                </Link>
                                <Link to="">
                                    <div id="link2" style={{height:"2em",cursor:"pointer"}}> ASP </div>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div style={{
                            height: "74em",
                            width:"96%",
                            marginright:"10%",
                            background: "url('https://www.w3schools.com/whatis/img_backend.jpg') no-repeat 100%"
                        }}>
                    </div>


                    <div className="title" style={{margintop:"5%"}}>
                        <Link to=""> <button type="button" className="btn btn-success" style={{float: "left",marginleft:"2%"}}>
                                HOME </button> </Link>
                        <Link to=""> <button type="button" className="btn btn-success" style={{float: "right",marginright:"2%"}}>
                                NEXT </button> </Link>
                    </div>
                </div>

            </div>

        </div>

    </div>

    {/* <script>

        const getbut = document.querySelectorAll('.links');
        const getpage = document.querySelectorAll('.course');
        let s = "";

        function myfun(e) {
            //console.log(this.id);

            getpage.forEach(z => z.style.zIndex = "0");

            getpage.forEach(a => {
                s = a.id;
                if (this.id == s) {
                    console.log(a.textContent);
                    a.style.zIndex = "1";
                }
            });

        }

        getbut.forEach(e => e.addEventListener("click", myfun));

    </script> */}
   
    </>
    )
}
