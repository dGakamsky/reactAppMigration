import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/homeStyle.css';
import headerImg from './images/SC2.jpg';
import terranThumbnail from './images/terranlogo.png';
import protossThumbnail from './images/protosslogo.png';
import zergThumbnail from './images/zerglogo.png';

class HomePage extends React.Component{


  constructor(props){
    super(props);

    this.state = {
      data: [],
      dataIsLoaded: false
    };
  }

  
  GuideApi(race){

    return (
      <div class="center, child">
       <Api/> 
      </div>
    )
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8L4kNzTNnqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br></br>
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
            <div></div>
            <table class="center, mainDivider">
              <tr class="center">
                <td>
                  <div class="thumb">
                  <img src={terranThumbnail} alt="header image" />
                  <br></br>
                  Terran
                  </div>
                </td>
                <td>
                  <div class="thumb">
                  <img src={protossThumbnail} alt="header image" />
                  <br></br>
                  Protoss
                  </div>
                </td>
                <td>
                  <div class="thumb">
                  <img src={zergThumbnail} alt="header image" />
                  <br></br>
                  Zerg
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    Here is a helpful Terran guide! 
                    {this.GuideApi()}
                  </div>
                </td>
                <td>
                  <div>
                    Here is a helpful Protoss guide!
                    {this.GuideApi()}
                  </div>
                </td>
                <td>
                  <div>
                    Here is a helpful Zerg guide
                    
                    {this.GuideApi()}
                  </div>
                </td>
              </tr>
              <tr>
              <td><a href="protoss.html">Protoss</a></td>
              <td><a href="terran.html">Terran</a> </td>
              <td><a href="zerg.html">Zerg</a> </td>
              </tr>
            </table>
            </div>
      );

    }


// render controller 
//=========================================================================================
    render() {
      return (
        <div class="center, main">
          {this.paragraphOne()}  
          {this.paragraphTwo()}
          {this.paragraphThree()}
          {this.paragraphFour()}
          {this.paragraphFive()}
        </div>);
      }  
  }

//==========================================================================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);

/*
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '80e1fd2c48msh25d4d97a364c2d1p1244e4jsneffbf1adca25',
		'X-RapidAPI-Host': 'starcraft-ii.p.rapidapi.com'
	}
};

function Api(race){
  const raceToGet = race;
  const[ReturnData, StoreData] = useState("");
  console.error(raceToGet)
  useEffect(()=>{
    fetch(`https://starcraft-ii.p.rapidapi.com/learning/${raceToGet}/page/1/`,options)
      .then((res) => res.json())
      .then((response)=> {
        StoreData(response.value[0])
        })
      .catch((err)=> console.error(err))
      })
    return(
    <div>
      <a href= {ReturnData.originalUrl}> Heres a helpful guide: {ReturnData.title} </a>
    </div>);
}
*/

function Api(){
const[ReturnData, StoreData] = useState("");
useEffect(()=>{
  fetch("https://api.kanye.rest")
  .then(res => res.json())
  .then(quote => {
      StoreData(quote.quote)
  })
},[])

return(
  <div>
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" > {ReturnData} </a>
  </div>
)
}

