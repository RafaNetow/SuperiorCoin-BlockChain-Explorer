const baseUrl = 'http://superior-coin.com:8081/api';

export function searchBlockchain(numberOfBlock) {
   return fetch(`${baseUrl}/block/${numberOfBlock}`);
}


export function InformationOfTransaction(hash) {
   return fetch(`${baseUrl}/transaction/${hash}`, {
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

export function networkInfo() {
    return new Promise(
        function (resolve, reject) {
        let netWorkUrl = `${baseUrl}/networkinfo`;
         fetch(netWorkUrl, {
                Accept: 'application/json'
            }).then(res => res.json())
            .then((networkInfoResponse) => {
                resolve(networkInfoResponse);
            })
      });

}
