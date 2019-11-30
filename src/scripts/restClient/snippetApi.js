import axios from 'axios';

const getSnippets = async (from, limit) => {
   // console.log(localStorage.user);
    let user = JSON.parse(localStorage.user)
    let token = user.token;
    const response = await axios({
        method: 'get',
        url: `http://localhost:3000/snippet`,
        headers: { 'token': token },
        params: {
            from: from,
            limit: limit
        }
    });
    if (response.data.snippets.lenght === 0) {
        throw new Error('No results');
    }

    return {
        snippets: response.data.snippets
    };
}

export { getSnippets };