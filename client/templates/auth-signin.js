var ERRORS_KEY = 'signinErrors';

Template.signin.created = function() {
  Session.set(ERRORS_KEY, {});
};

Template.signin.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
  },
  errorClass: function(key) {
    return Session.get(ERRORS_KEY)[key] && 'error';
  }
});

Template.signin.events({
        'click #facebook-login': function(event) {
            Meteor.loginWithFacebook({}, function(err){
                if (err) {
                    throw new Meteor.Error("Facebook login failed");
                }
                Router.go('home');
            });
        }
    ,
     'click #google-login': function(event) {
            Meteor.loginWithGoogle({}, function(err){
                if (err) {
                    throw new Meteor.Error("Google login failed");
                }
                Router.go('home');
            });
        }
    }
);