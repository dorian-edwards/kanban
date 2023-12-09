export default function keyGen(prefix: string): string {
  let results = ''

  for (let i = 0; i < 3; i++) {
    results += String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  return (
    prefix.toUpperCase() + results + Math.floor(Math.random() * 9000 + 1000)
  )
}
