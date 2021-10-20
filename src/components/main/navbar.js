import { useState, useEffect, useRef } from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import { getWallet } from "../../lib/near";
import RegisterModal from "./registerModal";

import classes from "./navbar.module.css";

function NavBar(props) {
  const [wallet, setWallet] = useState();
  const [accountId, setAccountId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const searchRef = useRef();

  useEffect(() => {
    (async () => {
      try {
        const tempWallet = await getWallet();
        setWallet(tempWallet);
        setAccountId(tempWallet.getAccountId());
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const signOut = () => {
    try {
      wallet.signOut();
      localStorage.removeItem(
        "near-api-js:keystore:miguelislas.testnet:testnet"
      );
    } catch (e) {
      console.log(e);
    }
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Companies phone directory</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex justify-content-between">
            <FormControl
              type="search"
              placeholder="Search"
              className={classes.myNavbar}
              aria-label="Search"
              ref={searchRef}
            />
            <Button
              variant="outline-info"
              onClick={() => props.setCompanyName(searchRef.current.value)}
            >
              Search
            </Button>
          </Form>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="success" onClick={() => setShowModal(true)}>
              Register company
            </Button>
            <Button variant="danger" className="m-2" onClick={signOut}>
              Log out
            </Button>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
      <RegisterModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default NavBar;
