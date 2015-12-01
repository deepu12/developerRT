FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("appLayout", {content: "home"});
  }
});
FlowRouter.route('/newProject', {
   triggersEnter: [checkLoggedIn],
   action : function(){
      BlazeLayout.render("appLayout", {content : "newProject"});
   }
});
FlowRouter.route('/workspace',{
   triggersEnter: [checkLoggedIn],
   action : function(){
      BlazeLayout.render("appLayout",{content : "newWorkspace"});
   }
});
FlowRouter.route('/newProject',{
   triggersEnter: [checkLoggedIn],
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
   triggersEnter: [checkLoggedIn],
   action : function(params){
      BlazeLayout.render("appLayout", {content : "workspace" , params : params})
   }
});
FlowRouter.route('/projects/:projectId', {
   triggersEnter: [checkLoggedIn],
   action : function(params){
      BlazeLayout.render("appLayout",{content : "editProject", params: params})
   }
});
FlowRouter.route('/projects/addMember/:projectId',{
   triggersEnter: [checkLoggedIn],
   action : function(params){
      BlazeLayout.render("appLayout", {content : "addproMember", params:params})
   }
});
FlowRouter.route('/insertDoc',{
   triggersEnter: [checkLoggedIn],
   action : function(){
      BlazeLayout.render("appLayout", {content : "doc"})
   }
});
FlowRouter.route('/createFolder',{
   triggersEnter: [checkLoggedIn],
   action : function(){
      BlazeLayout.render("appLayout",{content : "createFolder"})
   }
});
FlowRouter.route('/addFiles/:folderId',{
   triggersEnter: [checkLoggedIn],
   action : function(params){
      BlazeLayout.render("appLayout",{content : "addFiles", params : params })
   }
});
FlowRouter.route('/userFolders',{
   triggersEnter: [checkLoggedIn],
   action : function(){
      BlazeLayout.render("appLayout", {content : "userFolders"})
   }
});
FlowRouter.route('/signin',{
   triggersEnter : [redirectIfLoggedIn],
   action : function(){
      BlazeLayout.render("signin", {content : "signin"})
   }
});

function checkLoggedIn (ctx, redirect) {
  if (!Meteor.userId()) {
    redirect('/signin')
  }
}

function redirectIfLoggedIn (ctx, redirect) {
  if (Meteor.userId()) {
    redirect('/')
  }
}
