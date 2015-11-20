Template.newProject.helpers({
   wsOptions : function(){
      return WorkSpace.find().map(function (c) {
      return {label: c.name, value: c._id};
   })
   }
})
