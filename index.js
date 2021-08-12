let x;

function superbowlWin(record){
    x = record.find(({result}) => result === 'W');
    if(x === undefined){
        return;
    }else if(x.year === "1969"){
        return x.year;
    }
}



