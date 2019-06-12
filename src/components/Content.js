/** @jsx jsx */
import {
  jsx,
  Styled,
} from 'theme-ui'

import { styles } from './styled'

const Content = () => (
  <div css={styles.content}>
    <Styled.h1>GEOJSON Server</Styled.h1>
    <Styled.p>Just a place to stash my objects.</Styled.p>
    <Styled.p>Valid requests:</Styled.p>
    <Styled.p as='ul'>
      <li>/countries</li>
      <li>/countries/:country-code</li>
      <li>/countries/USA/:state</li>
      <li>/countries/CA/:province</li>
    </Styled.p>
  </div>
)

export { Content }