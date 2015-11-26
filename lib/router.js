FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("appLayout", {content: "home"});
  }
});
FlowRouter.route('/newProject', {
   action : function(){
      BlazeLayout.render("appLayout", {content : "newProject"});
   }
});
FlowRouter.route('/workspace',{
   action : function(){
      BlazeLayout.render("appLayout",{content : "newWorkspace"});
   }
});
FlowRouter.route('/newProject',{
   action : function(){
      BlazeLayout.render("appLayout", {content : "createProject"});
   }
});
FlowRouter.route('/dashBoard',{
   action : function(){
      BlazeLayout.render("appLayout", {content : "dashBoard"});
   }
});
FlowRouter.route('/workspace/:workspaceId',{
   action : function(params){
      BlazeLayout.render("appLayout", {content : "workspace" , params : params})
   }
});
FlowRouter.route('/projects/:projectId', {
   action : function(params){
      BlazeLayout.render("appLayout",{content : "editProject", params: params})
   }
});
FlowRouter.route('/projects/addMember/:projectId',{
   action : function(params){
      BlazeLayout.render("appLayout", {content : "addproMember", params:params})
   }
});
FlowRouter.route('/insertDoc',{
   action : function(){
      BlazeLayout.render("appLayout", {content : "doc"})
   }
});
FlowRouter.route('/createFolder',{
   action : function(){
      BlazeLayout.render("appLayout",{content : "createFolder"})
   }
})
