import React, { Component } from 'react';


const questionTitle = {
    textAlign: 'left'
}

const questionText = {
    margin: '100px'
}

class question extends Component {
    render() {
        return (
            <div>
                <h1 style={questionTitle} >{this.props.ques}</h1>
                <p style={questionText}>{this.props.text}</p>
            </div>
        )
    }
}

export default question;