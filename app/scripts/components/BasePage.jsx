import React from 'react';
import Header from './header/Header';
import styles from './Base.scss';

export default class BasePage extends React.Component {
    static displayName = 'BasePage';
    static propTypes = {
        children: React.PropTypes.node
    }

    render() {
        return (
             <div className={styles.wrapper}>
                <Header/>
                <main className={styles.main}>
                    <div> {/*Need a second div for absolute positioning*/}
                        {this.props.children}
                    </div>
                </main>
            </div>
        );
    }
}

