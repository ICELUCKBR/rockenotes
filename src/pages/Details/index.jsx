import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Container, Links, Content } from "./styles";

export function Details() {
  return (
    //Fragment <> ... </> para retornar apenas um elemento no return -> assim retorno N elementos em um return
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução a tecnologia</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            aut placeat, temporibus aperiam nulla ducimus voluptas maiores
            dolores odio sapiente recusandae hic sint consequuntur non ipsum
            illum excepturi commodi veniam.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">RocketSeat</a>
              </li>
              <li>
                <a href="#">RocketSeat</a>
              </li>
              <li>item A 3</li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="Express"></Tag>
            <Tag title="Node"></Tag>
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
