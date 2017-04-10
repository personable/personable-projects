import Color from 'tinycolor2'

export function gradient (color) {
  const desaturatedColor = Color(color).desaturate(10)
  const analogousColors = Color(desaturatedColor).analogous(7).map(function (t) {
    return t.toHexString()
  })

  return (
    `radial-gradient(circle at 35% 90%, ${analogousColors[1]}, transparent 50%),
    radial-gradient(circle at 43% 73%, ${analogousColors[2]}, transparent 60%),
    radial-gradient(circle at 48% 86%, ${analogousColors[3]}, transparent 100%),
    radial-gradient(circle at 73% 35%, ${analogousColors[4]}, transparent 100%),
    radial-gradient(circle at 10% 0%, ${color}, transparent 100%),
    radial-gradient(circle at 50% 50%, ${analogousColors[6]}, ${analogousColors[3]} 50%)`
  )
}
