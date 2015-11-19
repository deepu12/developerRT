WorkSpace = new Mongo.Collection("workspace");

WorkSpace.attachSchema(new SimpleSchema({
   name : {
      type : String,
      label : "Name",
      max : 20
   },
   userId : {
      type : String,
      label : "User Id",
      autoValue : function(){return Meteor.userId()}
   },
   role : {
      type : String,
      label : "Role",
      defaultValue : "Admin"
   },
   userName : {
      type : String,
      label : "Created by",   
      autoValue : function(){
         var user = Meteor.user();
         username = user.username;
         return username;
      }
   },
   createdAt : {
      type : Date,
      label : "Created at",
      autoValue : function(){return new Date()}
   }
}));
