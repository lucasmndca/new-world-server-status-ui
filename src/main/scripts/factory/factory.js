async function getServers() {
    let res = await fetch('https://new-world-server-status.p.rapidapi.com/servers', {
        headers: new Headers({
            'x-rapidapi-host': 'new-world-server-status.p.rapidapi.com',
            'x-rapidapi-key': ''
        })
    })
    return await res.json()
}

function rapidApiFactory() {
    return { getServers }
}

app.factory('rapidApi', rapidApiFactory)