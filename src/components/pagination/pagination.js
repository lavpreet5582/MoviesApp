import React from 'react';
import './pagination.css';
class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let numberofPages = Math.ceil(this.props.totalmovies / 5);
        let paginationButtons = [];
        for (let i = 0; i < numberofPages; i++) {
            paginationButtons.push(<div className="pagination-button"  key={Math.random()} onClick={() => {
                this.props.changePage(i + 1);
            }}>{i + 1}</div>);
        }
        return (
            <div className="pagination">
                {paginationButtons}
            </div>
        )
    }
}


export default Pagination;