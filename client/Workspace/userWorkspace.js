Template.userWorkspace.helpers({
   wSpace : function(){
      var ws = WorkSpace.find({userId : Meteor.userId()});
      return ws;
   }
});

Template.userWorkspace.onCreated(function(){
   Meteor.subscribe("workspace");
});
