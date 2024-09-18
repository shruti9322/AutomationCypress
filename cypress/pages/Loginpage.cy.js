export class LoginPage {

    //locator
    weblocators = {
        or_UserName:"input[placeholder='Username']",
        or_Password:"input[placeholder='Password']",
        or_login: "button[type='submit']"
    }

    OpenURL()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    //action
    Enter_Username(userName){
        cy.get(this.weblocators.or_UserName).type(userName);
    }
    Enter_Password(Upass){
        cy.get(this.weblocators.or_Password).type(Upass);
    }

    click_login(){
        cy.get(this.weblocators.or_login).click();
    }
}