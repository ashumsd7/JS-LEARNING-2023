

const app= document.getElementById('app')
console.log(app)

const heading= document.createElement('h1')

console.log(heading)

const headerContent= document.createTextNode('Hey I am learning next js')

console.log(headerContent)

heading.appendChild(headerContent)

app.appendChild(heading)