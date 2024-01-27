function ToggleEditSave() {
    if (document.getElementById('post_text').getAttribute("contentEditable") === "true") {
        document.getElementById('post_text').setAttribute("contentEditable", "false");
        document.getElementById('post_heading').setAttribute("contentEditable", "false");
        document.getElementById('post_text').style.border = "none";
        document.getElementById('post_heading').style.border = "none";
        document.getElementById('post_author_button').innerHTML = "Edit<i class='fa fa-edit'></i>";
    } else {
        document.getElementById('post_text').setAttribute("contentEditable", "true");
        document.getElementById('post_heading').setAttribute("contentEditable", "true");
        document.getElementById('post_text').style.border = "2px solid purple";
        document.getElementById('post_heading').style.border = "2px solid purple";
        document.getElementById('post_author_button').innerHTML = "Save<i class='fa fa-save'></i>";
    }
}

var Likes = 0;

function likePost() {
    document.getElementById("likeBtn").innerHTML = "<i class='fa fa-thumbs-up'></i>Liked";
    Likes += 1;
    if (Likes !== 0) {
        if (Likes == 1) {
            document.getElementById('likesCount').innerHTML = Likes + " person likes this!";
        } else {
            document.getElementById('likesCount').innerHTML = Likes + " people like this!";
        }
    }
}

function addComment() {
    var comment = document.getElementById('commentText').value;
    var temp = document.createElement("div");
    temp.innerHTML = "<br>"
    temp.style.backgroundColor = "#fff";
    temp.style.margin = "10px 10px 10px 10px";
    temp.style.padding = "0 20px 20px 10px";
    var textnode = document.createTextNode(comment);
    temp.appendChild(textnode);

    if (comment === "") {
        alert("Please add a comment!");
    } else {
        var latestComment = document.getElementById("allCommentsBox");
        latestComment.style.display = "block";
        latestComment.insertBefore(temp, latestComment.childNodes[0]);
        document.getElementById('commentText').value = "";
    }
}