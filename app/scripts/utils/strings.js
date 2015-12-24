export default {
    getJSON(str) {
        try {
            return JSON.parse(str);
        }
        catch(e) {
            return null;
        }
    }
};

