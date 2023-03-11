import "./Login.css";
import { useState } from "react";
import { login, changeValue } from "../../store/actions/Auth.actions";
import TextField from "@mui/material/TextField";
import ButtonLogin from "../../components/atoms/Button/ButtonLogin/ButtonLogin";
import { connect } from "react-redux";
import Loading from "../../components/atoms/loading/Loading";
import Logo from "../../../src/image/logo.png";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const Login = ({ credentials, login, changeValue }) => {
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  
  

  const validateForm = () => {
    const errors = {};

    if (!credentials.username) {
      errors.username = "Informe o email";
    }

    if (!credentials.password) {
      errors.password = "Informe a senha";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const logar = () => {
    if (validateForm()) {
      login(credentials)
        .then(() => {
          // Lógica após o login
          navigate("/dashboard"); // Redirecionando o usuário para a rota /dashboard usando navigate
        })
        .catch((error) => {
          console.log(error); // Exibe o erro no console
          setLoginError("Email ou senha incorreta"); // Armazena a mensagem de erro na propriedade loginError
        });
    }
  };

  const handleInputChange = () => {
    setError(null);
    setLoginError(null);
  };
  

  return (
    <div className="bg">
      <Loading />

      <div className="login">
        <div className="logo1">
          <img className="logo2" src={Logo} alt="Logo" />
        </div>

        {error && <Alert severity="error">{error}</Alert>}
        {loginError && <Alert severity="error">{loginError}</Alert>}

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
            value={credentials.username}
            onChange={(text) => {
              handleInputChange();
              changeValue({ username: text.target.value });
              validateForm();
            }}
            error={Boolean(errors.username)}
            helperText={errors.username}
          />
        </div>
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
            value={credentials.password}
            onChange={(text) => {
              handleInputChange();
              changeValue({ password: text.target.value });
              validateForm();
            }}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
        </div>
        <div className="button">
          <ButtonLogin
            background="rgba(36, 113, 163 )"
            hover="rgb(33, 97, 140 )"
            color="rgba(255, 255, 255, 1)"          
            onClick={logar}
          >
            entrar
          </ButtonLogin>
        </div>
        <div className="button">
          <ButtonLogin
            background="rgb(39, 174, 96 )"
            hover="rgb(25, 111, 61 )"
            color="rgba(255, 255, 255, 1)"
            href="/register"
          >
            Cadastar
          </ButtonLogin>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  credentials: {
    username: state.authReducer.credentials.username || "",
    password: state.authReducer.credentials.password || "",
  },
});

const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(login(credentials)),
  changeValue: (value) => dispatch(changeValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
