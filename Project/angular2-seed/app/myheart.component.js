System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyHeartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyHeartComponent = (function () {
                function MyHeartComponent() {
                    this.iLiked = false;
                    this.numberOfLikes = 0;
                    this.change = new core_1.EventEmitter();
                }
                MyHeartComponent.prototype.onClick = function () {
                    this.iLiked = !this.iLiked;
                    this.numberOfLikes += this.iLiked ? 1 : -1;
                    this.change.emit({ newValue: this.iLiked });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MyHeartComponent.prototype, "iLiked", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MyHeartComponent.prototype, "numberOfLikes", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MyHeartComponent.prototype, "change", void 0);
                MyHeartComponent = __decorate([
                    core_1.Component({
                        selector: 'myheart',
                        template: "\n        <i \n            class=\"glyphicon glyphicon-heart\" \n            [class.highlighted]=\"iLiked\" \n            (click)=\"onClick()\">\n        </i>\n        <span>{{ numberOfLikes }}</span>\n    ",
                        styles: ["\n        .glyphicon-heart {\n            color: #ccc;\n            cursor: pointer;\n        }\n        .highlighted {\n            color: deeppink;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyHeartComponent);
                return MyHeartComponent;
            }());
            exports_1("MyHeartComponent", MyHeartComponent);
        }
    }
});
//# sourceMappingURL=myheart.component.js.map