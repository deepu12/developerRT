Meteor.subscribe("workspace");
Template.userWorkspace.helpers({
   wSpace : function(){
      var ws = WorkSpace.find({userId : Meteor.userId()});
      return ws;
   }
});
