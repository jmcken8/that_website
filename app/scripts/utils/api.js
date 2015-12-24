export default {
    hostname: 'localhost',
    port: 3000,
    apiEndpoint: '/rest',
    secure: false,

    url(apiUrl) {
        return (this.secure ? 'https://' : 'http://') + this.hostname + ':' + this.port + this.apiEndpoint + this.apiUrl;
    },

    urlEncoded(apiUrl) {
        return encodeURI(this.url(apiUrl));
    }
};
