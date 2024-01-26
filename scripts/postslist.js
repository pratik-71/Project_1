var deletion_id = null

function deletePost() {
  if(deletion_id!=null){
    var mainBox = document.getElementById(deletion_id);
    if (mainBox) {
      mainBox.remove();
    }
  }
  }

function getid(id){
  deletion_id = id;
}  