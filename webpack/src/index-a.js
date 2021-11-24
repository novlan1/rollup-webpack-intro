import c from './c.js'

console.log('c',c)

function test() {
  import('./e.js').then((e) => {
    console.log(e)
  })
}

test.js
