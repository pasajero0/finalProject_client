import React, {Component} from 'react';
import './Cork.scss'


class Cork extends Component  {
    render(){
		let style = {
		  background: this.props.background
		};
        return (
           <>
				<div className='corkBlock' style={style}>
					<p className='corkTitle'>{this.props.title}</p>
				</div>
           </>
        )
    }
}

export default Cork;