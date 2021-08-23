import React from 'react';
import './navbar.css';
import NavBarButtons from '../navBarButtons/navBarButtons';
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        return (
            <div className="nav-bar">
                <img className="logo" src="https://www.freeiconspng.com/thumbs/movie-icon/movie-icon-6.png" alt="img"></img>
                <NavBarButtons text="Home" />
                <NavBarButtons text="Movies" />
                <NavBarButtons text="About" />
            </div>
        )
    }
}
export default Navbar;