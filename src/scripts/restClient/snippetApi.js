import axios from 'axios';
var API_URL = 'http://localhost:3000';//"https://snippetsaver.herokuapp.com";

export const getSnippets = async (from, limit) => {
    // console.log(localStorage.user);
    let user = JSON.parse(localStorage.user)
    let token = user.token;
    const response = await axios({
        method: 'get',
        url: `${API_URL}/snippet`,
        headers: { 'token': token },
        params: {
            from: from,
            limit: limit
        }
    });
    if (response.data.snippets.lenght === 0) {
        throw new Error('No results');
    }

    return response.data;
}

export const addSnippet = async (snippetData) => {

    var urlencoded = new URLSearchParams();
    urlencoded.append("title", snippetData.title);
    urlencoded.append("tags", snippetData.tags);
    urlencoded.append("description", snippetData.description);
    urlencoded.append("extension", snippetData.extension);
    urlencoded.append("filename", snippetData.filename);
    urlencoded.append("code", snippetData.code);
    let user = JSON.parse(localStorage.user)
    let token = user.token;
    const response = await axios({
        method: 'post',
        url: `${API_URL}/snippet`,
        headers: {
            'token': token,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: urlencoded

    });
    return response.data;
}


export const updateSnippet = async (snippetData) => {
    var urlencoded = new URLSearchParams();
    urlencoded.append("title", snippetData.title);
    urlencoded.append("tags", snippetData.tags);
    urlencoded.append("description", snippetData.description);
    urlencoded.append("extension", snippetData.extension);
    urlencoded.append("filename", snippetData.filename);
    urlencoded.append("code", snippetData.code);
    let user = JSON.parse(localStorage.user)
    let token = user.token;
    const response = await axios({
        method: 'put',
        url: `${API_URL}/snippet/${snippetData.id}`,
        headers: {
            'token': token,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: urlencoded

    });
    return response.data;
}


export const deleteSnippet = async (id) => {
    let user = JSON.parse(localStorage.user)
    let token = user.token;
    const response = await axios({
        method: 'delete',
        url: `${API_URL}/snippet/${id}`,
        headers: {
            'token': token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    return response.data;
}