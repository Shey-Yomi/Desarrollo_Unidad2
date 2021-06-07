import React from 'react';
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
    
    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues : props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onsubmit = (data, e) => {
        console.log(data)

        data.id = props.currentUser.id        
        props.updateUser(props.currentUser.id, data)
        
        //Limpiar caja
        e.target.reset();
    }

    return ( 
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
            <div>
                <span className="text-danger">
                    {errors?.username?.message}
                </span>
            </div>
            <button>Edit User</button>
        </form>
     );
}
 
export default EditUserForm;