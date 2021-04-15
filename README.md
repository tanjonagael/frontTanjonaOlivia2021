# AssignmentApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



##DOCUMENTATION DU PROJET FRONTEND DU PROJET ASSIGNMENTS
	1-Pour tourner le projet sur votre machine, il faut cloner les sources sur github.
	
	2-Faire un nmp install sur le projet et après: 
		*ng build et npm start pour le lancer
		
	3-FONCTIONNALITE
		
			-Login
				Authentification(signIn) : pour accéder au page d'accueil de l'application 
				Inscription(signUp) : ajout d'un nouveau utilisateur
					Role d'utilisateur:
						SUPER USER: accès à tous les actions dans l'application.
						USER : pas accès sur la modification des assignments.
						
					Contrainte : username et password unique dans la base
					
					
			-Page d'accueil
				Menu : contient les liens pour la liste et l'ajout d'assignment,et le compte d'utilisateur connécté
					*List
					*Add
					*icon user
					
				List d'assignment: diviser en deux onglets
					*Rendu 
						Liste paginé des assignments rendus qui a de note.
							Pour chaque assignment:
								-icon visibility dirige vers son detail
								-icon delete pour supprimer cet assignment avec un confirmation
								
					*Non rendu
						Liste paginé des assignments non rendus qui n'a  pas de note.
							Pour chaque assignment:
								-Bouton edit : pour editer cet assignment
									Non cliquable pour l'utilisateur qui a un role "USER" dans la base.
								-Bouton delete : pour supprimer cet assignment
					
					
			-Ajouter nouveau
				Accéder à partir de "Add" sur le menu.
				Contrainte dans l'ajout:
					-Validation de formulaire
					-Champ note : non obligatoire , si le note est renseigné, alors l'assignment est rendu par contre l'assignment est non rendu.
					
					
			-Edit assignment
				Editer les assignments non rendu : ajouter de note et la date de rendu
				
				
			-Detail assignment
				Page qui montre les détails correspond à un assignment déjà rendu.
				
			-Profil utilisateur
				Accéder depuis le fullname de l'utilisateur dans l'icon compte du menu.
				Affiche les informations correspond à cet utilisateur connécté.
				
			-Logout
				Accéder depuis le bouton Logout dans l'icon compte du menu.
				Déconnexion automatique si l'expiration de token d'authentification est atteint.
				
	4-BIOBLIOGRAPHIE
		Lien des documents pour quelques éléments dans l'application.
			login
			https://bbbootstrap.com/snippets/animated-login-and-sign-up-form-59406852 : Date 20/03/2021

			Debbug jwt :25/03/2021
			decode token : https://stackoverflow.com/questions/48075688/how-to-decode-the-jwt-encoded-token-payload-on-client-side-in-angular/48288112#48288112
			jwt node  : https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/

			jwt front : https://www.techiediaries.com/angular/jwt-authentication-angular-9-example/#:~:text=A%20JWT%20token%20is%20simply,apps%20like%20sessions%20and%20cookies.
			config jwt module : https://stackoverflow.com/questions/62995360/type-is-not-assignable-to-type-jwtconfig

			date : 26/03/2021
			https://www.npmjs.com/package/bcryptjs : install cryptage mdp
			validation form inspiration: https://www.concretepage.com/angular-2/angular-2-4-minlength-and-maxlength-validation-example
			https://jasonwatmore.com/post/2018/11/07/angular-7-reactive-forms-validation-example

			02/04/2021
			Template user : https://www.egrappler.com/edmin/index.html

			09/04/2021
			pagination avec rendu ou non_rendu: https://www.npmjs.com/package/mongoose-aggregate-paginate
			https://www.ganatan.com/tutorials/lazy-loading-avec-angular

			12/04/2021
			pagination front : https://www.remotestack.io/angular-server-side-pagination-with-ngx-pagination-example/

			13/04/2021
			jointure : https://docs.mongodb.com/manual/core/aggregation-pipeline-optimization/

			dialogConfirmation
			https://stackblitz.com/edit/mat-dialog-example-delete-confirm-4ygtyz?file=app%2Fconfirmation-dialog.component.ts

	
