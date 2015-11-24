Template.addproMember.helpers({
   addMember : function(){
      var aproMem = Project.findOne(this.projectId);
      return aproMem;
   }
});
Template.addproMember.events({
   'click #btn-click' : function(event){
      var btUpdate = Project.update(this.projectId,{
         $addToSet : {
            
         }
      })
   }
})
