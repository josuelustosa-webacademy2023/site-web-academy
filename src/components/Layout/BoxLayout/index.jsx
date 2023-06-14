import React from "react";
import { Row, Col } from "react-bootstrap";
import Typography from "../../Typography";

function BoxLayout({ children, classTitle, title, ...props }) {
  // A soma de todas as proporções é calculada usando o método reduce(), percorrendo os filhos com React.Children.toArray(children)
  const totalProportions = React.Children.toArray(children).reduce(
    (accountant, child) => accountant + (child.props.proportion || 1),
    0
  );

  return (
    <div {...props}>
      <Typography className={classTitle}>{title}</Typography>
      <Row>
        {
          // O tamanho das colunas é calculado multiplicando a proporção de cada filho pelo espaço disponível (12 colunas)
          // Para definir o tamanho de cada coluna dos filhos é passada a prop "proportion". E, caso a proriedade não for definida, o valor assumido é 1.
          React.Children.map(children, (child) => (
            <Col md={(12 / totalProportions) * (child.props.proportion || 1)}>
              {child}
            </Col>
          ))
        }
      </Row>
    </div>
  );
}

export default BoxLayout;
