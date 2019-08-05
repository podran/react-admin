import React, { Component } from 'react'


export class expander extends Component {
    constructor(props){
        super(props);
        this.state= {
            open: false
        }
    }

    clickHnadler(){
        this.setState({
            open: !(this.state.open)
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHnadler.bind(this)}>Expander</button>
                {this.state.open ? <div>{this.props.children}</div> : null}
            </div>
        )
    }
}

export default expander;
