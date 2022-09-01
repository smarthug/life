import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ "paddingBottom": "40px" }}>
          <h4 style={{ "display": "inline" }}>CHUNG <br /> HOSUK</h4>
          <a href='https://github.com/smarthug' style={{ "textDecoration": "none", "margin": "64px", "color": "#84f" }}>github</a>
          <a href='https://www.artstation.com/smarthug' style={{ "textDecoration": "none", "color": "#84f" }}>artstation</a>
        </div>

        <div>
          <h4 style={{ "color": "#ddd" }}>WORKS</h4>
          <Work date={"2022 07 "} name={"Portal"} link={"https://endz-lab.vercel.app/portal"} />
          <Work date={"2022 05 "} name={"TheRoom"} link={"https://endz-lab.vercel.app/TheRoom"} />
          <Work date={"2022 02 "} name={"Boxes"} link={"https://boxes-three.vercel.app/Pysics2DGame"} />
          <Work date={"2022 01 "} name={"KameHouse"} link={"https://endz-lab.vercel.app/KameHouse"} />
          <Work date={"2022 01 "} name={"ENDZ"} link={"https://endz-lab.vercel.app/"} />
          <Work date={"2021 11 "} name={"NRP"} link={"https://www.youtube.com/watch?v=ygOEY0dL73s&t=2362s"} />
          <Work date={"2021 06 "} name={"XR Teleport"} link={"https://github.com/smarthug/teleport"} />
          <Work date={"2020 10 "} name={"Design Express"} link={"https://www.youtube.com/watch?v=PmofaZ2akAo"} />
          <Work date={"2019 03 "} name={"Nexivil"} link={"https://www.nexivil.com/"} />
          <Work date={"2018 11 "} name={"Chrome Extensions"} link={"/chromeext.jpg"} />
          <Work date={"2018 09 "} name={"AR Apps"} link={"/arapps.jpg"} />
          <Work date={"2017 04 "} name={"Perfect Storm"} link={"https://www.perfect-storm.net/services/ar-vr-mr"} />

          <h4 style={{ "color": "#ddd" }}>EDUCATION</h4>
          <Work date={"2022 08 "} name={"react-three-fiber course by Paul Henschel"} link={"https://0xca0a.gumroad.com/l/B4N4N4S"} />
          <Work date={"2022 07 "} name={"The Motion"} link={"https://themotion.co.kr/curriculum/view?idx=74"} />
          <Work date={"2022 06 "} name={"Three Journey"} link={"https://threejs-journey.com/#"} />
          <Work date={"2021 09 "} name={"Just Javascript"} link={"https://justjavascript.com/"} />
          <Work date={"2019 06 "} name={"CS50's Web Programming with Python and JavaScript"} link={"https://justjavascript.com/"} />
          <Work date={"2019 03 "} name={"CS50's Mobile App Development with React Native"} link={"https://justjavascript.com/"} />
        </div>
      </header>
    </div>
  );
}

function Work({ date, name, link }) {

  return (
    <div style={{ "fontSize": "14px", "marginBottom": "8px" }}>
      <span style={{ "color": "#777" }}>{date}</span>
      <span style={{ "color": "#ddd" }}>{name}</span>
      <a href={link} style={{ "textDecoration": "none", "color": "#28f" }}> link</a>
    </div>
  )

}

export default App;
