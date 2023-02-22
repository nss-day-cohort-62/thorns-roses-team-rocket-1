export const getNurseries =() => {
    return fetch (`http://localhost:8088/nurseries`)
    .then(response => response.json())
}

export const getNurseryFlowers = () => {
    return fetch (`http://localhost:8088/nurseryFlowers?_expand=flower`)
    .then(response => response.json())
}


