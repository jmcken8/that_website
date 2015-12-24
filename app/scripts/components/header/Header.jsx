import React from 'react';
import styles from './Header.scss';
import { Link } from 'react-router';

export default class Header extends React.Component {
    static displayName: 'Header';

    render() {
        return (
            <div className={styles.header}>
                <Link to='/'><button>Home</button></Link>
                <Link to='/pages'><button>Pages</button></Link>
                <Link to='/login'><button>Login</button></Link>
            </div>
        );
    }
}
