import Header from "./header";
import Description from "./description";
import LoginButton from "./login-button";

import classes from "./login.module.css";

function Login(props) {
  return (
    <div className={classes.fondo}>
      <Header />
      <Description />
      <LoginButton setIsLoggedIn={props.setIsLoggedIn} />
    </div>
  );
}

export default Login;
