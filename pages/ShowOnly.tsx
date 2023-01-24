import { type ReactNode } from 'react';
import { useStore } from 'effector-react/scope';

import { $sessionStatus, type Authenticated } from './someModel'

export const ShowOnly = ({ on, children }: { on: Authenticated, children: ReactNode }) => {
  const sessionStatus = useStore($sessionStatus)
  
  if (sessionStatus !== on) {
    return null
  }
  
  return <>{ children }</>
}