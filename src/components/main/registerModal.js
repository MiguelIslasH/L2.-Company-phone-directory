import { useRef, useState, useEffect } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { getWallet, registerCompany } from "../../lib/near";

function RegisterModal(props) {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const websiteRef = useRef();
  const locationRef = useRef();

  const [wallet, setWallet] = useState();
  const [accountId, setAccountId] = useState("");

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

  const registerCompanyHandler = async () => {
    const company = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      numberEmployees: numberRef.current.value,
      website: websiteRef.current.value,
      location: locationRef.current.value,
    };

    console.log(company);

    try {
      console.log("Por llamar");
      const res = await registerCompany(wallet, company);
      console.log(res);
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    } catch (e) {
      console.log("error");
      console.log(e);
    }
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Register company</Modal.Title>
        </Modal.Header>
        {console.log(accountId)}
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company's name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name of the company"
                ref={nameRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company's phone:</Form.Label>
              <Form.Control
                type="text"
                placeholder="phone of the company"
                ref={phoneRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company's email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="email of the company"
                ref={emailRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Number of employees:</Form.Label>
              <Form.Control
                type="text"
                placeholder="How many employees are working here?"
                ref={numberRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company's website:</Form.Label>
              <Form.Control
                type="text"
                placeholder="website of the company"
                ref={websiteRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company's location:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location of the company"
                ref={locationRef}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => registerCompanyHandler()}>
            Register company
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default RegisterModal;
