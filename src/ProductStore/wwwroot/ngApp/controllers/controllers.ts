namespace ProductStore.Controllers {

    export class HomeController {
        public beers;
        public sortBy;

        constructor(private $http: ng.IHttpService) {
            this.$http.get("/api/beers").then((response) => {
                this.beers = response.data;
            });
        }

        sortChoice(choice: string) {
            this.sortBy = choice;
        }
    }



    export class AboutController {
        public beer;

        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService) {
            let beerId = this.$stateParams["id"];
            this.$http.get("/api/beers/" + beerId).then((response) => {
                this.beer = response.data;
            });
        }
    }

}
