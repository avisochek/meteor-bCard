import { Template } from 'meteor/templating';
import './newForm.html'
Template.newForm.events({
  'submit form': (event, template) => {
    event.preventDefault();


    const firstName = template.find("#firstName").value;
    const lastName = template.find("#lastName").value;
    const quote = template.find("#quote").value;
    const gender = template.find("#gender").value;
    const githublink = template.find("#githubLink").value;
    Session.set( 'firstName', firstName);
    Session.set( 'lastName', lastName);
    Session.set( 'quote', quote);
    Session.set( 'gender', gender);
    Session.set( 'githublink', githublink);
    Router.go('/${firstName}');
  }
});
