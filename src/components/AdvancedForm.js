import { Form, Formik } from "formik";
import { AdvancedSchemaValidation } from "../validation-schema/advanced-form-validate";
import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

const AdvancedForm = () => {
  return (
    <Formik initialValues={{username : "",jobType:"",acceptedTos: false}} 
    validationSchema={AdvancedSchemaValidation} onSubmit={ async (values,helpers)=>{
      await new Promise((res,rej)=>{
        setTimeout(()=>res("hello"),3000);
      })
      alert(`Thank you ${values.username} 💙`)
      helpers.resetForm();
    }}>

      {(props)=>(
        <Form>
          <CustomInput label="Username" type="name" name="username" placeholder="Enter your username " />
          <CustomSelect label="Job Type" name="jobType" id="jobType" />
          <CustomCheckbox name="acceptedTos" type="checkbox" id="acceptedTos" label="I accept the terms of service" />
          <button disabled={props.isSubmitting} type="submit">Sumbit</button>
        </Form>
      )}

    </Formik>
  );
};
export default AdvancedForm;
