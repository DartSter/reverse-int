module.exports = function reverse(n) {
    String(Math.abs(n))
    return parseInt([...String(Math.abs(n))].reverse().join(''),10) 
}
