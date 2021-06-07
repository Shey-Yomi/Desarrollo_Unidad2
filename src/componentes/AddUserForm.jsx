import React, {Fragment} from 'react';
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
    const { register, handleSubmit, errors } = useForm();

    const onsubmit = (data, e) => {
        console.log(data)
        props.addUser(data)
        //Limpiar caja
        e.target.reset();
    }

    return ( 
        <Fragment>
            <form onSubmit={handleSubmit(onsubmit)}>
                <label>Name:</label>
                <input type="text" name="name"
                ref={
                    register({
                        required: {
                            value: true,
                            message: 'Campo obligatorio'
                        },
                    })
                }/>    
                <span className="text-danger">
                        {errors?.name?.message}
                </span>
                <label>UserName:</label>
                <input type="text" name="username"
                ref={
                    register({
                        required: {
                            value: true,
                            message: 'Campo obligatorio'
                        },
                    })
                }/>    
                <span className="text-danger">
                        {errors?.name?.message}
                </span>
                <button>Add new User</button>
            </form>
        </Fragment>
     );
}
 
export default AddUserForm;