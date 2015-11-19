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
   platform : {
      type : String,
      allowedValues: ['java', 'meteor','php','ruby','javascript','python'],
      autoform: {
         options: [
            {label: "Java", value: "java"},
            {label: "Meteor", value: "meteor"},
            {label: "PHP", value: "php"},
            {label: "Ruby", value: "ruby"},
            {label: "javascript", value: "javascript"},
            {label: "Python", value: "python"}
         ]}

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
      type: String,
      allowedValues: ['public', 'private'],
      autoform: {
         options: [
            {label: "Public", value: "public"},
            {label: "Private", value: "private"}
         ]}
   },
   userName : {
      type : String,
      autoValue : function(){return Meteor.user().username}
   }
}));
