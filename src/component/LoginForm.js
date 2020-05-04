import React from 'react';
import {requestLogin} from "../api/loginAPI";
import {useDispatch} from "react-redux";
import {logIn, logOut} from "../actions";
import bluemarlin from "../icons/bluemarlin.png"

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (username, password) => {
        const {status, token} = requestLogin(username, password);
        if(status === 'success'){
            dispatch(logIn(username));
        }else{
            dispatch(logOut());
        }
    }

    return (
        <div className={"ui middle aligned center aligned grid"}>
            <div className={"column"}>
                <h2 className={"ui image header"}>
                    <img className={"logo"} src="/icons/bluemarlin.png"/>
                </h2>
                <form className={"ui large form"}>
                    <div className={"field"}>
                        <div className={"ui left icon input"}>
                            <input type={"text"} name={"username"} placeholder={"Enter ID"}/>
                        </div>
                    </div>
                    <div className={"field"}>
                        <div className={"ui left icon input"}>
                            <input type={"password"} name={"password"} placeholder={"Enter password"}/>
                        </div>
                    </div>

                    <button className={"ui large red forgot button"}>Forgot ID/Password?</button><br/>
                    <div className="ui horizontal divider"></div>
                    <button className={"ui large green button"} onClick={handleSubmit}>Login</button>
                </form>
                <div className={"ui message"}>
                    <button className={"ui large blue register button"}>New to us? Register!</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;