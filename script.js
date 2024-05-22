const emberek = ['Kata', 'Sára']
const container = document.querySelector('#container')

for (const ember of emberek) {
  div = document.createElement('div')
  div.innerText = ember
  container.appendChild(div)
  console.log(emberek)
}
