const baseUrl = 'http://superior-coin.com:8081/api';

export function blockForNumber(numberOfBlock) {
   return fetch(`${baseUrl}/block/${numberOfBlock}`);
}


export function InformationOfTransaction(hash) {
   return fetch(`${baseUrl}/transaction/${hash}`, {
            Accept: 'application/json'
        });
    }
export function InformationOfTransaction(hash) {
    return fetch(`${baseUrl}/transaction/${hash}`, {
            Accept: 'application/json'
        });
}

export function Mempool() {
    return fetch(`${baseUrl}/mempool/`, {
            Accept: 'application/json'
        });
}

export function Mempool(limit) {
    return fetch(`${baseUrl}/mempool?limit=${limit}`, {
            Accept: 'application/json'
        });
}

export function SearchForBlockNumberBlockHashOrTxtHash(item) {
    return fetch(`${baseUrl}/search/${item}`, {
            Accept: 'application/json'
        });
}

export function SearchForBlockNumberBlockHashOrTxtHash(item) {
    return fetch(`${baseUrl}/search/${item}`, {
            Accept: 'application/json'
        });
}

export function networkInfo(item) {
    fetch(`${baseUrl}/networkinfo`, {
            Accept: 'application/json'
        });
}
