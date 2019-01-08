const loadImage = (url, onImageLoaded, onError) => {
    let img = new Image();
    img.src = url;

    let p = new Promise ((resolve, reject) => {
        img.onload =  resolve(onImageLoaded);
        img.onerror =  reject(onError);
        }
    );
    return p;
};