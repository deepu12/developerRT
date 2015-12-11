
Template.proMembers.helpers({
   pMembers : function(params){
      console.log("This is my project Id in pro Members:"+this.projectId);
      var pm = Project.findOne(this.projectId);
      return pm;
   }
});

Template.proMembers.onCreated(function(){
   Meteor.subscribe("project");
});
