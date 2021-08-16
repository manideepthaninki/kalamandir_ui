export default function FormValidation(values) {
    let errors = {};
  
    if (!values.mobileNo.trim()) {
      errors.mobileNo = 'mobileNo required';
    }else if (!(/^\d{10}$/.test(values.mobileNo)) || !values.mobileNo.trim()===10) {
        errors.mobileNo = 'mobileNo is invalid';
      }
    
  
    if (!values.name) {
      errors.name = 'name required';
     }

     if (!values.gstNumber) {
        errors.gstNumber = 'gstNumber required';
       }
       if (!values.gender) {
        errors.gender = 'gender required';
       }

    // if (!values.password2) {
    //   errors.password2 = 'Password is required';
    // } else if (values.password2 !== values.password) {
    //   errors.password2 = 'Passwords do not match';
    // }
    return errors;
  }