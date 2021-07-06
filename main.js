const str = `
010-1234-7854
heralife@nate.com
t
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The auick brown fox jumps over the lazy dog.
abbcccdddd
https://localhost:1234
`

//const regexp = new Regexp('the', 'gi')
//const regexp =/fox/gi
//console.log(regexp.test(str))
//str = str.replace(regexp,'AAA')
//console.log(str)

console.log(
    str.match(/http?/g)
)