import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from 'react-redux';
import {setMovieList, SET_MOVIE_LIST} from 'redux/actions/movieAction'
import { getListMovieSelector } from "redux/selectors/movieSelector";
class Home extends Component {


  componentDidMount() {
    axios({
      method: "GET",
      url: "http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=12",
    })
      .then((response) => {
      
        this.props.setMovieList(response.data.content.items)
      })
      .catch((errors) => console.log(errors));
  }

  renderListMovie = () =>
    this.props.listMovie.map((movie) => (
      <div className="col-3 card" key={movie.maPhim}>
        <img
          className="card-img-top"
          src={movie.hinhAnh}
          alt={movie.biDanh}
        />
        <div className="card-body">
          <h4 className="card-title">{movie.tenPhim}</h4>
          <p className="card-text text-truncate">{movie.moTa}</p>
          <Link className="btn btn-success" to={`/movie-detail/${movie.maPhim}`}>
            View detail
          </Link>
        </div>
      </div>
    ));

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListMovie()}</div>
      </div>
    );
  }
}

const mapStateToProps = getListMovieSelector

const mapDispatchToProps = (dispatch) => ({
  setMovieList: (listMovie) => dispatch(setMovieList(listMovie))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)