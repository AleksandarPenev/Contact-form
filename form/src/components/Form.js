import { useState } from "react"
import '../styles/Form.css'
import axios from "axios"

export const Form = () => {
    {/* Set state variable for each field in the form*/}
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    {/* Set state variable to help us check if the input fields are empty after the "Submit event" is triggered */}
    const [isSubmited, setIsSubmited] = useState(false)

    {/* Put all form data in object variable which we send to the server */}
    const formData = {name, surname, age, email, phone, subject, message}

    {/* Handle the form submission.
        e = triggered submit event 
        First: we prevent the default behavior so the page does not refresh.
        Second: we set 'isSubmited' to 'true' so we know that the submit event has been triggered and then we check (in JSX) if the input field is filled.
        Otherwise the error message will be displayed on the initial render.
        Third: we use axios to POST the data from the Form and log it trough the server*/}
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmited(true)
        
        {/*we check if all fields are filled and only then we send the data to the server*/}
        if(name && surname && age && email && phone && subject && message) {
            axios.post('http://localhost:5000/log', { formData })
        }
    }
  return (
    <div className="section__form">
        <div className="section__image"></div>
        <div className="section__content">
            <h1>Contact form</h1>
            <form onSubmit={handleSubmit}>
                <div className="form__row">
                    <div className="form__col">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} placeholder='Name' />
                        {
                            isSubmited && !name ? <span>Please fill your name.</span> : null
                            // Check if the form is submitted and if the input field is empty.
                            // Display the error message based on wether the field is empty or not.
                        } 
                    </div> 
                </div>
                <div className="form__row">
                    <div className="form__col">
                       <label htmlFor="surname">Surname:</label>
                        <input type="text" id="surname" value={surname} onChange={e => setSurname(e.target.value)} placeholder='Surname' />
                        {
                            isSubmited && !surname ? <span>Please fill your surname.</span> : null
                            // Check if the form is submitted and if the input field is empty.
                            // Display the error message based on wether the field is empty or not.
                        }
                    </div>
                </div>
                <div className="form__row">  
                    <div className="form__col">
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" value={age} onChange={e => setAge(e.target.value)} placeholder='Age'/>
                        {
                            isSubmited && !age ? <span>Please fill your age.</span> : null
                            // Check if the form is submitted and if the input field is empty.
                            // Display the error message based on wether the field is empty or not.
                        }
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__col">
                        <label htmlFor="email">Email:</label>   
                        <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
                        {
                            isSubmited && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ? <span>Please fill correctly your email.</span> : null
                            // Check if the form is submitted and if the input field is empty.
                            // Display the error message based on wether the field is empty or not.
                       }
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__col">
                        <label htmlFor="phone">Phone:</label>
                        <input type="number" id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder='Phone' />
                        {
                            isSubmited && !phone ? <span>Please fill your phone.</span> : null
                            // Check if the form is submitted and if the input field is empty.
                            // Display the error message based on wether the field is empty or not.
                        }
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__col">
                        <label htmlFor="subject">Subject:</label>
                        <select id="subject" data-testid="subject" value={subject} onChange={e => setSubject(e.target.value)}>
                            <option>Choose subject</option>
                            <option value="Subject 1">Subject 1</option>
                            <option value="Subject 2">Subject 2</option>
                            <option value="Subject 3">Subject 3</option>
                        </select>
                        {
                            isSubmited && !subject ? <span>Please fill your subject.</span> : null
                            // Check if the form is submitted and if the input field is empty.
                            // Display the error message based on wether the field is empty or not.
                        }
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__col">
                        <label htmlFor="message">Message:</label>
                        <textarea type="text" id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder='Message' />
                        {
                            isSubmited && !message ? <span>Please fill your message.</span> : null
                            // Check if the form is submitted and if the input field is empty.
                            // Display the error message based on wether the field is empty or not.
                        }
                    </div>
                </div>
                <div className="form__row">
                    <div className="form__action">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>    
    </div>
  )
}
