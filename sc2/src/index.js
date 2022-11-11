import React, { useEffect, useState } from 'react';
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
      .then((json)=> {
        this.setState({
          data: json,
          dataIsLoaded: true
          });
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
            <table class="center, mainDivider">
              <tr class="center">
                <td>
                  <div>
                  Terran
                  </div>
                </td>
                <td>
                  <div>
                  Protoss
                  </div>
                </td>
                <td>
                  <div>
                  Zerg
                  </div>
                </td>
              </tr>
            </table>
            </div>
      );

    }

    apiStuff(){
      this.getProtossGuide()
      const{dataIsLoaded, data} = this.state;
      if (!dataIsLoaded) return(
        <div class="center, child">
            There is no data loaded
        </div>
      );

      return(
        <div>
        <h1> API data fetched in react </h1>
          {
          data.map((item) => (
            <ol key = {item.id} >
              Url: {item.webUrl}
            </ol>
          )
          )
          }
        </div>
      );
    }

    render() {
      return (
        <div class="center, main">
          {this.paragraphOne()}  
          {this.paragraphTwo()}
          {this.paragraphThree()}
          {this.paragraphFour()}
          {this.paragraphFive()}
          {/* {this.apiStuff()} */}
          <Api/>
        </div>);
      }


  
  
  }

//export default HomePage;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<HomePage />);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '80e1fd2c48msh25d4d97a364c2d1p1244e4jsneffbf1adca25',
		'X-RapidAPI-Host': 'starcraft-ii.p.rapidapi.com'
	}
};

//==============================================


function Api(){
  const[ReturnData, StoreData] = useState("");
  useEffect(()=>{
    fetch("https://starcraft-ii.p.rapidapi.com/learning/protoss/page/1/",options)
      .then((res) => res.json())
      .then((response)=> {
        StoreData(response.value[0].originalUrl)
        })
      .catch((err)=> console.error(err))
      })
    return(<div>
      <a href= {ReturnData}> Heres a helpful guide </a>
    </div>);
}