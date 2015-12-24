import React from 'react';

export default class LoginView extends React.Component {
    static displayName = 'LoginView';
    render() {
        return (
            <form>
                <span>Username: <input type='text' required/></span>
                <span>Password: <input type='password' required/></span>
                <input type='submit' value='Submit'/>
            </form>
        );
    }
}
