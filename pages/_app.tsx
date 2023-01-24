import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic';

import { withEffector, usePageEvent } from '@/library';
import '@/styles/globals.css'

import { bootAppOnClient } from './someModel'

const SuspensedNavbar = dynamic(() => import('./Navbar').then((c) => c.Navbar))

const App = ({ Component, pageProps }: AppProps) => {
  usePageEvent(bootAppOnClient, { runOnce: true })
  
  return (
    <>
      <SuspensedNavbar />
      <Component {...pageProps} />
    </>
  )
}

export default withEffector(App)