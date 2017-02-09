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

    export class AddBeerController {
        public beer;

        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {
        }

        public addBeer() {
            this.$http.post("/api/beers", this.beer).then((response) => {
                this.$state.go("home");
            });
        }
    }

    export class EditBeerController {
        public beer;

        constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService, private $stateParams: ng.ui.IStateParamsService) {
            let beerId = this.$stateParams["id"];
            this.$http.get("/api/beers/" + beerId).then((response) => {
                this.beer = response.data;
            });
        }

        public editBeer() {
            this.$http.post("/api/beers", this.beer).then((response) => {
                this.$state.go("home");
            });
        }
    }

    export class AboutController {
        public beer;

        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService) {
            let beerId = this.$stateParams["id"];
            this.$http.get("/api/beers/" + beerId).then((response) => {
                this.beer = response.data;
            });
        }

        public editBeer(id: number) {
            this.$state.go("editBeer", { id });
        }

        public deleteBeer(id: number) {
            this.$http.delete("/api/beers/" + id).then((response) => {
                this.$state.go("home");
            });
        }
    }

}
