function largestElement(numbers){
    let largest =0;

    for( let i= 0; i < numbers.length; i++){

        const element = numbers[i];
        if ( element > largest){
            largest = element;
        }
    } return largest;
}

const ages = [12,54,50,4440,50,80,90,];
const oldest = largestElement(ages);
console.log('oldest',oldest);