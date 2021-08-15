import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import movieApi from 'apis/movieApi';
import { actFetchAllMovie } from '../module/actions';
class MovieList extends Component {
  componentDidMount() {
    movieApi
      .fecthAllMovieApi()
      .then(response => {
        this.props.fetchAllMovie(response.data.content);
      })
      .catch(errors => console.log(errors));
  }

  renderListMovie = () =>
    this.props.listMovie.map(movie => (
      <div className="col-3 card" key={movie.maPhim}>
        <img className="card-img-top" src={movie.hinhAnh} alt={movie.biDanh} />
        <div className="card-body">
          <h4 className="card-title">{movie.tenPhim}</h4>
          <p className="card-text text-truncate">{movie.moTa}</p>
          <Link
            className="btn btn-success"
            to={`/movie-detail/${movie.maPhim}`}
          >
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

const mapStateToProps = state => ({
  listMovie: state.movieReducer.listMovie,
});

const mapDispatchToProps = dispatch => ({
  fetchAllMovie: listMovie => dispatch(actFetchAllMovie(listMovie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
