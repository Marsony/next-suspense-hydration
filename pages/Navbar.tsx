import { ShowOnly } from './ShowOnly';

export const Navbar = () => (
  <>
    <ShowOnly on={'anonymous'}>
      Anonymous
    </ShowOnly>
    <ShowOnly on={'authenticated'}>
      Authenticated
    </ShowOnly>
  </>
)