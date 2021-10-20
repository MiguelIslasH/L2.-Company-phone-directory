import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Login from "./login";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { getWallet, getCompaniesData, CONTRACT_ID } from "../../lib/near";

function LoginButton(props) {
  const [wallet, setWallet] = useState();
  const [accountId, setAccountId] = useState("");
  const [infoMessage, setInfoMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const tempWallet = await getWallet();
        setWallet(tempWallet);
        setAccountId(tempWallet.getAccountId());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const login = async () => {
    setLoading(true);
    try {
      await wallet.requestSignIn(CONTRACT_ID, "Companies phone directory");
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
    // eslint-disable-next-line no-restricted-globals
    //location.reload();
  };

  return (
    <Container className="">
      <Button
        variant="success"
        className="m-4"
        size="md"
        onClick={() => login()}
      >
        Log in
      </Button>
      <span>Log in to start viewing companies's data</span>
    </Container>
  );
}

export default LoginButton;
