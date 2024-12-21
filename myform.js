// export default function MyForm() {
//     return (
//         <form>
//             <label>Enter your name:
//                 <input type="text" />

//             </label>
//         </form>

//     )
// }

// ?handling the forms by using the onChange eventhandler

// import{useState} from 'react';
// export default function MyForm(){
//     const[name,setname]=useState("")
//     return(
//         <form>
//             <label>Enter your name:
//                 <input 
//                 type= "text" 
//                 value={name}
//                 onChange={(e) => setname(e.target.value)}
//                 />

//             </label>
//         </form>
//     )

// }

// ?react submitting the forms


// import { useState } from 'react';
// export default function MyForm() {
//     const [name, setname] = useState("")

//     const handleSubmit = (Event) => {
//         Event.preventDefault();
//         alert(`the name you entered was: ${name}`)
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>Enter your name:
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setname(e.target.value)}
//                 />

//             </label>
//             <input type="submit" />
//         </form>
//     )

// }

import { useState } from 'react';
import './myform.css'
export default function MyForm() {
    const [inputs, setInputs] = useState({})

    const handleChange = (Event) => {
        const name = Event.target.name;
        const value = Event.target.value;
        setInputs(values => ({ ...values, [name]: value }))

    }
    const handleSubmit = (Event) => {
        Event.preventDefault();
        alert(inputs)
    }
    return (
        <form onSubmit={handleSubmit} className='name'>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />

            </label>
            <div>

                <label>Enter your age:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <label>enter your email:
                <input
                    type="text"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                />

            </label>
            <input type="submit" />



        </form>
    )

}