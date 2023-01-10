import {Row, Col} from "react-bootstrap";
import {
  BsFillEmojiSmileFill,
  BsFillEmojiDizzyFill,
  BsFillQuestionCircleFill,
  BsFillPersonFill,
  BsGenderMale,
  BsGenderFemale
} from "react-icons/bs";
import { RiAliensFill } from "react-icons/ri";

const Status = ({characters}) => {
  const filterData = (key, find) => {
    return characters
      .map(item => item[key])
      .filter((item) => item === find)
      .length
  }

  const unknownCounter = (elements) => {
    return characters.length - elements
  }

  const alive = filterData("status", "Alive")
  const dead = filterData("status", "Dead")
  const statusUnknown = unknownCounter(alive + dead)

  const human = filterData("species", "Human")
  const humanoid = filterData("species", "Humanoid")
  const alien = filterData("species", "Alien")
  const speciesUnknown = unknownCounter(human + humanoid + alien)

  const male = filterData("gender", "Male")
  const female = filterData("gender", "Female")
  const genderUnknown = unknownCounter(male + female)


  return (
    <Row>
      <Col>
        <p>
          Status: <br/>
          <span>{alive} <BsFillEmojiSmileFill color="yellow" /> {"  "}</span>
          <span>{dead} <BsFillEmojiDizzyFill color="#c7c" /> {"  "}</span>
          <span>{statusUnknown} <BsFillQuestionCircleFill /></span>
          
      </p>
      </Col>

      <Col>
        <p>
        Species: <br/>
          <span>{human} <BsFillPersonFill color="pink" /> {"  "}</span>
          <span>{humanoid} <BsFillPersonFill color="green" /> {"  "}</span>
          <span>{alien} <RiAliensFill color="cyan" /> {"  "}</span>
          <span>{speciesUnknown} <BsFillQuestionCircleFill /></span>
          
      </p>
      </Col>

      <Col>
        <p>
        Gender: <br/>
          <span>{male} <BsGenderMale color="aqua" /> {"  "}</span>
          <span>{female} <BsGenderFemale color="pink" /> {"  "}</span>
          <span>{genderUnknown} <BsFillQuestionCircleFill /></span>
          
      </p>
      </Col>
    </Row>

  )
}

export default Status
