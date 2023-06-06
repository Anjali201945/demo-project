import { useEffect, useRef, useState } from "react";

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [password, setPassword] = useState("");

    const bgRef = useRef();

    useEffect(() => {
        if (isSubmitted) {
            bgRef.current.style.backgroundColor = "red";
        } else {
            bgRef.current.style.backgroundColor = "green";
        } 
    }, [isSubmitted]);

    function onSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
    }

    return (
        <div className="user-form" ref={bgRef}>
            <form onSubmit={(e) => onSubmit(e)}>
                <input className="form-control" name="name" type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                <input className="form-control" name="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                <input className="form-control" name="mobileno" type="number" onChange={(e) => setMobileNo(e.target.value)} placeholder="Enter mobile no" />
                <input className="form-control" name="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                <button className="form-btn" type="submit">Submit</button>
            </form>

            {
                isSubmitted &&
                <div style={{ textAlign: 'left', marginTop: "10px" }}>
                    <div>
                        <label>Username: </label>
                        <span>{name}</span>
                    </div>
                    <div>
                        <label>Email: </label>
                        <span>{email}</span>
                    </div>
                    <div>
                        <label>Mobile no: </label>
                        <span>{mobileNo}</span>
                    </div>
                    <div>
                        <label>Password: </label>
                        <span>{password}</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Form;