import React from 'react';
import './moviesTableRow.css';
import Rating from '../rating/rating';
class MoviesTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let data = this.props.data;
        let counter = this.props.counter
        
        return (
            <div className="movies-table-row" style={this.props.header ? { fontWeight: "bold" } : {}}>
                <div className="column serial-number">{this.props.header ?"S.No.":counter }</div>
                <div className="column movie-name">{this.props.header ?"Title":data.title}</div>
                <div className="column genre">{this.props.header ?"Genre":data.genre}</div>
                <div className="column rating">{this.props.header?"Rating":<Rating rating = {data.rating} />}</div>
            </div>
        )
    }
}


export default MoviesTableRow;