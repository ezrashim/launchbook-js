// Exercise: Find the top navbar by query for the element type, which is <nav>.
document.getElementsByTagName("nav")[0];
// Exercise: Find the sidebar on the right by using it's id.
document.getElementById('sidebar-right');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
document.getElementsByClassName('pages');
document.getElementsByClassName('groups');
// Exercise: Find all of the comments on the page.
document.getElementsByClassName('comments');
// Exercise: Find the first comment on the page.
document.getElementsByClassName('comments')[0];
// Exercise: Find the last comment on the page.
var comments = document.getElementsByClassName('comments')
var lastCommentsIndex = comments.length -1;
comments[lastPostIndex];
// Exercise: Find the fourth comment on the page.
document.getElementsByClassName('comments')[3];
// Exercise: Find one of the ads in the sidebar and hide them.
var adsFind = document.getElementsByClassName('ad-slot')[0];
adsFind.style.visibility = "hidden";
// Exercise: Set the visibility to the form that you hid in the previous step to make it visible again.
var adsFind = document.getElementsByClassName('ad-slot')[0];
adsFind.style.visibility = "visible";
// Exercise: Use setAttribute to change src attribute of one of the ads in the sidebar.
var adImage = document.getElementsByClassName('ad-slot')[0];
var img = adImage.getElementsByTagName('img')[0];
img.setAttribute('src', 'http://placebear.com/200/300');
// Exercise: Find Sam's post and change it's text to something incredible.
var posts = document.getElementsByClassName('posts');
var samPost = posts[0].getElementsByClassName('post media')[3];
var samMessage = samPost.getElementsByClassName('media-body')[0];
var samSentence = samMessage.getElementsByTagName('p')[0];
samSentence.innerHTML = "The life of a programmer is that of constant failure and infinite progress.";
// Exercise: Find the first post and add the .post-liked class to it.
var liked = document.getElementsByClassName('post')[0];
var postLiked = liked.getElementsByTagName('a')[0];
postLiked.className = postLiked.className + " post-liked"
// Exercise: Find the second post and remove the .post-liked class.
var liked = document.getElementsByClassName('post')[0];
var postLiked = liked.getElementsByTagName('a')[0];
postLiked.classList.remove('post-liked');
