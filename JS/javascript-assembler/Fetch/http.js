const createHTTPConnection = () => {

    const doFetch = (endpoint, options) => {
        const defaultHeader = {
            accept: "application/json",
            "content-type" : "application/json"
        }
        const controller = new AbortController();
        options.signal = controller.signal;
        options.method = options.method || 'GET';
        options.headers = options.headers ? {...defaultHeader, ...options.headers} : defaultHeader;
        options.body = JSON.stringify(options.body) || false;

        if (!options.body) delete options.body;

        setTimeout(() => controller.abort(), 5000);

        return fetch(endpoint, options).then(response => {
            response.ok ? response.json() : Promise.reject({
                error: true,
                status: response.status || '00',
                statusText: response.statusText || 'Error!'
            }).catch(error => error);
        })
    }

    const get = (url, options = {}) => {
        return doFetch(url, options);
    }
    const post = (url, options = {}) => {
        options.method = 'POST';
        return doFetch(url, options);
    }
    const put = (url, options = {}) => {
        options.method = 'PUT';
        return doFetch(url, options);
    }
    const del = (url, options = {}) => {
        options.method = 'DELETE';
        return doFetch(url, options);
    }

    return { get, post, put, del }
}    