import Card from "react-bootstrap/Card";

function CompanyCard(props) {
  return (
    <Card border="secondary" style={{ width: "18rem" }}>
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Title>{props.creatorId}</Card.Title>
        <Card.Text>
          <p>Location: {props.location}</p>
          <p>Phone: {props.phone}</p>
          <p>Number employees: {props.numberEmployees}</p>
          <p>email: {props.email}</p>
          <p>website: {props.website}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CompanyCard;
