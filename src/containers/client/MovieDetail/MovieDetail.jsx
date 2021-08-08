import React, { Component } from 'react'

export default class MovieDetail extends Component {
    // componentDidMount() {
    //     const { params } = this.props.match;
    //     fetchMovieDetail(params.id);
    // }
    render() {
        return (
            <div>
                MovieDetail {this.props.match.params.id}
            </div>
        )
    }
}
