import api from '../utils/api';
import strings from '../utils/strings';

export default {
    authToken: undefined,
    getLoginToken(opts) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', api.urlEncoded('/users/login'));
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if(xhr.status === 200) {
                let val = strings.getJSON(xhr.responseText);
                if(strings.isJson(xhr.responseText)) {
                    this.authToken = val.id;
                    if(opts.success) {
                        opts.success();
                    }
                }
            }
            if(opts.failure) {
                opts.failure();
            }
        };
        xhr.send(opts.username, opts.password);
    },

    isLoggedIn() {
        return this.authToken !== undefined;
    }
};
