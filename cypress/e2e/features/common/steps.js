import {Given,When} from '@badeball/cypress-cucumber-preprocessor'
import loginPage from '../../pom/page/login.page'
Given('user is on a sauce Demo',() =>
{
loginPage.openUrl()
})

When('user logged in with {string} and {string}',(username,password)=>{
loginPage.login(username,password)
})