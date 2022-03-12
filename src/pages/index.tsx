import type { NextPage } from 'next'

import Navbar from '~/components/Navbar'
import Landing from '~/modules/Landing'

const Home: NextPage = () => (
  <>
    <Navbar />
    <Landing />
  </>
)

export default Home
