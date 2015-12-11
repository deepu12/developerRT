Template.addFiles.helpers({
   aFiles : function(params){
      console.log("This is my folder Id:",this.folderId);
      var af = Folders.findOne(this.folderId);
      return  af._id ;
   }
});
Template.addFiles.events({
   'click [name=option]' : function(){
          var test = $(this).val();
          console.log("in test:"+test);
          $("div.add").hide();
          $("#" + test).show();
   }
});
Template.addFiles.onCreated(function(){
   Meteor.subscribe("folders");
});
Template.addFiles.onRendered(function(){
      //  $("div.add").hide();

});
