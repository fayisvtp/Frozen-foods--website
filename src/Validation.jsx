import * as Yup from 'yup'



export const FormValidation = Yup.object({
    name: Yup.string().min(3).required("Please enter Username"),
    email: Yup.string().email("Please enter valid email").required("Please enter email"),
    password: Yup.string().min(4).required("Please enter Password"),

})