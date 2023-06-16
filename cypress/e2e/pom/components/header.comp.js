class Header
{
    get iconcart() { return cy.get('#shopping_cart_container')}

    selectcart()
    {
        this.iconcart.click()
    }
}

export default new Header()