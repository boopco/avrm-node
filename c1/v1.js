const tconvert = (t, flag) => {
    switch(flag) {
        case 'c2f':
            return (t* 1.8 +32);
            
        case 'f2c':
            return ((t-32)/1.8);
            
    }
}
console.log