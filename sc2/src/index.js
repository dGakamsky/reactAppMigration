import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/homeStyle.css';
import headerImg from './images/SC2.jpg';
import terranThumbnail from './images/terranlogo.png';
import protossThumbnail from './images/protosslogo.png';
import zergThumbnail from './images/zerglogo.png';
import wolAudio from './01 Wings Of Liberty.mp3';
import { BrowserRouter, Route, Link } from "react-router-dom";
import test from './pages/index.js';


class HomePage extends React.Component{


  constructor(props){
    super(props);

    this.state = {
      audio: new Audio(wolAudio),
      isPlaying: false,
      data: [],
      dataIsLoaded: false
    };
  }

  router(){
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="test" element={<Test />} />
    </Route>
  </Routes>
  </BrowserRouter>
  }

  playPause = () => {
    let isPlaying = this.state.isPlaying;
    if (isPlaying){
      this.state.audio.pause();
      this.setState({isPlaying: !isPlaying});
    } else {
      this.state.audio.play();
      this.setState({isPlaying: !isPlaying});
    }

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
          <h1><b><i>TSI needs to play Starcraft 2</i></b> </h1>
          <h2>Seriously, theres a valorant and overwatch community but not this?</h2>
          <img src={headerImg} alt="header image" />           
        </div>
      );
    }

    paragraphTwo(){
        return(
          <div class="center, child">
          <h1> Look at how cool it is!</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8L4kNzTNnqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br></br>
            Its even free to play, seriously, whats stopping you?
          </div>
        );
    }

    paragraphThree(){
      return(
        <div class="center, child">
        <h1></h1>
          The music in game is great too!<br></br>
          <button onClick={this.playPause}>play song</button>
        </div>
      );

    }

    paragraphFour(){
      return(
        <div class="center, child">
        <h1> Starcraft 2 is a historic achievement.</h1>
            Starcraft 2 is a true gaming classic, successor to the game which arguably launched Esports and to this day a true landmark of competetive multiplayer games <br></br>
            While the game has a high skill ceiling which allows for significant mastery and all manner of creative plays and approaches to the game the truth is that <br></br>
            the game is approachable to players of all skill levels, with a wide variety of Arcade modes, Campaign, Coop and skill based matchmaking. 
        </div>
      );

    }


    paragraphFive(){
      return(
        <div class="center, child">
          <h1> More on the three races</h1>
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
                  <br></br>
                    Here is a helpful Terran guide! 
                    {this.GuideApi()}
                  </div>
                </td>
                <td>
                  <div>
                  <br></br>
                    Here is a helpful Protoss guide!
                    {this.GuideApi()}
                  </div>
                </td>
                <td>
                  <div>
                  <br></br>
                    Here is a helpful Zerg guide
                    {this.GuideApi()}
                  </div>
                </td>
              </tr>
              <tr>
              <td>
                <li>
                  <Link to ="/"> test</Link>
                </li>
              <a href="protoss.html">Protoss</a></td>
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
  .catch((err) => console.error(err))
},[])



return(
  <div>
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" > {ReturnData} </a>
  </div>
)
}

