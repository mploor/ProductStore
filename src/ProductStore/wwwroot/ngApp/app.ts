namespace ProductStore {

    angular.module('ProductStore', ['ui.router', 'ngResource', 'ui.bootstrap', 'ui.filters']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: ProductStore.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about/:id',
                templateUrl: '/ngApp/views/about.html',
                controller: ProductStore.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}
