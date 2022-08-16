import type { NextPage } from 'next'

import Weather from '@components/weather';
import ToggleTheme from '@components/toggleDarkMode/ToggleTheme';

const Home: NextPage = () => {

  return (
    <div>
      <Weather />
      <ToggleTheme />
    </div>
  )
}

export default Home
