FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("appLayout", {content: "home"});
  }
});
FlowRouter.route('/projects', {
   action : function(){
      BlazeLayout.render("appLayout", {content : "projects"});
   }
});
FlowRouter.route('/workspace',{
   action : function(){
      BlazeLayout.render("appLayout",{content : "workSpace"});
   }
});
FlowRouter.route('/newProject',{
   action : function(){
      BlazeLayout.render("appLayout", {content : "createProject"});
   }
});
FlowRouter.route('/dashboard',{
   action : function(){
      BlazeLayout.render("appLayout", {content : "dashboard"});
   }
})
