export const getNurseries =() => {
    return fetch (`http://localhost:8088/nurseries`)
    .then(response => response.json())
}

export const getNurseryFlowers = ({nurseryId}) => {
    return fetch (`http://localhost:8088/nurseryFlowers?_expand=flower&_expand=nursery&nurseryId=${nurseryId}`)
    .then(response => response.json())
}
export const getNurseryDistributors = ({nurseryId}) => {
    return fetch (`http://localhost:8088/nurseryDistributors?_expand=distributor&nurseryId=${nurseryId}`)
    .then(response => response.json())
}

export const getDistributors = () => {
    return fetch(`http://localhost:8088/nurseryDistributors?_expand=distributor&_expand=nursery`)
    .then(response => response.json())
}