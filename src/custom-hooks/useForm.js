import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const useForm = (validate, postData) => {
    const [user, setUser] = useState({
        mobileNo: '',
        name: '',
        gstNumber: '',
        address: '',
        dob: '',
        alternateMobile2: '',
        annversary: '',
        gender: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmiting, setIsSubmitting] = useState(false);
    const [dobDate, setDobDate] = useState('');

    const handleChange = e => {
        console.log(e.target)
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(user));
        console.log(errors);
        setIsSubmitting(true)
    };
    const dateHandler = date => {
        
        setDobDate(date)
       
    }

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmiting) {


                let newUser = {
                    name: user.name,
                    mobileNumber: user.mobileNo,
                    gstNumber: user.gstNumber,
                    address: user.address,
                    gender: user.gender,
                    altMobileNo: user.altMobileNo,
                    dob: dobDate
                }
               
                fetch("http://babf472575dd.ngrok.io/customer/savecustomerdetails", {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newUser)

                }).then(res => res.json() )
                
               .then(data=>{
                    console.log(data)
                    if (data.statusCodeValue===200) {
                        toast.success(data.body);
                        postData();
                    } else{
                        toast.error(data.body);
                    }
                
                })
                    




            }
        },
        [errors]
    );

    return { handleChange, handleSubmit, user, errors, dateHandler, dobDate };
};

export default useForm;