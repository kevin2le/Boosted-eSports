import tokenService from './tokenService';

const BASE_URL = '/api/events/';

function index() {
    return fetch(BASE_URL, {
        method: "GET",
        headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Bad credentials');
    });
};

function create(body) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }),
        body: JSON.stringify(body)
    })
    .then(res => {
        if (res.ok) return res.json();
        throw new Error('Entry Failed');
    })
};

function deleteEvent(id) {
    fetch(BASE_URL + id, {
        method: "DELETE",
        headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
    })
};

export default {
    index,
    create,
    delete: deleteEvent
};