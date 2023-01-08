import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { Container, Row, Col } from "react-bootstrap";
import NavbarNavigate from "./components/NavbarNavigate"
import FilterCharacters from "./components/FilterCharacters";
import CharacterCard from "./components/CharacterCard"

const App = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/API")
      .then((res) => res.json())
      .then((res) => {
        setAllCharacters(res);
        setCharacters(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCharacter = (text) => {
    if (!text) setCharacters(allCharacters)
    text = text.toLowerCase(text)
    const result = allCharacters
      .map((character) => {
        const isInclude = character.name.toLowerCase().includes(text)
        return isInclude
          ? character
          : undefined
      })
      .filter(character => character)

    setCharacters(result)
  } 

  return (
    <>
      <NavbarNavigate />
      <main className="text-white">
        <Container fluid className="pt-3">
          <FilterCharacters handleCharacter={handleCharacter} />
          <Row>
            {characters.map((character, i) => {
              return (
                <Col key={i}>
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
