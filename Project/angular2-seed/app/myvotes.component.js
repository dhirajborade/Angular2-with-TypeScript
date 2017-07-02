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
    var MyVotesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyVotesComponent = (function () {
                function MyVotesComponent() {
                    this.voteCount = 0;
                    this.myVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                MyVotesComponent.prototype.upVote = function () {
                    if (this.myVote == 1) {
                        return;
                    }
                    this.myVote++;
                    this.vote.emit({ myVote: this.myVote });
                };
                MyVotesComponent.prototype.downVote = function () {
                    if (this.myVote == -1) {
                        return;
                    }
                    this.myVote--;
                    this.vote.emit({ myVote: this.myVote });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MyVotesComponent.prototype, "voteCount", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], MyVotesComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], MyVotesComponent.prototype, "vote", void 0);
                MyVotesComponent = __decorate([
                    core_1.Component({
                        selector: 'myvotes',
                        template: "\n        <div class=\"voter\">\n            <i \n                class=\"glyphicon glyphicon-menu-up voter-button\" \n                [class.highlighted]=\"myVote == 1\" \n                (click)=\"upVote()\">\n            </i>\n\n            <span class=\"vote-count\">{{ voteCount + myVote }}</span>\n\n            <i \n                class=\"glyphicon glyphicon-menu-down voter-button\" \n                [class.highlighted]=\"myVote == -1\" \n                (click)=\"downVote()\">\n            </i>\n        </div>\n    ",
                        styles: ["\n        .voter-button {\n            cursor: pointer;\n        }\n        .voter {\n            width: 20px;\n            color: #999;\n            text-align: center;\n        }\n        .highlighted {\n            font-weight: bold;\n            color: orange;\n        }\n        .vote-count {\n            font-size: 1.2em;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyVotesComponent);
                return MyVotesComponent;
            }());
            exports_1("MyVotesComponent", MyVotesComponent);
        }
    }
});
//# sourceMappingURL=myvotes.component.js.map