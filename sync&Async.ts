

function first(){
    console.log('first');
    scond();
}

function scond(){
    console.log('second');
    getProductsViaApi();
    third();
}

function third(){
    console.log('third');
}

function getProductsViaApi(){
    // console.log('Fetch Products via API . . . .');
    setTimeout(() => {
        console.log('Fetch Products via API . . . .');
    }, 2000);
}

first()