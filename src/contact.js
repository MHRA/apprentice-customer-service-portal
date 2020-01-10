import React, { Component } from "react";
import './App.css'


const ShowContactInfo = props => {
    return <button className='button' onClick={props.showContact}>Show Contact Info</button>
}
const HideContactInfo = props => {
    return <button className='button' onClick={props.hideContact}>Hide Contact Info</button>
}
const Contact = props => {
    return (
        <div className='showContactText'>
            <h3 className='eStyle'>phone:</h3><h3 className='eStyle'>0708189498</h3>
            <h1 className='eStyle'>Email:</h1><a className='estyle' href="mailto:james.dodd@mhra.gov.uk">james.dodd@mhra.gov.uk</a>
        </div>
    )
}


class ToggleBox extends Component {

    constructor(props) {
        super(props);
        this.state = { isEmptyState: true }
    }

    triggerShowContactInfo = () => {
        this.setState({
            ...this.state,
            isEmptyState: false,
            isShowContactInfo: true
        })
    }

    triggerHideContactInfo = () => {
        this.setState({
            ...this.state,
            isEmptyState: true,
            isShowContactInfo: false
        })
    }

    render() {
        return (
            <div>
                {this.state.isEmptyState && <ShowContactInfo showContact={this.triggerShowContactInfo} />}
                {this.state.isShowContactInfo && <HideContactInfo hideContact={this.triggerHideContactInfo} />}
                {this.state.isShowContactInfo && <Contact />}
            </div>
        )
    }
}

export default ToggleBox;
