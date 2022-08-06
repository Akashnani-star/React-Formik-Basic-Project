import * as yup from "yup";
const passwordRegexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";
export const basicSchema = yup.object().shape({
    username: yup.string().min(6).required("Required"),
    email: yup.string().email("enter valid email").required("Required"),
    age: yup.number().positive("age should be positive").integer("can't be decimals").required("Required"),
    password: yup.string().min(5).matches(passwordRegexp,"password should be strong").required("Required"),
    password1: yup.string().oneOf([yup.ref("password")],"passwords should match").required("Required"),

    
})

