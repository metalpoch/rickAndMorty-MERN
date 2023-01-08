import Form from "react-bootstrap/Form";


const FilterCharacters = ({handleCharacter}) => {
  return (
    <Form.Control
      className="mb-2"
      placeholder="Search Characters"
      onChange={(event) => {
        handleCharacter(event.target.value)
      }}
    />
  );
}

export default FilterCharacters
