import React from 'react';
import './moviesList.css';
import Navbar from '../../components/navBar/navbar';
import SideBar from '../../components/sideBar/SideBar';
import Pagination from '../../components/pagination/pagination';
import MoviesTable from '../../components/moviesTable/moviesTable';
// import axios from 'axios';
import Loader from '../../components/loader/loader';
import { HandleGetMovies } from './movieservice';
import { connect } from 'react-redux';
class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            pageNumber: 1,
            rating: "all",
            data: [],
            loader:true
        };
    }
    async componentDidMount() {
        let data = await HandleGetMovies();
        // data = JSON.parse(data);
        // console.log(res.data);    
        this.setState({
            data: data,
            loader:false
        });


    }
    changeSearch = (e) => {
        this.setState({
            pageNumber: 1,
            search: e.target.value
        });
    }
    changePage = (pageNumber) => {
        this.setState({
            pageNumber: pageNumber
        });
    }
    changerating = (e) => {

        this.setState({
            pageNumber:1,
            "rating": e.target.value === "all" ? "all" : parseInt(e.target.value)
        })
    }

    render() {
        let data = this.state.data;

        let filteredData = data.filter((movie) => {
            if(this.state.rating !== "all") {
                return movie.rating === this.state.rating;
            }
            return true;
        })
        filteredData = filteredData.filter((movie) => {
            let movieName = movie.name.toLowerCase();
            let search = this.state.search.toLowerCase();
            return movieName.includes(search);
        });

        let finalData = [];

        for (let i = (this.state.pageNumber - 1) * 5; i < (this.state.pageNumber * 5) && i < filteredData.length; i++) {
            finalData.push(filteredData[i]);
        }

        return (
            <div className="main-container">
                {this.state.loader?<Loader/>:""}
                <Navbar />
                <SideBar />
                <div className="movies-table-container">
                    <div className="filter">
                        <input value={this.state.search} placeholder="Search for Movies" className="movie-search" type="text" onChange={this.changeSearch} />

                        <select className="rating-dropdown" name="rating" onChange={this.changerating}>
                            <option value={"all"}>All rating</option>
                            <option value={0}>0 rating</option>
                            <option value={1}>1 rating</option>
                            <option value={2}>2 rating</option>
                            <option value={3}>3 rating</option>
                            <option value={4}>4 rating</option>
                            <option value={5}>5 rating</option>
                        </select>
                    </div>

                    <MoviesTable data={finalData} />
                    <Pagination totalmovies={filteredData.length} changePage={this.changePage} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapActionToProps = dispatch => {
    return {
        updateMovies: (data) => dispatch({type: "updateMovies", data: data})
    }
}

export default connect(mapStateToProps,mapActionToProps)(MoviesList);