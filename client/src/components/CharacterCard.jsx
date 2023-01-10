import Card from 'react-bootstrap/Card';


const CharacterCard = ({ character }) => {
  return (
    <Card
      bg={"secondary"}
      className="mb-3"
      style={{ width: "15rem", height: "30rem" }}
    >
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>

        <Card.Text>
          Status: {character.status}
          <br />
          Species: {character.species}
          <br />
          Gender: {character.gender}
          <br />
          Origin: {character.origin}
          <br />
          Location: {character.location}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard
