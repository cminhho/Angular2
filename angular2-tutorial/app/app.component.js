"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
// @Component annotation 
var AppComponent = (function () {
    function AppComponent() {
        this.app = 'App Component!';
        this.fullName = 'abc';
        this.result = 'User Input from $event Object';
        this.clickedItem = 'App Component!';
        this.fullName = 'Chung Ho';
        this.phoneNumber = 0906246489;
        this.active = true;
        this.selectedItem = 'Binding User Input';
        this.product = { id: 'p01', name: 'Product 1', price: 10 };
        this.products = [
            { id: 'p01', name: 'Product 1', price: 10 },
            { id: 'p02', name: 'Product 2', price: 11 },
            { id: 'p03', name: 'Product 3', price: 12 }
        ];
    }
    AppComponent.prototype.onClick = function () {
        this.clickedItem = 'Clicked!';
    };
    AppComponent.prototype.clickMe = function (event) {
        alert('Click me!');
    };
    AppComponent.prototype.onItemClicked = function (product) {
        this.app = product.name;
    };
    AppComponent.prototype.display1 = function () {
        return 'Display 1';
    };
    AppComponent.prototype.display2 = function (fullName) {
        return 'Hi ' + fullName;
    };
    AppComponent.prototype.display3 = function (event) {
        this.result = event.target.value;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app',
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map