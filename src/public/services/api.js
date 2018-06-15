const baseUrl = 'http://superior-coin.com:8081/api';

export function getNetworkInfo(origin) {
    return axios.get(`${origin || getNode()}/api/networkinfo`);
}

export function getMemPool(limit = 10) {
    return axios.get(`${getNode()}/api/mempool?limit=${limit}`);
}

export function getLatestBlocks() {
    return axios.get(`${getNode()}/api/transactions`);
}

export function searchBlockchain(searchString) {
    return axios.get(`${getNode()}/api/search/${searchString}`);
}

export function pageToBlock(block = 0) {
    return axios.get(`${getNode()}/api/transactions?page=${block}&limit=25`)
}

export function all(requests) {
    return axios.all(requests)
}
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
