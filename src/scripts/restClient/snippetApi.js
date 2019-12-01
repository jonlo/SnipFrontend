import axios from 'axios';
var API_URL = "http://localhost:3000";

const getSnippets = async (from, limit) => {
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

export { getSnippets };