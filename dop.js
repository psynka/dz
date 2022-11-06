function one(...args) {
    if (args.length == 0){
        return 1;
    }
    else{
        return args[0](1);
    }
}
function two(...args) {
    if (args.length == 0){
        return 2;
    }
    else{
        return args[0](2);
    }
}
function three(...args) {if (args.length == 0){
    return 3;
}
else{
    return args[0](3);
}   }
function four(...args) {if (args.length == 0){
    return 4;
}
else{
    return args[0](4);
}}
function five(...args) {if (args.length == 0){
    return 5;
}
else{
    return args[0](5);
}}
function six(...args) {if (args.length == 0){
    return 6;
}
else{
    return args[0](6);
}}
function seven(...args) {if (args.length == 0){
    return 7;
}
else{
    return args[0](7);
}}
function eight(...args) {if (args.length == 0){
    return 8;
}
else{
    return args[0](8);
}}
function nine(...args) {if (args.length == 0){
    return 9;
}
else{
    return args[0](9);
}}

function plus(a) {
    return function (b){
        return a+b;
    }
}
function minus(a) {return function (b){
    return b-a;
}}
function times(a) {return function (b){
    return a*b;
}}
function dividedBy(a) {return function (b){
    return (b / a | 0);
}}

function zero(...args)
{
    if (args.length == 0){
        return 0;
    }
    else{
        return args[0](0);
    }
}

console.log(five(dividedBy(two())));