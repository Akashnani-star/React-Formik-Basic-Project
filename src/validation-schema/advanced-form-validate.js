import * as yup from 'yup';

export const AdvancedSchemaValidation = yup.object().shape({
    username: yup.string().min(6).required("Required"),
    jobType: yup.string().oneOf(["designer","developer","manager","other"],"Please select one").required("Required"),
    acceptedTos: yup.boolean().oneOf([true],"please accept terms of service").required("Required"),
})