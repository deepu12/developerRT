Workspace = new Mongo.Collection("workspace");

Workspace.attachSchema(new SimpleSchema({
   name : {
      type : String,
      label : "Name",
      max : 20
   },
   userId : {
      type : String,
      autoValue : function(){return Meteor.userId()}
   },
   
}))
