import { useState } from "react";

function Register (){
    const [fullName,setFullName] = useState (""); //arrow function
    const changeFullName = (e)=>{ //giống như cách viết function //(e) la event
        const v= e.target.value; //lay gia tri cua input dang duoc typing
        setFullName(v);
    }
    const [email,setEmail] = useState ("");
    const changeEmail = (e)=>{
        const v= e.target.value;
        setEmail(v);
    } 
    const [password,setPassword] = useState ("");  
    const changePassword = (e)=>{ //giống như cách viết function
        const v= e.target.value; //lay gia tri cua input dang duoc typing
        setPassword(v);
    }  

    const [user,setUser] = useState (
        {
            fullName:"",
            email:"",
            password:"",
        }
    );
    const handleInput = (e)=>{ //giống như cách viết function //(e) la event
        const v= e.target.value; //lay gia tri cua input dang duoc typing
        const name = e.target.name; //lay name cua input
        setUser({...user,[name]:v});
    }

    const formSubmit = (e)=>{
        e.preventDefault(); // chặn form không submit kiểu truyền thống
            //VD: xu ly du lieu de gui len backend bang API
        if(confirm("Xac nhan gui thong tin")){
            alert("Da gui thanh cong");
        }else{
            alert("Khong gui...");
        }
    }

    return (
        <div className="container">
            <h1>Register Page</h1>
            <h2>Full name:{fullName}</h2>
            <h2>email: {email}</h2>
            <h2>password: {password}</h2>
            <form onSubmit={formSubmit} form action="#" method="post">
                <div className="mb-3">
                    <label>Full name</label>
                    <input onChange={changeFullName} type= "text" value={fullName} name="fullName" className="form-control"/>
                </div>

                 <div className="mb-3">
                    <label>Full name</label>
                    <input onChange={handleInput} type= "text" value={user.fullName} name="fullName" className="form-control"/>
                </div>

                 <div className="mb-3">
                    <label>Email</label>
                    <input onChange={changeEmail} type= "email" value={email} name="email" className="form-control"/>
                </div>

                 <div className="mb-3">
                    <label>Password</label>
                    <input onChange={changePassword} type= "password" value={password} name="password" className="form-control"/>
                </div>

                 <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>


            </form>
        </div>
    )
}
export default Register;
        