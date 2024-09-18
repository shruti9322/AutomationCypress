import { LoginPage } from "../../pages/Loginpage.cy";
import credentials from '../../fixtures/credentials.json'

//create object to access sub method action
const loginOBJ=new LoginPage();


describe('Admin Login', ()=>{
    //it method
    it('Login with valid credentials', ()=>{
        loginOBJ.OpenURL();
        loginOBJ.Enter_Username(credentials.Username);
        loginOBJ.Enter_Password(credentials.Password);
        loginOBJ.click_login();
    })
})