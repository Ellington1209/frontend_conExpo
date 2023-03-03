import TextField from "@mui/material/TextField";
import ButtonLogin from "../../components/atoms/Button/ButtonLogin/ButtonLogin";
import { connect } from "react-redux";
import { registerUser } from "../../store/actions/register.actions";
import Loading from "../../components/atoms/loading/Loading";
import Logo from "../../../src/image/logo.png";
import Icone from "../../../src/image/Icone.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Utils from "../../utils/Utils";
import Alert from "@mui/material/Alert";

function Register(props) {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [modificado, setModificado] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showErrorMessage, setShowErrorMessage] = useState(true);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setShowErrorMessage(false);
  };

  const register = () => {
    if (validate(inputs)) {     
      props.registerUser(inputs).then(() => {
        if (props.success) {
          navigate("/dashboard");
        } else {
          setErrorMessage("Houve um erro ao registrar o usuário!");
          setShowErrorMessage(true);
        }
      });
    }
    setModificado(true);
  };

  function validate(value) {
    if (
      !Utils.isNotNull(value.name) ||
      !Utils.isNotNull(value.username) ||
      !Utils.isNotNull(value.password)
    ) {
      return false;
    }
    return true;
  }

  function validacaoForm(value) {
    return modificado ? !Utils.isNotNull(value) : false;
  }

  return (
    <div className="bg">
      <Loading />

      <div className="login">
        <div className="logo1">
          {" "}
          <img className="logo2" alt="logo" src={Logo} />
        </div>
        {errorMessage && showErrorMessage && (
          <Alert
            severity="error"
            style={{
              position: "absolute",
              backgroundColor: "236, 112, 99 ",
              fontSize: "14px",
              color: "white",
              transform: " translate(-50%, -50%)",
              top: "31%",
              left: "45%",
            }}
          >
            {errorMessage}
          </Alert>
        )}
        <div className="divInput">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            label="Nome"
            name="name"
            type="text"
            value={inputs.name || ""}
            onChange={handleChange}
            error={validacaoForm(inputs.name)}
            helperText={
              validacaoForm(inputs.name) ? (
                <span style={{ fontSize: "10px" }}>
                  O campo nome é obrigatório
                </span>
              ) : (
                ""
              )
            }
            sx={{ fontSize: 22 }}
          />
        </div>{" "}
        <div className="divInput">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            id="email"
            label="Email"
            name="username"
            type="email"
            value={inputs.username || ""}
            onChange={handleChange}
            error={validacaoForm(inputs.username)}
            helperText={
              validacaoForm(inputs.username) ? (
                <span style={{ fontSize: "10px" }}>
                  O campo email é obrigatório
                </span>
              ) : (
                ""
              )
            }
          />
        </div>{" "}
        <div className="divInput">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            required
            id="password"
            label="Senha"
            name="password"
            type="password"
            value={inputs.password || ""}
            onChange={handleChange}
            error={validacaoForm(inputs.password)}
            helperText={
              validacaoForm(inputs.password) ? (
                <span style={{ fontSize: "10px" }}>
                  O campo senha é obrigatório
                </span>
              ) : (
                ""
              )
            }
          />
        </div>
        <div className="button">
          <ButtonLogin
            background="rgba(36, 113, 163 )"
            hover="rgb(33, 97, 140 )"
            color="rgba(255, 255, 255, 1)"
            onClick={() => register()}
          >
            Cadastar
          </ButtonLogin>
        </div>
        <div className="button">
          <ButtonLogin
            background="rgb(39, 174, 96 )"
            hover="rgb(25, 111, 61 )"
            color="rgba(255, 255, 255, 1)"
            href="/"
          >
            Fazer Login
          </ButtonLogin>
        </div>
        <div className="footer">
          {" "}
          <img className="footer1" alt="icone" src={Icone} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  success: state.registerReducer.success,
  error: state.registerReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (data) => dispatch(registerUser(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
