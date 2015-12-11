Template.userProjects.helpers({
   uProjects : function(){
      var pro = Project.find({userId : Meteor.userId()});
      return pro;
   }
});

Template.userProjects.onCreated(function(){
   var self = this;
   this.autorun(function(){
      self.subscribe("project", Meteor.userId());
   })
});
