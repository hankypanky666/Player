class Buffer {
    constructor(context, urls) {
        this.context = context;
        this.urls = urls;
        this.buffer = [];
    }

    loadSound(url, index) {
        let request = new XMLHttpRequest();
        request.open('get', url, true);
        request.responseType = 'arraybuffer';
        let thisBuffer = this;
        request.onload = function() {
            // context.decodeAudioData(audioData).then((decodedData) => {
            //     // use the decoded data here
            // });
            thisBuffer.context.decodeAudioData(request.response, (buffer) => {
                thisBuffer.buffer[index] = buffer;
                if(index === thisBuffer.urls.length - 1) {
                    thisBuffer.loaded();
                }
            });
        };
        request.send();
    };

    loadAll() {
        this.urls.forEach((url, index) => {
            this.loadSound(url, index);
        })
    }

    loaded() {
        // what happens when all the files are loaded
        console.log('loaded');
    }

    getSoundByIndex(index) {
        return this.buffer[index];
    }
}

export default Buffer;