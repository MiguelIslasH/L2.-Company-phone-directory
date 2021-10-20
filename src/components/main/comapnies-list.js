import Row from "react-bootstrap/Row";

import CompanyCard from "./company-card";

import classes from "./companies.module.css";

function CompaniesList(props) {
  return (
    <Row className="d-flex justify-content-around">
      {props.companies.map((company) => {
        return (
          <CompanyCard
            className={classes.companyCard}
            name={company.name}
            creatorId={company.creatorId}
            phone={company.phone}
            email={company.email}
            numberEmployees={company.numberEmployees}
            location={company.location}
            website={company.website}
          />
        );
      })}
    </Row>
  );
}

export default CompaniesList;
