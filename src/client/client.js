const client = {
    apiPath: 'https://news.itmo.ru/api',

    constructUrl: function (path) {
        return `${this.apiPath}${path}`;
    },

    checkStatus: function (response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            throw error;
        }
    },

    safeFetch: function (url, method, controller, body={}) {

        let options = {
            method: method,
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            signal: controller.signal
        }

        if (method === 'POST') options['body'] = JSON.stringify(body);
        if (method === 'PUT') options['body'] = JSON.stringify(body);

        return fetch(url, options)
            .then(this.checkStatus)
            .then((response) => {
                return response.json();
            });
    },

    aborts: {
        LOAD_NEWS_CONTROLLER: new AbortController()
    },

    loadNews: function() {
        return this.safeFetch(this.constructUrl('/news/list/?ver=2.0&lead=1&per_page=6'), 'GET', this.aborts.LOAD_NEWS_CONTROLLER);
    },

    abortLoadNews: function () {
        this.aborts.LOAD_NEWS_CONTROLLER.abort();
        this.aborts.LOAD_NEWS_CONTROLLER = new AbortController();
    }
}

export default client;