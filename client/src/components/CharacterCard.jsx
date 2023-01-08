import Card from 'react-bootstrap/Card';

const CharacterCard = ({ character }) => {
  return (
    <Card bg={"secondary"} className="mb-3" style={{ width: "15rem", height: "33rem" }}>
      <Card.Img variant="top" src={character.image} />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>Status: {character.status}</Card.Text>
        <Card.Text>Species: {character.species}</Card.Text>
        <Card.Text>Gender: {character.gender}</Card.Text>
        <Card.Text>Origin: {character.origin}</Card.Text>
        <Card.Text>Location: {character.location}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard
