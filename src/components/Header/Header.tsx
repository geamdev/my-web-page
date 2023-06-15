import { Nav, Info } from './components';
import { Divider } from '../Divider';
import { Container } from './Header.styles';
const Header: React.FC = () => {
  return (
    <Container>
      <Nav />
      <Divider />
      <Info />
    </Container>
  );
};

export default Header;
