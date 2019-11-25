const axios = require('axios');

const getUsers = async (from, limit) => {

  /*  const response = await axios({
        method: 'get',
        url: `${API_URL}/user`,
        headers: { 'token': 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImRiMDJhYjMwZTBiNzViOGVjZDRmODE2YmI5ZTE5NzhmNjI4NDk4OTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMjE5MDMwMjQ0NjQtN3I4bThiNDY1OWgyZWpjajUyM2FxZzFpb2cwNHNhamMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyMTkwMzAyNDQ2NC03cjhtOGI0NjU5aDJlamNqNTIzYXFnMWlvZzA0c2FqYy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjEzOTAwMzg0NzY2NDA0NjM5MyIsImVtYWlsIjoiam9uLmxkZzg1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoidzhwWkZwbURGc2poT2FqdVZwNEZxZyIsIm5hbWUiOiJKb24gTG9wZXogZGUgR3VlcmXDsWEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDQuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1QRzkyQUNwYmM3Zy9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BQ0hpM3JlRWhDNDZfWWNXWVJ3UEs0N2dJaWhvY2pqVXBRL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJKb24iLCJmYW1pbHlfbmFtZSI6IkxvcGV6IGRlIEd1ZXJlw7FhIiwibG9jYWxlIjoiZXMiLCJpYXQiOjE1NzQ2MTk1NzcsImV4cCI6MTU3NDYyMzE3NywianRpIjoiZGRlYmRhOWY3MzQ1N2FjZTlkMTA5NTgxOThhNTA3NDY3M2RlNmE4YiJ9.OTLm9iA8B0bqOLt98_miJ4syPMTcRj6m8Ti2CGdIL1R0XLKLZx5hZ-3lQJNw5pejyjR_ZEVD9r6XQwnqGYHYbF4fHpsw6IhXSnPHp5w3DdE-cVLJbFw1KKbRSyEnL_937SejS-g6zRSO1yeMmcEmWvVpuWbfPUBezt15OGSQhyB1aIaGdrH1n3FZVCa3VnjeaVmk7LNp7LzrqTEPEUgkkB7xHTbdGQuBfK2MQYnTob3sVmsv5LS0gi5CR_gb6yZhEd8AhXSfToN5DC-w1Et9qPbmJfVC9XLVes8iE6QFS8zR21v81mImBKkhJ1rfzO6wwRaFlowuP9xTevwlC7WNJQ' },
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
    };*/
}

module.exports = { getUsers };