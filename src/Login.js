import React from 'react'
import {GoogleAPI, GoogleLogin} from 'react-google-oauth'
import {useDispatch} from "react-redux"
import {isLogin} from "./todoSlice"
import { useNavigate} from "react-router-dom";
import "./App.css"
function Login() {
    const dispatch = useDispatch();
    const history=useNavigate()
    
    const func1=(e)=>{
       console.log(e,1)
    }
    const func2=(e)=>{
        console.log(e)
    }
    function testfunc(e){
        console.log(e)
        dispatch(isLogin({status:true}))
        history('/todolist');
    }
    function problemFunc(e){
        console.log(e)
    }
    return (
        <div className="loginSetup">
            <GoogleAPI 
            clientId="688333756832-ih2adk6oq0vutjeumehjdj3fa4qp4gtn.apps.googleusercontent.com"
            onUpdateSigninStatus={func1}
            onInitFailure={func2} >
            <div>
                <div className="googlebutton"><GoogleLogin onLoginFailure={problemFunc} onLoginSuccess={testfunc}/></div>
            </div>
            </GoogleAPI>
        </div>
    )
}

export default Login
