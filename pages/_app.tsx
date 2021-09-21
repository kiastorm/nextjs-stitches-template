import { IdProvider } from '@radix-ui/react-id'
import { box } from 'design-system/box'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { css, globalCss } from 'stitches.config'
import { reset } from '@styles/reset'
import '../styles.css'

const appWrapper = css({
  include: ['box', 'minHeightScreen'],
})

const App = ({ Component, pageProps }: AppProps) => {
  globalCss(reset, {
    'body, button': {
      backgroundColor: 'tomato',
      fontFamily: '$untitled',
    },
  })

  return (
    <IdProvider>
      <Head>
        <title>Design System</title>
        <link
          rel="stylesheet"
          href="https://develop.modulz.app/fonts/fonts.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div
        className={appWrapper({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <div className={box({ flex: 1 })}>
          <Component {...pageProps} />
        </div>
      </div>
    </IdProvider>
  )
}

export default App
