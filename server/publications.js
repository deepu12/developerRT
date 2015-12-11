Meteor.publish('project', function (userId){
   return Project.find({userId : userId});
});
Meteor.publish('docs', function(){
   return Docs.find();
});
Meteor.publish('folders', function(){
   return Folders.find();
});
Meteor.publish('workspace', function(){
   return WorkSpace.find();
});
Meteor.publish('files', function(){
   return Files.find();
});
