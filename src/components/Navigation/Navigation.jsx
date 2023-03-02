import { useAuth } from 'hooks';
import {NavigationNav, NavigationLink} from './Navigation.styled'

export const Navigation = () => {
  const {isLoggedIn} = useAuth();

  return (
    <NavigationNav>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </NavigationNav>
  );
};
