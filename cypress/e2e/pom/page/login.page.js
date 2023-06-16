class Loginpage{
get txtUsername() {return cy.get(" #user-name ")}

get txtPaasword() {return cy.get("#password")}
get btnLogin() {return cy.get("#login-button")}

openUrl()
{
     cy.visit('/')
}
 login(username,password)
 {
    this.txtUsername.type(username)
    this.txtPaaswrod.type(password)

    this.btnLogin.click()
}
}

export default new Loginpage()