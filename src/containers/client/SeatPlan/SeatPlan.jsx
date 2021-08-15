import React, { Component } from 'react'

export default class SeatPlan extends Component {
    render() {
        return (
            <div>
                SeatPlan {this.props.match.params.id}
            </div>
        )
    }
}
