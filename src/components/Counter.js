import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: 0
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                time: (this.state.time) + 1
            });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                {this.state.time}
            </div>
        )
    }
}
export default Counter
