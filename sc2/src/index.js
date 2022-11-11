import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/homeStyle.css';
import headerImg from './images/SC2.jpg';

class HomePage extends React.Component{


  constructor(props){
    super(props);

    this.state = {
      data: [],
      dataIsLoaded: false
    };
  }


  getProtossGuide(){
    fetch("https://starcraft-ii.p.rapidapi.com/learning/protoss/page/1/", options)
      .then((res) => res.json())
      .then(response => console.log(response))
      .then((response)=> {
        this.setState({
          data: response,
          dataIsLoaded: true
          }, []);
          // return(`<a href= "${response.value[0].webUrl}"> Heres a helpful guide </a>`)
        })
      }

    paragraphOne(){
      return (
        <div class="center, child, p1">
          <h1> This is a title here</h1>
          This is the first div
          <img src={headerImg} alt="header image" />           
        </div>
      );
    }

    paragraphTwo(){
        return(
          <div class="center, child">
          <h1> This is a title here</h1>
            This is the second div
          </div>
        );
    }

    paragraphThree(){
      return(
        <div class="center, child">
        <h1> This is a title here</h1>
          This is the third div
        </div>
      );

    }

    paragraphFour(){
      return(
        <div class="center, child">
        <h1> This is a title here</h1>
          This is the fourth div
        </div>
      );

    }


    paragraphFive(){
      return(
        <div class="center, child">
          <h1> This is a title here</h1>
            This is the fifth div
            <table class="center">
              <tr>
                <th>
                  <div>
                  Terran
                  </div>
                </th>
                <th>
                  <div>
                  Protoss
                  </div>
                </th>
                <th>
                  <div>
                  Zerg
                  </div>
                </th>
              </tr>
            </table>
            </div>
      );

    }

    render() {
      const{dataIsLoaded, data} = this.state;
      return (
        <div class="center, main">
          {this.paragraphOne()}  
          {this.paragraphTwo()}
          {this.paragraphThree()}
          {this.paragraphFour()}
          {this.paragraphFive()}
          {/* {this.getProtossGuide()} */}
        </div>);
      }


  
  
  }

//export default HomePage;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);
const options = {
  return: {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8ad2018c6amshafa81a681feb275p197c9ejsnd889565de76c',
    'X-RapidAPI-Host': 'starcraft-ii.p.rapidapi.com'
  }
}
}


//==============================================
/*
  <React.StrictMode>
    <div class="center, main">
      <div class="center, child">
      This is some text 
      {this.data[0]}
      </div>
    </div>
  </React.StrictMode>
*/ 
