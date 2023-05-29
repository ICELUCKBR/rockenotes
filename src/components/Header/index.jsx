import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to='/profile'>
        <img src="http://github.com/ICELUCKBR.png" alt="Foto do usuario" />

        <div>
          <span>Bem vindo</span>
          <strong>Allan Garcia</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
