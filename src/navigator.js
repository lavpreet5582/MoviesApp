import { Component } from "react";
import { Switch, Route, BrowserRouter} from "react-router-dom";
// import Navbar from "./components/navBar/navbar";
// import SideBar from "./components/sideBar/SideBar";
import moviesList from "./containers/moviesList/moviesList";

class Navigator extends Component {
    render() {
        return(
            <BrowserRouter>
            <Switch>
                <Route path="/" component={moviesList}></Route>
            </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigator;