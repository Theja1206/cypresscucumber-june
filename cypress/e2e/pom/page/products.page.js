class Productspage
{
    get lnkjckt(){
        return cy.contains('Sauce Labs Fleece Jacket')}
    
selectjacket(){ this.lnkjckt.click()}


}

export default new Productspage()