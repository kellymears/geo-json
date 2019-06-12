/** @jsx jsx */
import React from 'react'
import { css, jsx } from 'theme-ui'

const MapCanvas = React.forwardRef((props, ref) => (
  <div ref={ref} css={{
    position: 'absolute',
    width: '100%',
  }}>
    {props.children}
  </div>
))

const styles = {
  absolute: {
    position: 'absolute',
    height: '100%'
  },
  background: {
    display: 'flex-box',
    verticalAlign: 'center',
    position: 'relative',
    zIndex: 10,
  },
  content: {
    py: 2,
    px: 4,
    backgroundColor: 'background',
  },
}

export {
  MapCanvas,
  styles,
}