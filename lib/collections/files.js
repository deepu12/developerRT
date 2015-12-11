Files = new Mongo.Collection("files");
Files.attachSchema(new SimpleSchema({
   name : {
      type : String,
      label : "File Name"
   },
   userId : {
      type : String,
      autoValue : function(){return Meteor.userId()}
   },
   parentId : {
      type : String,
   },
   createdAt : {
      type : Date,
      autoValue : function(){return new Date()}
   }
}))
