export const getNurseries =() => {
    return fetch (`http://localhost:8088/nurseries`)
    .then(response => response.json())
}

export const getNurseryFlowers = (nurseryId) => {
    return fetch (`http://localhost:8088/nurseryFlowers?_expand=flower&_expand=nursery&nurseryId=${nurseryId}`)
    .then(response => response.json())
}
export const getNurseryDistributors = (nurseryId) => {
    return fetch (`http://localhost:8088/nurseryDistributors?_expand=distributor&nurseryId=${nurseryId}`)
    .then(response => response.json())
}

export const getDistributors = () => {
    return fetch(`http://localhost:8088/nurseryDistributors?_expand=distributor&_expand=nursery`)
    .then(response => response.json())
}

export const getRetailers = (distributorId) => {
    return fetch(`http://localhost:8088/retailers?_expand=distributor&distributorId=${distributorId}`)
    .then(response => response.json())
}

export const getRetailersWithDistributor = () => {
    return fetch(`http://localhost:8088/retailers?_expand=distributor`)
    .then(response => response.json())
}

export const getNurseryDistributorsByDistributorId = (distributorId) => {
    return fetch(`http://localhost:8088/nurseryDistributors?distributorId=${distributorId}&_expand=distributor&_expand=nursery`)
    .then(response => response.json())
}


export const getAllNurseryFlowers = () => {
    return fetch(`http://localhost:8088/nurseryFlowers?_expand=flower&_expand=nursery`)
    .then(response => response.json())
}