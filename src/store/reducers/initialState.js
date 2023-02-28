

const initialState = {
    auth: {
        token: {},
        credentials: {
            username: '',
            password: ''
    },
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
    notify: {
        open: false,
        class: 'success',
        vertical: 'top',
        horizontal: 'center',
        time: 'center',
        msg: ''
    }

}

export default initialState;