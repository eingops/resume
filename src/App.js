import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import pic from './40325-Portra160.JPG';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <div class="col-md-6 app-left" >
        <img src="eing.JPG" class="img-fluid" height="300px" width="300px" alt="Responsive image"/>
        <label class="txtname">Ornpisa Panasom</label>
        
          <div class="container-fluid">
          <div class="app-title">CONTACT</div>
          <span class="app-content">
          <div class="row">
          <div class="col-sm-1">
          <i class="fa fa-address-book"></i>
          </div>
          <div class="col-sm-10">
          132/38 Rama 6, Samsen Nai, Phaya Thai, Bangkok, 10400 Thailand
          </div>
          </div>
          
          <div class="row">
          <div class="col-sm-1">
          <i class="fa fa-mobile-phone"></i>
          </div>
          <div class="col-sm-10">
              082-4491596
          </div>
          </div>
          
          <div class="row">
          <div class="col-sm-1">
          <i class="fa fa-envelope"></i>
          </div>
          <div class="col-sm-10">
          ornpisa@outlook.com
          </div>
          </div>
          
         
           

          </span>
          </div>


          

          <div class="container-fluid">
          <div class="app-title">PERSONAL INFORMATION</div>
          <span class="app-content">
          Date of birth: July 6, 1995 <br/>
          Age: 23<br/>
          Gender: Female 


          </span>
          </div>



        </div>





        <div class="col-md-6">
        <div class="container-fluid">
        <div class="app-title">Experience</div>
        <span class="app-content">
        06/2018- Present<br/><br/>
OUTSOURCE for PTT Digital (BBS Solution Co.,Ltd.) as  Front-End Developer C#.net and Support (10 months)<br/>
•	use HTML, CSS, Bootstrap and JavaScript to code the website and web app designs created by web designers<br/>
•	Responsive design and change based on the screen size and device someone is using.<br/>
•	Support Sharepoint Online<br/><br/>
01/2018 –05/2018 <br/><br/>
Internship of web developer, PTT Digital <br/>
•	The company provided creating mini project about managing<br/>
•	 personal information, day off and hire contract<br/>
•	Right Examining and creating the site of Share point online<br/>
•	Creating Database and learn more about database<br/>

        </span>
        </div>
        <div class="container-fluid">
          <div class="app-title">Education</div>
          <span class="app-content">
          08/2014-06/2018 <br/><br/>
•	B.S. (Information Technology), Kasetsart University <br/>
•	G.P.A : 3.14<br/><br/>
2011-2013 <br/><br/>
•	Rajinibon school <br/>
•	Program: English-Math<br/>

          </span>
          </div>
        
        
        </div>
       
          
        </div>
      
    );
  }
}

export default App;
