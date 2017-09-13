import Color from 'tinycolor2'

export function gradient (color, direction) {
  const analogousColors = Color(color).analogous(7).map(function (i) {
    return i.toPercentageRgbString()
  })

  const transparentColors = []
  for (let i = 0; i < analogousColors.length; i++) {
    const color = Color(analogousColors[i])
    const alpha = color.setAlpha(0).toPercentageRgbString()
    transparentColors.push(alpha)
  }

  const semiTransparentColors = []
  for (let i = 0; i < analogousColors.length; i++) {
    const color = Color(analogousColors[i])
    const alpha = color.setAlpha(0.3).toPercentageRgbString()
    semiTransparentColors.push(alpha)
  }

  if (direction === 'radial') {
    return (
      `
        radial-gradient(circle at 93.33% 10%, ${analogousColors[2]}, ${transparentColors[2]} 55%),
        radial-gradient(circle at 31.02% 27.95%, ${analogousColors[4]}, ${transparentColors[4]} 76%),
        radial-gradient(circle at 14.53% 78.46%, ${analogousColors[1]}, ${transparentColors[1]} 54%),
        radial-gradient(circle at 44.00% 56.03%, ${analogousColors[2]}, ${transparentColors[2]} 71%),
        radial-gradient(circle at 50% 50%, ${analogousColors[6]}, ${transparentColors[6]} 100%)
      `
    )
  } else {
    return (
      `linear-gradient(to left,
        ${semiTransparentColors[2]} 0%,
        ${semiTransparentColors[3]} 25%,
        ${semiTransparentColors[1]} 50%,
        ${semiTransparentColors[4]} 75%
      `
    )
  }
}
