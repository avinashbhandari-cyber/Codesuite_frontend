const api = process.env.REACT_APP_API_BASE_URL ||
    ((typeof window !== 'undefined' && window.location.hostname)
        ? `http://${window.location.hostname}:8080`
        : 'http://localhost:8080');

export default api;
