/** @jsx jsx */
import {
  ThemeProvider,
  jsx,
  Layout,
  Header,
  Main,
  Container,
  Footer,
} from 'theme-ui'

import theme from './theme/theme'
import styles from './theme/css'
import './theme/global'

import { Content } from './components/Content'
import { Map } from './components/Map'

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Header />
      <Main>
        <Map css={styles.absolute} />
        <Container css={styles.background}>
          <Content />
        </Container>
      </Main>
      <Footer />
    </Layout>
  </ThemeProvider>
)

export default App;
