import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import ButtonLogin from '../../components/atoms/Button/ButtonLogin/ButtonLogin';
import { connect } from 'react-redux'
import { changeValue, registerUser } from '../../store/actions/register.actions'
import Loading from '../../components/atoms/loading/Loading'
import { rootUrl } from '../../conf/GlobalConfig';

export class register extends Component {
    register = () =>{
        this.props.registerUser(this.props.data)
            .then( () => {
                if(this.props.success){
                    window.location.replace(rootUrl + 'dashboard')
                }
            })
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
                    label="Nome"
                    name="name"
                    type="text"
                    value={this.props.data.name}
                    onChange={(text) => this.props.changeValue({ name: text.target.value })}
                />
            </div>
            <div className="divInput">
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    id="email"
                    label="Email"
                    name="email"
                    type="email"
                    value={this.props.data.email}
                    onChange={(text) => this.props.changeValue({ email: text.target.value })}
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
                    value={this.props.data.password}
                    onChange={(text) => this.props.changeValue({ password: text.target.value })}
                />
            </div>
            <div className="button">
                <ButtonLogin

                    background="rgba(36, 113, 163 )"
                    hover="rgb(33, 97, 140 )"
                    color="rgba(255, 255, 255, 1)"                      
                    onClick={()=> this.register() }>Cadastar
                </ButtonLogin>
            </div>
            <div className="button">
                <ButtonLogin
                    background="rgb(39, 174, 96 )"
                    hover="rgb(25, 111, 61 )"
                    color="rgba(255, 255, 255, 1)"
                    href="/">Fazer Login
                </ButtonLogin>
            </div>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.registerReducer.data,
  success: state.registerReducer.success,
  error: state.registerReducer.error,
})

const mapDispatchToProps = dispatch => ({
    changeValue: value => dispatch(changeValue(value)),
    registerUser: data => dispatch(registerUser(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(register)
