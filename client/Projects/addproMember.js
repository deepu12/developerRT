Template.addproMember.helpers({
   addMember : function(){
      var aproMem = Project.findOne(this.projectId);
      return aproMem;
   }
});
Template.addproMember.onCreated(function(){
   var self = this;
   this.autorun(function(){
      self.subscribe("project", Meteor.userId());
   })
});
// Template.addproMember.events({
//    'click #btn-click' : function(event){
//       var btUpdate = Project.update(this.projectId,{
//          $addToSet : {
//             'members.$.memberName' : event.target.memberName.value,
//             'members.$.memberRole' : event.target.memberRole.value
//          },
//       })
//    }
// });
