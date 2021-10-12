const business = 450;
const minister = 550;
const army =770;


if( business< minister){
    console.log('Business person er pola');

}
else{
    console.log( 'Minister er pola');
}


if(business>minister && business> army){
    console.log('business is bigger');
}

else if (minister>business && minister> army){
    console.log("minister is bigger");
}
else (army>business && army > minister)
{
    console.log("army is bigger");
}



//easyest way to find the max number 

var max =Math.max(business,minister,army);
console.log('largest is',max);