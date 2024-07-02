class ProdutosJson {
    
    comprarTresprodutos() {

        //PRIMEIRO PRODUTO
        cy.get('.post-2559 > .product-block').click();
        
        cy.wait(300)
        cy.get('.button-variable-item-S').click();
        cy.wait(300)
        cy.get('.button-variable-item-Green').click(); 
        cy.wait(300) 
        cy.get('.input-text').clear().type(2);
        cy.wait(300)
        
        cy.get('.single_add_to_cart_button').click();
        cy.wait(300)

        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2)').click();
        
        //SEGUNDO PRODUTO
        cy.get('.post-3111 > .product-block').click();

        cy.wait(300)
        cy.get('.button-variable-item-S').click();
        cy.wait(300)
        cy.get('.button-variable-item-Black').click(); 
        cy.wait(300) 
        cy.get('.input-text').clear().type(2);
        cy.wait(300)
        
        cy.get('.single_add_to_cart_button').click();
        cy.wait(300)

        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(2) > a').click();

        //TERCEIRO PRODUTO
        cy.get('.post-3073 > .product-block').click();

        cy.wait(300)
        cy.get('.button-variable-item-32').click();
        cy.wait(300)
        cy.get('.button-variable-item-Blue').click(); 
        cy.wait(300) 
        cy.get('.input-text').clear().type(2);
        cy.wait(300)
        
        cy.get('.single_add_to_cart_button').click();

        cy.wait(300)
        cy.get('.woocommerce-message').should('contain', '2 × “Aether Gym Pant” foram adicionados no seu carrinho.');
        
        cy.wait(300)
        cy.get('.sub-title').should('contain', '334');

    }
}

export default new ProdutosJson()