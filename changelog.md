# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] 
- Created FirstComponent.

- Created ProductComponent. 
 
- Created ProductsService. 

- Created CartListComponent. 
 
 
------
 
1. The application is divided into several modules and connect them to the AppModule:
• AppModule,
• basket module,
• Products module,
• Order module,
• SharedModule (what is used many times: components, directives, pipes)

2. Modified ProductListComponent that delegates the display of a list of products
ProductComponent. Provide goods to the component using the getProducts() method
Product Service.
3. Implemented the ability to add a product to the cart (click), if the product is available (sign
available. You do not need to enter the quantity of available goods). Add item button
place in the ProductComponent component. Item must be added to cart
ProductListComponent. ProductComponent implement as presentational component with inputs
and outputs without dependencies. If the product is not available, make the button unavailable.

 
4. Modified the CartService. Add:
• totalCost - to calculate the total amount of items in the cart.
• totalQuantity - to calculate the total number of items in the cart.
Implement as a method or as a getter.

5. Modified CartListComponent, which displays a list of purchased items. Beyond the list
items purchased, display the number of items purchased and the total amount using totalCost,
totalQuantity
 
6. The СartItemComponent component has been created, which displays one entity from the list above.
Used this component in CartListComponent. Implement features:
• onQuantityIncrease/onQuantityDecrease - change the quantity of goods (increase/decrease),
• onDeleteItem - delete an item from the cart.
 

7. Added <h1 #appTitle></h1> element with a template variable to the AppComponent markup.
@ViewChild and ElementRef<HTMLHeadingElement> used, access DOM element
template, set the title for the application from the class in the component's lifecycle method
ngAfterViewInit().

 8. When hovering the mouse over a product in the cart (CartItemComponent), they are styled by changing it
background. To do this, create a HighlightDirective directive and register it in the SharedModule.
Use @HostBinding, @HostListener decorators.