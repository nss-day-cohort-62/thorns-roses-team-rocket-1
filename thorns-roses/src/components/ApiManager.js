export const getNurseries =() => {
    return fetch (`http://localhost:8088/nurseries`)
    .then(response => response.json())
}

export const getNurseryFlowers = ({nurseryId}) => {
    return fetch (`http://localhost:8088/nurseryFlowers?_expand=flower&_expand=nursery&nurseryId=${nurseryId}`)
    .then(response => response.json())
}


