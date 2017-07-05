System.register(['angular2/core', './courses.component', './authors.component', './/mystar.component', './myheart.component', './myvotes.component', './tweet.component', './tweet.service'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, mystar_component_1, myheart_component_1, myvotes_component_1, tweet_component_1, tweet_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (mystar_component_1_1) {
                mystar_component_1 = mystar_component_1_1;
            },
            function (myheart_component_1_1) {
                myheart_component_1 = myheart_component_1_1;
            },
            function (myvotes_component_1_1) {
                myvotes_component_1 = myvotes_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tweetService) {
                    this.post = {
                        title: "Title",
                        isFavorite: true,
                        isLiked: false
                    };
                    this.tweet = {
                        title: "Title",
                        isLiked: false,
                        totalLikes: 10
                    };
                    this.votes = {
                        title: "Title",
                        myVote: 0,
                        totalVotes: 10
                    };
                    this.tweets = tweetService.getTweets();
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onLikesChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVotesChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, mystar_component_1.MyStarComponent, myheart_component_1.MyHeartComponent, myvotes_component_1.MyVotesComponent, tweet_component_1.TweetComponent],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map