import { useField } from "formik";

const CustomSelect = ({label,...props}) => {
  const [field,meta] = useField(props);
  return (
    <>
        <label>{label}</label>
        <select
        {...props}
        {...field}
        className={meta.error && meta.touched ? "input-error" : ""}
        >
            <option value="please">Please select job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
        </select>
        {meta.error && meta.touched && <p className="error">{meta.error}</p>}
    </>
  )
}

export default CustomSelect