import React, { Component } from 'react'
import { Star } from './Star'

export class Stars extends Component {
    liRender = (count) => {
        if(count > 0 && count < 6 && typeof(count)==='number') {
            return <>{[...Array(count)].map((e,i) => <Star key={i}/>)}</>
        } 
    }

  render() {
    return (
        <ul className="card-body-stars u-clearfix">
            <li>
                {this.liRender(this.props.count)}
            </li>
        </ul>
    )
  }
}

Stars.defaultProps = {
    count: 0
}


export default Stars