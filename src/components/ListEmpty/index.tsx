import { Container, Icon, Text } from "./styles";

type Props = {
  text: string;
};

export function ListEmpty({ text }: Props) {
  return (
    <Container>
      <Icon />
      <Text>{text}</Text>
    </Container>
  );
}
