export function gradientMixed (colors) {
  const arr = []

  for (let i = 0; i < colors.length; i++) {
    const coord1 = Math.floor(Math.random() * (75 - 1) + 1)
    const coord2 = Math.floor(Math.random() * (75 - 1) + 1)
    const coord3 = Math.floor(Math.random() * (100 - 30) + 30)
    arr.push(`radial-gradient(circle at ${coord1}% ${coord2}%, ${colors[i]}, rgba(255, 255, 255, 0) ${coord3}%)`)
  }

  return `${arr.join()}, rgba(255, 255, 255, 0.66)`
}
