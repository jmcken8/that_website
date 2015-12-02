import React from 'react';
import styles from './Header.scss';

export default class Header extends React.Component {
    static displayName: 'Header';

    render() {
        return (
            <div className={styles.header}>
                <button>Left</button>
                <button>Button</button>
                <button>Link</button>
            </div>
        );
    }
}
