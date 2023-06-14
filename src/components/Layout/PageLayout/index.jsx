import React from "react";
import { Container } from "react-bootstrap";
import BoxLayout from "../BoxLayout";

// import "./style.css";

function PageLayout({ children }) {
  return (
    <Container>
      {React.Children.map(children, (child) => (
        <BoxLayout>{child}</BoxLayout>
      ))}
    </Container>
  );
}

export default PageLayout;
