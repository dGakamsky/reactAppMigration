import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/homeStyle.css';

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
      .then(alert("test1"))
      .then(response => console.log(response))
      .then((json)=> {
        alert(json)
        this.setState({
          data: json,
          dataIsLoaded: true
          }, []);
          /*return(`<a href= "${response.value[0].webUrl}"> Heres a helpful guide </a>`)*/
        })
      }

    render() {
      const{dataIsLoaded, data} = this.state;
      return (
        <div class="center, main">
          <div class="center, child">
          <h1> This is a title here</h1>
            This is the first div
          </div>
          <div class="center, child">
          <h1> This is a title here</h1>
            This is the second div
          </div>
          <div class="center, child">
          <h1> This is a title here</h1>
            This is the third div
          </div>
          <div class="center, child">
          <h1> This is a title here</h1>
            This is the fourth div
          </div>
          <div class="center, child">
          <h1> This is a title here</h1>
            This is the fifth div
            <table class="center">
              <tr>
                <th>
                  Terran
                </th>
                <th>
                  Protoss
                </th>
                <th>
                  Zerg
                </th>
              </tr>
            </table>
          </div>





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
