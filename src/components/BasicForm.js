import { useFormik } from "formik";
import { basicSchema } from "../validation-schema/form-validate";

const BasicForm = () => {

  const formik = useFormik({
    initialValues:{
      username: "",
      email: "",
      age:"",
      password:"",
      password1: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (values,helpers)=>{
      await new Promise((res,rej)=>{
        setTimeout(()=>res("done"),3000);
      });
      alert(`Thank you ${values.username} 💙`)
      helpers.resetForm();
    }
  })

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" 
      type="text" 
      placeholder="Enter your username" 
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.username}
      className={formik.errors.username && formik.touched.username ? "input-error" : ""}
      />
      {formik.errors.username && formik.touched.username && <p className="error">{formik.errors.username}</p>}

      <label htmlFor="email">Email</label>
      <input id="email" 
      type="email" 
      placeholder="Enter your email" 
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email}
      className={formik.errors.email && formik.touched.email ? "input-error" : ""}
      />
      {formik.errors.email && formik.touched.email && <p className="error">{formik.errors.email}</p>}
      <label htmlFor="age">Age</label>
      <input id="age" 
      type="number" 
      placeholder="Enter your age" 
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.age}
      className={formik.errors.age && formik.touched.age ? "input-error" : ""}
      />
      {formik.errors.age && formik.touched.age && <p className="error">{formik.errors.age}</p>}
      <label htmlFor="password">password</label>
      <input id="password" 
      type="password" 
      placeholder="Enter your password" 
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password}
      className={formik.errors.password && formik.touched.password ? "input-error" : ""}
      />
      {formik.errors.password && formik.touched.password && <p className="error">{formik.errors.password}</p>}
      <label htmlFor="password1">confirm password</label>
      <input id="password1"
      type="password" 
      placeholder="confirm password"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password1}
      className={formik.errors.password1 && formik.touched.password1 ? "input-error" : ""}
      />
      {formik.errors.password1 && formik.touched.password1 && <p className="error">{formik.errors.password1}</p>}
      <button disabled={formik.isSubmitting} type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
