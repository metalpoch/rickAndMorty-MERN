import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { useState, useEffect } from "react";
import NavbarNavigate from "./components/NavbarNavigate"
import CharacterCard from "./components/CharacterCard"
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/API")
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <NavbarNavigate />
      <main className="text-white">
        <Container className="pt-3">
          <Row>
            {characters.map((character) => {
              return (
                <Col>
                  <CharacterCard character={character} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App
