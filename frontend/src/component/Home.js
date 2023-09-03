import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {motion as m } from "framer-motion"

const Home = () => {

    const [form, setForm] =useState({});

    // const [users, setUsers] =useState([])
    const handleInputs =(e)=>{

        setForm({
            ...form,[e.target.name]:e.target.value
        })
        console.log( form)

    }

    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
    
        e.preventDefault();

        const response = await fetch('http://localhost:8080/demo',{
            method:'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        navigate("/thanks");
        
        
    }
    
  


// get data from database to frontend

    // const getUsers = async () =>{
    //     const response = await fetch('http://localhost:8080/demo',{
    //         method:'GET',
    //     })
    //     const data = await response.json();
    //     setUsers(data);

    // }

    // useEffect(()=>{
    //     getUsers();

    // },[])

  return (
    <>
    < m.div 
        initial = { {opacity:0}}
        animate ={{opacity:1}}
        exit = {{opacity:0}}
        className='   flex justify-center items-center h-full w-full bg-gradient-to-b from-black  via-black to-gray-800 '>
            <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <form onSubmit={handleSubmit} className=' bg-white rounded-lg '>
                    <div className=' flex justify-center items-center p-2'>
                        <img src='https://effizient.ca/assets/img/logo.png' alt=""/>
                    </div>
                    <div className=' flex flex-col justify-center   md:gap-10 p-8 md:flex-row '>
                        
                    <div>
                        <div className=' pb-2'>
                            <label className=' block text-sm pb-2'>Full Name</label>
                            <input type='text' placeholder='Full name' name='name' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2'/>
                        </div>
                        <div className='pb-2'>
                            <label className=' block text-sm pb-2'>Email</label>
                            <input type='email' placeholder='Email' name='email' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                        </div>
                        <div className='pb-2'>
                            <label className=' block text-sm pb-2'>Age</label>
                            <input type='number' name='age' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                        </div>
                        <div className='pb-2'>
                            <label className=' block text-sm pb-2'>Highest Level of Education</label>
                            <select type='text'  name='education' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' >
                                <option>Select</option>
                                <option>Grade 12</option>
                                <option>Diploma</option>
                                <option>Bachelors Degree</option>
                                <option>Master Degree</option>
                                <option>Phd</option>
                            </select>
                        </div>
                        <div className='pb-2'>
                            <label className=' block text-sm pb-2'>Institute where you completed your highest level of education</label>
                            <input type='text' name='location' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                        </div>
                        <div className='pb-2'>
                            <label className=' block text-sm pb-2'> What did you study?</label>
                            <input type='text'  name='stream' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                        </div>
                        <div className='pb-2'>
                            <label className=' block text-sm pb-2'> Do you have any relevant work experience?</label>
                            <input type='text'  name='experience' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                        </div>
                    </div>
                        
                    <div>
                        
                        <div className='pb-2'>
                            <label className=' block text-sm pb-2'> What institute did you get admitted to in Canada?</label>
                            <input type='text'  name='institute' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                        </div>
                        <div className='pb-2'>
                            <label className=' block text-sm pb-2'> What is your program of study in Canada?</label>
                            <input type='text'  name='program' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                        </div>
                        <div className='pb-2'>
                            <label className=' block text-sm pb-2'> Which country are you applying from?</label>
                            <input type='text'  name='country' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                        </div>
                        <div className='pb-2'>
                            <label className=' block text-sm pb-2'> What are your future goals?</label>
                            <input type='text'  name='goal' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                        </div>
                        <div className='pb-2'>
                            <label className=' block text-sm pb-2'> English Scores - Listening </label>
                            <input type='number'  name='Listening' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                        </div>
                        <div className='pb-2'>
                            <label className=' block text-sm pb-2'> English Scores - Reading</label>
                            <input type='number'  name='reading' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                        </div>
                        <div className='pb-2'>
                            <label className=' block text-sm pb-2'> English Scores - Speaking</label>
                            <input type='number'  name='speaking' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                        </div>
                    </div>

                    <div>
                        
                    <div className='pb-2'>
                        <label className=' block text-sm pb-2'> English Scores - Writing</label>
                        <input type='number'  name='writing' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                    </div>
                    <div className='pb-2'>
                        <label className=' block text-sm pb-2'> Did you pay your first year tuition?</label>
                        <input type='radio' value='Yes'  name='tuition' onChange={handleInputs}  className='  border rounded-sm border-teal-400 px-2' />
                        <label className=' px-1'>Yes</label>
                        <input type='radio' value='No' name='tuition' onChange={handleInputs} className='  border rounded-sm border-teal-400 px-2' />
                        <label className=' px-1'>No</label>
                    </div>
                    <div className='pb-2'>
                        <label className=' block text-sm pb-2'> How much tuition fee did you pay?</label>
                        <input type='number'  name='pay' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                    </div>
                    <div className='pb-2'>
                        <label className=' block text-sm pb-2'> Did you do a GIC? </label>
                        <input type='radio' value='Yes' name='gic' onChange={handleInputs} className='  border rounded-sm border-teal-400 px-2' />
                        <label className=' px-1'>Yes</label>
                        <input type='radio' value='No'  name='gic' onChange={handleInputs} className=' mx-1  border rounded-sm border-teal-400 px-2' />
                        <label className=' mx-1'>No</label>
                    </div>
                    <div className=''>
                        <label className=' block text-sm pb-2'>  How much did you pay towards GIC? </label>
                        <input type='number'  name='amount' onChange={handleInputs} required className='  border rounded-sm border-teal-400 px-2' />
                    </div>
                        </div>
                    </div>

                    <div className='flex p-5 md:p-0  '>
                        <div className='pb-5 sm:pb-10 px-5 md:px-10'> 
                            <label className=' block text-sm pb-2'>Terms of Services</label>
                                <div className=' flex items-center gap-2'>
                                    <input type='checkbox' onChange={handleInputs} required/>
                                    <p className=" text-sm text-gray-500">I agree to the terms and condition </p>
                                </div>
                        </div>
                        <div className=' flex justify-center items-center md:px-28 pb-5 sm:pb-10'>
                            <button type='submit' className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-3 py-1 mx-auto flex items-center rounded-md hover:scale-110 duration-300 md:px-6 md:py-2 '>Submit</button>
                        </div>                  
                    </div>

                </form>
            </div>
    </m.div>
    </>
  )
}

export default Home