a = [1, 5, 345, 78, 99, 5558, 3, 7, 823]

let mx = Math.max(a[0], a[1])
let secondmax = Math.min(a[0], a[1])


for (let i=2; i<a.length; i++) {
    if(a[i] > mx) {
        secondmax = mx
        mx = a[i]
    }
    else if (a[i] > secondmax && mx !== a[i]) {
        secondmax =a[i]
    }
}


console.log(secondmax)

// time complexity is O(n)