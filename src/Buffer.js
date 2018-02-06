class Buffer {
    constructor(context) {
        this.context = context;
    }

    loadSound(url) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('get', url, true);
            request.responseType = 'arraybuffer';
            request.onload = () => {
                this.context.decodeAudioData(request.response)
                    .then((decodedData) => {
                        // use the decoded data here
                        console.log(decodedData);
                        resolve(decodedData);
                    });
            };
            request.onprogress = (event) => {
                console.log((100 / event.total) * event.loaded );
            };
            request.send();
        });
    };
}

export default Buffer;