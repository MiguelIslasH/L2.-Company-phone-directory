import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";

import { getCompaniesData, getWallet } from "../../lib/near";
import CompaniesList from "./comapnies-list";

function Companies(props) {
  const [wallet, setWallet] = useState();
  const [accountId, setAccountId] = useState("");
  const [loading, setLoading] = useState(true);
  const [companiesData, setCompaniesData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const tempWallet = await getWallet();
        console.log(tempWallet);
        setWallet(tempWallet);
        setAccountId(tempWallet.getAccountId());
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const result = await getCompaniesData(wallet);
        const {
          status: { SuccessValue },
        } = result;
        const contractResponse = atob(SuccessValue).split("\\n");
        const jsonData = JSON.parse(contractResponse);
        console.log(props.companyName);
        if (props.companyName) {
          jsonData.forEach((company) => {
            if (company.name === props.companyName) {
              setCompaniesData([company]);
              setLoading(false);
            }
          });
        } else {
          setCompaniesData(jsonData);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [wallet, props.companyName]);

  return (
    <Container className="m-4">
      {console.log(accountId)}
      {loading ? (
        <p>loading...</p>
      ) : (
        <CompaniesList companies={companiesData} />
      )}
    </Container>
  );
}

export default Companies;
