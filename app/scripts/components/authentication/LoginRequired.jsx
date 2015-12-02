import React from 'react';
import Router from 'react-router';


export default class LoginRequired extends React.Component {
    static displayName = 'LoginRequired';
    static propTypes = {
        children: React.PropTypes.node
    };
    render() {
        return this.props.children;
    }
}
