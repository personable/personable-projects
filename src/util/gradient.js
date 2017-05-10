import Color from 'tinycolor2'

export function gradient (color, direction) {
  const desaturatedColor = Color(color).desaturate(10)
  const analogousColors = Color(desaturatedColor).analogous(7).map(function (t) {
    return t.toHexString()
  })

  if (direction === 'radial') {
    return (
      `radial-gradient(circle at 35% 90%, ${analogousColors[1]}, ${analogousColors[3]} 50%),
      radial-gradient(circle at 43% 73%, ${analogousColors[2]}, ${analogousColors[4]} 60%),
      radial-gradient(circle at 48% 86%, ${analogousColors[3]}, ${analogousColors[6]} 100%),
      radial-gradient(circle at 73% 35%, ${analogousColors[4]}, ${analogousColors[5]} 100%),
      radial-gradient(circle at 10% 0%, ${color}, ${analogousColors[0]} 100%),
      radial-gradient(circle at 50% 50%, ${analogousColors[6]}, ${analogousColors[3]} 50%)`
    )
  } else {
    return (
      `linear-gradient(to right,
        ${analogousColors[1]} 0%,
        ${analogousColors[2]} 25%,
        ${analogousColors[3]} 50%,
        ${analogousColors[4]} 75%,
        ${color} 100%)`
    )
  }
}
