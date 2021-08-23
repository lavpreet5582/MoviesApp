import './App.css';
import React from 'react';
// import SideBar from './components/sideBar/SideBar';
// import MoviesList from './containers/moviesList/moviesList';
import Navigator from './navigator';
class App extends React.Component {
  render(){
    return (
    <div className="App">
       <Navigator/>
    </div>
  );
}
}


export default App;

