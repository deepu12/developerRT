Project = new Mongo.Collection("project");

Project.attachSchema(new SimpleSchema({
   name : {
      type : String,
      label : "Title",
      max : 50
   },
   description : {
      type : String,
      label : "Description",
      max : 140
   },
   // workspaceId : {
   //    type : String,
   //    autoValue : function(){return }
   // },
   createdAt : {
      type : Date,
      autoValue : function(){return new Date()}
   },
   userId : {
      type : String,
      autoValue : function(){return Meteor.userId()}
   },
   visibility : {
      type : String,
      default : "Private"
   },
}));
