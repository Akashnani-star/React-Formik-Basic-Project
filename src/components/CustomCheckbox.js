import { useField } from "formik";

const CustomCheckbox = ({label,...props}) => {
  const [field,meta] = useField(props);
  return (
    <>
        
        <div className="checkbox">
            <input id={props.id} {...field} {...props} className={meta.error && meta.touched ? "input-error" : ""} />
            <label className="checkbox-label" htmlFor={props.id}>{label}</label>
        </div>
        {meta.error && meta.touched && <p className="error">{meta.error}</p>}

    </>
  )
}

export default CustomCheckbox