import * as Yup from 'yup'



export const schema=Yup.object({
    username:Yup.string().min(2).required('user name is required'),
    email:Yup.string().email().required('email is required'),
    password:Yup.string().min(6).required('enter your password'),
    cpassword:Yup.string().required().oneOf([Yup.ref('password'),null],'password is not matching'),


})


//  username: '',
//         email: '',
//         password: '',
//         cpassword: '',
//         admin: false,
//         block:false