import axios from 'axios';

const getSnippets = async (from, limit) => {

    const response = await axios({
        method: 'get',
        url: `http://localhost:3000/snippet`,
        headers: { 'token': localStorage.token },
        params: {
            from: from,
            limit: limit
        }
    });
    if (response.data.Results.lenght === 0) {
        throw new Error('No results');
    }

    const data = response.data.Results[0];
    const address = data.name;
    const latitude = data.lat;
    const longitude = data.lon;
    return {
        address,
        latitude,
        longitude
    };
}

export { getSnippets };