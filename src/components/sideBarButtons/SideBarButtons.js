import React from 'react';
import './SideBarButtons.css';
class SideBarButtons extends React.Component {
        constructor(props){
            super(props);
            this.state = {};
        }
        
        render() {
            return( 
                <div className = "sidebar-buttons">
                    {this.props.text} 
                </div>
            )
        }
}


export default SideBarButtons;