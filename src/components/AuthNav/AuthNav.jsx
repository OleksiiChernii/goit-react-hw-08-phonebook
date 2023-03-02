import { NavigationLink } from "components/Navigation/Navigation.styled";
import { AuthNavDiv } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavDiv>
      <NavigationLink to="/register">Register</NavigationLink>
      <NavigationLink to="/login">Log In</NavigationLink>
    </AuthNavDiv>
  );
};

