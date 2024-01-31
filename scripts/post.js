function ToggleEditSave() {
    var postText = document.getElementById('post_text');
    var postHeading = document.getElementById('post_heading');
    var updatedText = "UPDATED: ";
   
    if (postText.getAttribute("contentEditable") === "true") {

        postText.setAttribute("contentEditable", "false");
        postHeading.setAttribute("contentEditable", "false");
        postText.style.border = "none";
        postHeading.style.border = "none";
        document.getElementById('post_author_button').innerHTML = "Edit<i class='fa fa-edit' style='padding-left: 5px'></i>";

        if (!postText.innerHTML.startsWith(updatedText)) {
            postText.innerHTML = updatedText +"<br>"+ postText.innerText;
            postHeading.innerHTML = updatedText +  postHeading.innerText;  
        }
    } else {
 
        postText.setAttribute("contentEditable", "true");
        postHeading.setAttribute("contentEditable", "true");
        postText.style.border = "2px solid purple";
        postHeading.style.border = "2px solid purple";
        document.getElementById('post_author_button').innerHTML = "Save<i class='fa fa-save' style='padding-left: 5px'></i>";
    }
}


var Likes = 0;

function like_post() {
    document.getElementById("likebtn").innerHTML = "<i class='fa fa-thumbs-up' style='color: #ffffff;padding-right:5px'></i>Liked";
    Likes += 1;
    if (Likes !== 0) {
        if (Likes == 1) {
            document.getElementById('likesCount').innerHTML = Likes + " person likes this!";
        } else {
            document.getElementById('likesCount').innerHTML = Likes + " people like this!";
        }
    }
}



function addcomment() {
    var commentText = document.getElementById("commentText").value;
    var commentSection = document.getElementById("commentSection");

    if (commentText.trim() !== "") {
        var newComment = document.createElement("div");
        newComment.className = "post_each_comment";
        newComment.innerHTML = "<p>" + commentText + "</p>";

        var commentsBox = document.querySelector(".post_comment_box");
        commentsBox.insertBefore(newComment, commentsBox.firstChild);

        document.getElementById("commentText").value = "";
        commentSection.style.display = "block";
    }
}
