Template.workspace.helpers({
   workSp : function(params){
      console.log("This is my workspace Id : ",this.workspaceId);
      myworkSpace = WorkSpace.findOne(this.workspaceId);
      return myworkSpace;
   }
})
