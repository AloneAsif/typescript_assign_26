// Question no 27 Alien Colors #3   if-else chain

let aline_color: string[] = ['green','yellow','red'];
let score: number;
let userShot: string = 'red';

if(userShot == aline_color[0]){
    score = 5;
    console.log(`player earns ${score} points.`)
}
else if(userShot == aline_color[1]){
    score = 10;
    console.log(`player earns ${score} points`)
}
else if(userShot == aline_color[2]){
    score = 15;
    console.log(`player earns ${score} points`)
}
else{
    console.log('please enter correct color of alien.')
}
