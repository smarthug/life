import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ "marginBottom": "40px" }}>
          <h4 style={{ "display": "inline" }}>CHUNG <br /> HOSUK</h4>
          <a href='/' style={{ "textDecoration": "none", "margin": "64px", "color": "#84f" }}>github</a>
          <a href='/' style={{ "textDecoration": "none", "color": "#84f" }}>artstation</a>
        </div>

        <div>
          <h4 style={{ "color": "#ddd" }}>WORKS</h4>
          <Work date={"2021 01 "} name={"Design Express"} link={"/"} />
        </div>
      </header>
    </div>
  );
}

function Work({ date, name, link }) {

  return (
    <div style={{ "fontSize": "14px" }}>
      <span style={{ "color": "#777" }}>{date}</span>
      <span style={{ "color": "#ddd" }}>{name}</span>
      <a href={link} style={{ "textDecoration": "none", "color": "#28f" }}> link</a>
    </div>
  )

}

export default App;
