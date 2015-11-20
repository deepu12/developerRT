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
      defaultValue : "Admin Developer"
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
   },
   // members : {
   //    type : [Object],
   //    label : "Members",
   //    optional : true
   // },
   'members.$.memberName' : {
      type : String,
      label : "Member user name"
   },
   'members.$.memberRole' : {
      type : String,
      label : "Assign Role",
      allowedValues: ['admin', 'developer','stakeholder','admindeveloper'],
      autoform: {
         options: [
            {label: "Admin", value: "admin"},
            {label: "Developer", value: "developer"},
            {label: "Stake Holder", value: "stakeholder"},
            {label: "Admin Developer", value: "admindeveloper"}
         ]}
      }
}));
