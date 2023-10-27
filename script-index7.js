// No. 1
var s = ''
for (var i = 0; i < 5; i++) {
    s = s + '*';
}
console.log(s);

// No. 2
var s = ''
for (var i = 0; i < 5; i++) {
    s += '*';
    s += '\n';
}
console.log(s);

// No. 3
var s = ''
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

// No. 4
var s = ''
for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

// No. 5
var s = ''
for (var i = 5; i >= 0 ; i--) {
    for (var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

// No. 6
var s = '';
for (var i = 0; i < 9; i++){
    if (i < 5) {
        for (var j = 0; j <= i; j++) {
            s += '*';
        }
    } else {
        for (var x = 9; x > i; x--) {
            s += '*';
        }
    }
    s += '\n'
}
console.log(s);

// No. 7