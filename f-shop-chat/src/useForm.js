import { useState } from 'react'

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
    })
    const [errors, setErrors] = useState({})

    // const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values))
        console.log(values)
        if (Object.keys(errors).length === 0) {
            async function fetchLogin() {
                const requestOptions = {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Accept-Encoding': 'gzip, deflate, br',
                        'Connection': 'keep-alive'

                    },
                    redirect: 'follow', // manual, *follow, error
                    referrerPolicy: 'no-referrer',
                    body: JSON.stringify(values)
                };

                console.log(requestOptions)
                // const requestUrl = 'http://localhost:8082/v1/api/login';
                const response = await fetch(`http://localhost:8082/v1/api/login`, requestOptions)
                console.log(response)
                if (response.status !== 200) {
                    setErrors("Login failed");
                } else {
                    // const responseJSon = await response.json();
                    // console.log(responseJSon);
                    // setIsSubmitting(true);
                    callback();
                }
            }
            fetchLogin();
        }
    }

    // useEffect(() => {
    //     if (Object.keys(errors).length === 0 && isSubmitting) {
    //         callback();
    //     }
    // }, []);

    return { handleChange, values, handleSubmit, errors };
};

export default useForm;