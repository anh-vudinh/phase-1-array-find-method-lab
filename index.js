let x;

function superbowlWin(record){
    x = record.find(({result}) => result === 'W');
    if(x === undefined){
        console.log(x);
        return;
    }else if(x.year === "1969"){
        console.log(x);
        console.log(x.year);
        return x.year;
    }
}



