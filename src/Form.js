import React, { useState } from "react";
import "./Form.css";
import {useDispatch,useSelector} from 'react-redux'
import { addUser } from "./redux/actions";
import {useNavigate} from 'react-router-dom'
import { useLocation } from "react-router-dom";





const Form = () => {


	const {state} = useLocation();
	const { name, id } = state;

	const initialValue={
		name,
		id,
		training:'',
		email:''
	
	}


	const navigate = useNavigate()
	const myState = useSelector((state)=>state.add)
	const dispatch = useDispatch()

	const [formData, setFormData] = useState(initialValue)

	const handleChange = (e) =>{
			setFormData({...formData,
			[e.target.name]: e.target.value
			
		})

		}

		


  const submitHandler = (e) => {
    e.preventDefault();
		setFormData({...formData,
			[e.name]: e.value
		})

		dispatch(addUser(formData))
		navigate('/')
  };

  return (
    <>
			<h1 className="heading">Adding Employees to the Enrolled List</h1>
      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="form-body">
            <label className="form__label" htmlFor="name">
              Employee Name:
            </label>
            <input name="name" className="form_input" type="text" value={name} readOnly ></input>
            <br />
            <label className="form__label" htmlFor="id">
              Employee ID:
            </label>
            <input name="id" type="text" className="form_input" value={id} readOnly ></input>
            <br />
            <label className="form__label" htmlFor="training">
              Training Name:
            </label>
            <input
              name="training"
              type="text"
              className="form_input"
              placeholder="Enter training name"
							required
							onChange={handleChange}
            ></input>
            <br />
            <label className="form__label" htmlFor="email">
              Employee Email:
            </label>
            <input
              name="email"
              type="email"
              className="form_input"
              placeholder="Enter email here"
							required
							onChange={handleChange}
            ></input>
            <br />
          </div>
          <button type="submit" className="footer">
            Enroll For Training
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
