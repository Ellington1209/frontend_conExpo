/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./Login.css";
import { Component } from 'react';
import { login, changeValue } from '../../store/actions/Auth.actions';
import TextField from '@mui/material/TextField';
import ButtonLogin from '../../components/atoms/Button/ButtonLogin/ButtonLogin';
import { connect } from "react-redux";
import Loading from '../../components/atoms/loading/Loading'




class Login extends Component {
    logar = () => {
     const { credentials } = this.props;
        this.props.login(credentials)
            .then(() => {
                
            })
            .catch(error => {
                console.log(error); // Exibe o erro no console
            });
    }
    render() {
        return (
            <div className="bg">    
                <Loading/> 
                   
                         
                <div className="login">
                    <div className="logo1"><p>Logo</p></div>
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
                            value={this.props.credentials.username}
                            onChange={(text) => this.props.changeValue({ username: text.target.value })}
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
                            name="username"
                            type="password"
                            value={this.props.credentials.password}
                            onChange={(text) => this.props.changeValue({ password: text.target.value })}
                        />
                    </div>
                    <div className="button">
                        <ButtonLogin

                            background="rgba(36, 113, 163 )"
                            hover="rgb(33, 97, 140 )"
                            color="rgba(255, 255, 255, 1)"                      
                            onClick={()=> this.logar() }>entrar
                        </ButtonLogin>
                    </div>
                    <div className="button">
                        <ButtonLogin
                            background="rgb(39, 174, 96 )"
                            hover="rgb(25, 111, 61 )"
                            color="rgba(255, 255, 255, 1)"
                            href="/register">Cadastar
                        </ButtonLogin>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    credentials: {
        username: state.authReducer.credentials.username || '',
        password: state.authReducer.credentials.password || '',
    },
});

const mapDispatchToProps = dispatch => ({
    login: (credentials) => dispatch(login(credentials)),
    changeValue: (value) => dispatch(changeValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
