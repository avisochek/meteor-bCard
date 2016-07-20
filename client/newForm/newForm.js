import { Template } from 'meteor/templating';
import './newForm.html'
Template.newform.helpers({
  'submit form': (event, template) => {
    event.preventDefault();


    const firstName = template.find("#firstName").value;
    const lastName = template.find("#lastName").value;
    const Quote = template.find("#Quote").value;
    const Gender = template.find("#gender").value;
    const githublink = template.find("#githubLink").value;
    console.log(firstName);
  }
});
