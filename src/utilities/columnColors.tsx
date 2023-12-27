const colors = [
  '#6DC1E1',
  '#8172EA',
  '#88DFB2',
  '#0091ad',
  '#6EFAFB',
  '#f7e8a4',
  '#ff57bb',
  '#5762D5',
  '#575366',
  '#6E7DAB',
  '#960200',
  '#FFD046',
  '#EFBDEB',
  '#DB3A34',
  '#7CDEDC',
  '#D8315B',
  '#FFFD77',
  '#FA8334',
  '#5762D5',
  '#271033',
  '#FFE882',
  '#F84AA7',
  '#C0D6DF',
  '#1B1B3A',
  '#FF3562',
  '#FF0000',
  '#00FF00',
  '#0000FF',
]
const columnColors = shuffle(colors)

export default columnColors

function shuffle(array: string[]): string[] {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}
