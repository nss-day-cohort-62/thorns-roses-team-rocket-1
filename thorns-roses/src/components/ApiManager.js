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
export const getRegister = (customer) => {
    return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
    }
    export const findEmail = (customer) => {
        return fetch(`http://localhost:8088/customers?email=${customer.email}`)
                .then(res => res.json())
    }
    export const getLogin = (email, password) => {
        return fetch(`http://localhost:8088/customers?email=${email}&password=${password}`)
                .then(res => res.json())
    }
    export const AddNewPurchase = (PurchaseToSendToApi) => {
        return fetch("http://localhost:8088/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(PurchaseToSendToApi)
            })
                .then(res => res.json())
        }