/*global app, $on */
(function () {
  "use strict";

  /**
   * Sets up a brand new Todo list.
   *
   * @param {string} name The name of your new to do list.
   */

  // Création d'une nouvelle Todo
  function Todo(name) {
    this.storage = new app.Store(name); // Stockage
    this.model = new app.Model(this.storage); // modèle
    this.template = new app.Template(); // modèle
    this.view = new app.View(this.template); // vue
    this.controller = new app.Controller(this.model, this.view); // contrôleur
  }

  var todo = new Todo("todos-vanillajs");

  // Fonction pour mettre à jour la vue du template au chargement de l'application en fonction des changements
  function setView() {
    todo.controller.setView(document.location.hash);
  }
  $on(window, "load", setView);
  $on(window, "hashchange", setView);
})();
