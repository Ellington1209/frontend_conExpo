

const initialState = {
    auth: {
        token: {},
        credentials: {
            username: '',
            password: ''
    },
    success: false
    },
    register:{
        data:{
            name: '',
            email: '',
            password: '',
        },
        error: {},
        success: false
    },
    loading: {
        open: false,
        msg : ''
    },
 

}

export default initialState;