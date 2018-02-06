class Sound {
    constructor(context) {
        this.context = context;
    }

    loadSound(url) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('get', url, true);
            request.responseType = 'arraybuffer';
            request.onload = () => {
                if (request.status === 200) {
                    this.context.decodeAudioData(request.response)
                        .then((decodedData) => {
                            // use the decoded data here
                            console.log(decodedData);
                            resolve(decodedData);
                        });
                } else {
                    const error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }

            };

            request.onprogress = (event) => {
                console.log((100 / event.total) * event.loaded );
            };

            request.onerror = () => {
                reject(new Error("Network Error"));
            };

            request.send();
        });
    };
}

export default Sound;