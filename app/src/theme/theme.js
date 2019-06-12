const typography = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    spaced: '0.1ch',
    caps: '0.2em',
  },
}

const space = [1, 2, 4, 8, 16, 32, 64, 128]

const colors = {
  text: '#fff',
  background: '#000',
  primary: '#07c',
  secondary: '#05a',
  accent: '#609',
  muted: '#f6f6f6f',
}

const zIndices = [
  1,
  10,
  100,
  1000,
]

const styles = {
  h1: {
    fontSize: 32,
    fontFamily: 'body',
    fontWeight: 'heading',
    color: 'text',
    mt: 4,
    mb: 2,
    letterSpacing: 'spaced',
  },
  p: {
    fontSize: 16,
    fontFamily: 'monospace',
    color: 'text',
  }
}

export default {
  ...typography,
  colors,
  zIndices,
  styles,
  space,
}
