const emberek = ['Kata', 'Sára', 'Peti', 'Sanyi']
const container = document.querySelector('#container')

for (const ember of emberek) {
  const div = document.createElement('div')
  div.innerText = ember
  container.appendChild(div)
  console.log(emberek)
}
