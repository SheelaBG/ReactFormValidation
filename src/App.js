
import { useRef, useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {

  
//*1---> useState and Onchange

// const[username,setUsername]=useState("");

// console.log(username);

// return(
//   <div className='app'>
//     <form>
//     <FormInput placeholder="username" setUsername={setUsername}/>
//     <FormInput placeholder="email"/>
//     <FormInput placeholder="mobile no"/>
//     <FormInput placeholder="password"/>
//     </form>
  
//   </div>
// )


//*2--->we can go for useRef aswwell , it holds the value not re-render like onchange.
    //   let current=useRef(); //it takes current value

    //   const handleSubmit=(e)=>{
    //       e.preventDefault();
           // let username=current.current.value;
    //       console.log(current); //todo current-->it holds value... we can get directly on calling in handlesubmit not any place..
                                   //todo outside if we call we cant get value in console
    //   }

    // return(
    //   <div className="app">
    //     <form onSubmit={handleSubmit}>
    //     <FormInput refer={current} placeholder="username"/>//todo parent and child prop refer shouldn't be same otherwise we get error
    //     {/* <FormInput  ref={current} placeholder="email"/>
    //     <FormInput  ref={current} placeholder="password"/> */}
    //      <button>submit</button>
    //     </form>
    //     </div>
    // )

//todo---------------------------------------------------------
//*3--->FormData method  as shown below and use name attribute.

// let handleForm=(e)=>{
//   e.preventDefault();
//   let data=new FormData(e.target);
//   console.log(Object.fromEntries(data.entries()));
   
// }

//   return(
//     <div className="app">
//     <form onSubmit={handleForm}>
//     <FormInput name="username" placeholder="username"/>
//     <button>submit</button>
//     </form>
//     </div>
//   )

//*********************************************************** */
//todo ---->we r using usestate and onchange below ...


      //--->1st step to crete empty object values
      const[value,setValue]=useState(
        {
          username:"",
          email:"",
          birthdate:"",
          password:"",
          confirmPassword:""
        }
      );


      //--->3 writing again and again for every inputs attributes so we are creting object we send this as prop
      const inputs=[
        {
          id:1,
          label:"Username",
          placeholder:"username",
          name:"username",
          type:"text",
          errorMessage:"User name should be 3-16 characters and shouldn't include special characters!",
          required:true,
          pattern:"^[A-Za-z0-9]{3,16}$"
        },
        {
          id:2,
          label:"Email",
          placeholder:"email",
          name:"email",
          type:"email",
          errorMessage:"it should be valid email address!",
          required:true
        },
        {
          id:3,
          label:"BirthDate",
          placeholder:"birthdate",
          name:"birthdate",
          type:"date"
        },
        {
          id:4,
          label:"Password",
          placeholder:"password",
          name:"password",
          type:"password",
          errorMessage:"password should be 8-20 charaters and it includes atleast 1 letter, 1 number and 1 special characters !",
          required:true,
          pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
        },
        {
          id:5,
          label:"ConfirmPassword",
          placeholder:"confirmPassword",
          name:"confirmPassword",
          type:"password",
          errorMessage:"passwords don't match!",
          required:true,
          pattern:value.password
        }
      ]
  
 
      //---> 5 set values for every change using onchange
      const onChange=(e)=>{
        setValue({...value,[e.target.name]:e.target.value})
      }

      //---> 6 handle submit
      const handleSubmit=(e)=>
      {
        e.preventDefault();
       
      }
      console.log(value);

      //--->2  just call forminput and in form input take one label and one input
      //--->4  send input values as prop for child 
      return(
        <div className='app'>
          <form onSubmit={handleSubmit}>
            <h2>Register</h2>
          {inputs.map((input)=>(
              <FormInput {...input} key={input.id} value={value[input.name]} onChange={onChange}/>
              //value=value[keyName]===>value=keyValue;
          ))}
           <button>submit</button>
          
          </form>
        
        </div>
)

}
  
export default App;
