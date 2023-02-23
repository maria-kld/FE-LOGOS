function maxValue() {
    let m = arguments[0];


    for (let i = 0; i < arguments.length; i++ ) {
        if(arguments[i] > m ) {
            m = arguments[i];
        }
        console.log(arguments[i]);
    }
    console.log('max:', m);
}

maxValue(0, 5, 6);