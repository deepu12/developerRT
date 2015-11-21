Template.addproMember.helpers({
   addMember : function(){
      var aproMem = Project.findOne(this.projectId);
      return aproMem;
   }
})
