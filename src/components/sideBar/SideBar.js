import React from 'react';
import SideBarButtons from '../sideBarButtons/SideBarButtons';
import './sidebar.css';
class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="sidebar">
                <SideBarButtons text={"All Genre"} />
                <SideBarButtons text={"Action"} />
                <SideBarButtons text={"Adventure"} />

            </div>
        )
    }
}


export default SideBar;