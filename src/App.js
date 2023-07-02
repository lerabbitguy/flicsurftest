import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = "yo";
  // const likes = 50;
  // const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />

        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ "yo" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={link}>google!!!!!</a> */}
      </div>
    </div>
  );
}

export default App;
