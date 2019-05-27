import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            ip: []
        }
    }

    getIP = () => {
        axios.get(`https://api.ipify.org?format=json`).then(res => {
            this.setState({
                ip: res.data.ip
            })
        }).catch(function (error) {
            window.location.reload()
        });
    }

    render() {
        return (
            <Provider value={{
                getIP: this.getIP,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}