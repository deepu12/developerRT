AutoForm.hooks({
   insertFiles : {
      onError : function(insert, error){
         console.log("on Error Function"+error);
         toastr.error("File creation failed");
      },
      onSuccess : function(insert, error){
         toastr.success("File created successfully");
         FlowRouter.go('/userFolders');
      }
   },
   insertFolder : {
      onError : function(insert, error){
         toastr.error("Failed to create folder");
      },
      onSuccess : function(insert, error){
         toastr.success("Folder created successfully");
         FlowRouter.go('/userFolders');
      }
   },
   insertProject : {
      onError : function(insert, error){
         toastr.error("Failed to create project");
      },
      onSuccess : function(insert, error){
         toastr.success("Project created successfully");
         FlowRouter.go('/newProject');
      }
   },
   insertForm : {
      onError : function(insert, error){
         toastr.error("Upload failed");
      },
      onSuccess : function(insert, error){
         toastr.success("Upload Successful");
         FlowRouter.go('/dashBoard');
      }
   },
   updateProject : {
      onError : function(insert, error){
         toastr.error("Update Failed");
      },
      onSuccess : function(insert, error){
         toastr.success("Update Successful");
         FlowRouter.go('/newProject');
      }
   },
   addMembers : {
      onError : function(insert, error){
         console.log("AddMembers on error func:"+error);
         toastr.error("Failed to add members");
      },
      onSuccess : function(insert, error){
         toastr.success("Added member successfully");
         FlowRouter.go('/dashBoard');
      }
   },
   insertWorkspace : {
      onError : function(insert, error){
         toastr.error("Failed to create workspace");
      },
      onSuccess : function(insert, error){
         toastr.success("Workspace created successfully");
         FlowRouter.go('/workSpace');
      }
   },
   updateWorkspace : {
      onError : function(insert, error){
         toastr.error("Failed to update workspace");
      },
      onSuccess : function(insert, error){
         toastr.success("Workspace updated successfully");
         FlowRouter.go('/workSpace');
      }
   }
});
