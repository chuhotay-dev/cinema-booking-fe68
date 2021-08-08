import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3 card">
            <img
              className="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/vi/e/e0/Iron_Man_bleeding_edge.jpg"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
              <Link className="btn btn-success" to="/movie-detail/1">
                View detail
              </Link>
            </div>
          </div>
          <div className="col-3 card">
            <img
              className="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/vi/e/e0/Iron_Man_bleeding_edge.jpg"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
              <Link className="btn btn-success" to="/movie-detail/2">
                View detail
              </Link>
            </div>
          </div>
          <div className="col-3 card">
            <img
              className="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/vi/e/e0/Iron_Man_bleeding_edge.jpg"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
              <Link className="btn btn-success" to="/movie-detail/3">
                View detail
              </Link>
            </div>
          </div>
          <div className="col-3 card">
            <img
              className="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/vi/e/e0/Iron_Man_bleeding_edge.jpg"
              alt
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
              <Link className="btn btn-success" to="/movie-detail/4">
                View detail
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
