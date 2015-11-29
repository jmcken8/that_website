import React from 'react';

var a = 2;

export default class Header extends React.Component {
    static displayName: 'Header';

    render() {
        return (
            <div>
                <div>Left</div>
                <div>Button</div>
                <div>Link</div>
            </div>
        );
    }
}
