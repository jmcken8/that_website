import React from 'react';
import Header from './header/Header';

export default class BasePage extends React.Component {
    static displayName = 'BasePage';
    static propTypes = {
        children: React.PropTypes.renderable
    }

    render() {
        return (
            <div>
                <Header/>
                Basicly
                {this.props.children}
            </div>
        );
    }
}

