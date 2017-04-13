'use strict';

app.factory('networkService', ($http) => {
    return {
        get : (url) => {
            return $http.get(url);
        },

        post : (url, data) => {
            return $http.post(url, data)
        },

        delete : (url) => {
            return $http.delete(url)
        },

        update : (url, data) => {
            return $http.update(url, data);
        }
    };
});