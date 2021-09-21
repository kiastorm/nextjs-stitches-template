import Router from 'next/router'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    Router.replace('/design-system')
  })

  return null
}

export default Home

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/design-system',
      permanent: false,
    },
  }
}
