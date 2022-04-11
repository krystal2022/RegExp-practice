const str = `
010-1234-5678
sjk5689612@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
동해물과_백두산이 마르고 닳도록
`

// const regexp = new RegExp('the', 'ig')
// console.log(str.match(regexp))

// const regexp = /fox/gi
// console.log(regexp.test(str))

// const regexp = /fox/gi
// console.log(str.replace(regexp,'AAA'))


// console.log(str.match(/the/gi))

// //.만 쓸 경우 정규표현식에서는 특정 문자를 찾아달라는 명령어이기 때문에
// // \.라고 적어야 문자에서 .를 찾아준다.
// console.log(str.match(/\./gi))


// //$는 글이 완전히 끝나는 부분을 의미한다.
// //위의 str에서 완전히 끝나는 부분에 .이 없기 때문에
// //console창에 결과값은 null이 나온다.
// console.log(str.match(/\.$/gi))

// //플래그에 m을 붙이면 전체 문장의 줄바꿈되는 부분을 다 확인한다.
// console.log(str.match(/\.$/gim))


// // / .사용방법
// console.log(str.match(/h..p/g))

// // a|b 사용방법
// // fox를 앞에 썼기 때문에 fox를 찾았으면 dog는 찾지 않음
// console.log(/fox|dog/)


// console.log(str.match(/\b\w{2,3}\b/g))

