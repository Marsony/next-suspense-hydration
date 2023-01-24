import { ShowOnly } from './ShowOnly';

export const Navbar = () => {
  
  return (
    <div>
      <ShowOnly on={'anonymous'}>
        Anonymous
      </ShowOnly>
      <ShowOnly on={'authenticated'}>
        Authenticated
      </ShowOnly>
    </div>
  )
}