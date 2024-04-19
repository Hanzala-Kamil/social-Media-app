// let url = "https://randomuser.me/api/?results=10"
// let friendimg = document.querySelector(".user")
// let usersProfile = document.querySelector(".ccrd")

// async function getApis() {
//  let req = await fetch(url);
//  let data = await req.json();
//  console.log(data);
//  friendimg.innerHTML = ""
//  usersProfile.innerHTML = "";
//     data.results.forEach((data)=>{
//         console.log(data.name);
//         friendimg.innerHTML += `
//                 <li>
//                     <img src=${data.picture.large} class="friend-img">
//                     <span>${data.name.first +" "+ data.name.last}</span>
//                 </li>
//         `
//         usersProfile.innerHTML += `
//         <div class="col-3 border border-1 p-0 my-2 ccrd">
//                         <img src=${data.picture.large}>
//                     </div>
//                     <div class="col-9 border border-1 my-2">
//                         <h4>Name : ${data.name.first +" "+ data.name.last}</h4>
//                         <h5>City : ${data.location.city}</h5>
//                         <h6>Age : ${data.registered.age}</h6>
//                         <h6>Phone : ${data.phone}</h6>
//                         <h6>Gender : ${data.gender}</h6> 
//                     </div>
//         `
//     })

// }
// getApis()

// let img = document.querySelectorAll(".img");
// let index = 0;
// let startIndex = 0;
// let numImagesToShow = 6;

// function slider() {
//     for (let i = 0; i < img.length; i++) {
//         if (i >= startIndex && i < startIndex + numImagesToShow) {
//             img[i].style.display = "block";
//         } else {
//             img[i].style.display = "none";
//         }
//     }
// }

// slider(); 




// let btn = document.getElementById("nextBtn");
// btn.addEventListener("click", function() {
//     if (startIndex + numImagesToShow < img.length) {
//         img[startIndex].style.display = "none";
//         startIndex++;
//         slider();
//     }

//     if(startIndex == img.length - numImagesToShow){
//         startIndex =0
//     }
    
// });

// document.addEventListener('DOMContentLoaded', function() {
//     let comments = [];

//     function displayComments() {
//         const container = document.getElementById('commentContainer');
//         container.innerHTML = " ";

//         comments.forEach((comment, index) => {
//             const commentElement = document.createElement('div');
//             commentElement.classList.add('comment');
//             commentElement.innerHTML += `
//                 <p class="p-style">${comment}</p>
//                 <span>
//                     <button class="Edit-btn" onclick="editComment(${index})">Edit</button>
//                     <button class="del-btn" onclick="deleteComment(${index})">Delete</button>
//                 </span>
//             `
//             container.appendChild(commentElement);
//         });
//     }

//     document.querySelector("#commentForm").addEventListener('submit', function(event) {
//         event.preventDefault();
//         const commentInput = document.querySelector("#commentInput");
//         const newComment = commentInput.value.trim();
//         if (newComment !== " ") {
//             comments.push(newComment);
//             commentInput.value = '';
//             displayComments();
//         } else {
//             alert('enter a comment.');
//         }
//     });

//     window.editComment = function(index) {
//         const newComment = prompt('Edit your comnent:', comments[index]);
//         if (newComment !== null) {
//             comments[index] = newComment.trim();
//             displayComments();
//         }
//     };

//     window.deleteComment = function(index) {
//         if (confirm('you want to delete this comment?')) {
//             comments.splice(index, 1);
//             displayComments();
//         }
//     };
// });



// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");
// MESSAGES
const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// REMOVE ACTIVE CLASS FROM ALL MENU ITEMS
const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if (item.id !== "notifications") {
            document.querySelector(".notification-popup").style.display = "none";
        } else {
            document.querySelector(".notification-popup").style.display = "block";
            document.querySelector(
                "#notifications .notification-count"
            ).style.display = "none";
        }
    });
});

// SEARCH CHAT
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();

    message.forEach((e) => {
        let name1 = e.querySelector(".message-body h5").textContent.toLowerCase();
        if (name1.indexOf(val) !== -1) {
            e.style.display = "flex";
        } else {
            e.style.display = "none";
        }
    });
};

// SEARCH CHAT
messageSearch.addEventListener("keyup", searchMessage);

// HIGHLIGHT MESSAGES CARD WHEN MESSAGES ICON IS CLICKED
messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display =
        "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 1000);
});

// Fetch Data From API

let url = "https://randomuser.me/api/?results=5";
let friendImg = document.querySelector(".feeds");

async function getApis() {
    let req = await fetch(url);
    let data = await req.json();

    friendImg.innerHTML = "";
    data.results.forEach((data) => {
        friendImg.innerHTML += `
    <div class="feeds">
    <div class="feed">
        <div class="head">
            <div class="user">
                <div class="profile-picture">
                    <img src="${data.picture.medium}" alt="">
                </div>
                <div class="info">
                    <h3>${data.name.first + " " + data.name.last}</h3>
                    <small>Lahore, 15 MINUTES AGO</small>
                </div>
            </div>
            <span class="edit">
                <i class="fa-solid fa-ellipsis"></i>
            </span>
        </div>
        <div class="photo">
            <img src="${data.picture.large}" alt="">
        </div>
        <div class="action-buttons">
            <div class="interaction-buttons">
                <span><i class="fa-solid fa-heart like-btn"></i></span>
                <span><i class="fa-regular fa-comment"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
            </div>
            <div class="bookmark">
                <span><i class="fa-regular fa-bookmark"></i></span>
            </div>
        </div>
        <div class="liked-by">
            <span><img src="../images/02.jpg" alt=""></span>
            <span><img src="../images/05.jpeg" alt=""></span>
            <span><img src="../images/07.avif" alt=""></span>
            <p>Liked by <b>${data.name.first}</b> and ${data.location.street.number
            }</p>
        </div>
        <div class="caption">
            <p><b>Lorem ipsum</b> dolor, sit amet consectetur adipisicing elit. Cum dolor 
            sequi <span class="harsh-tag">#lifestyle</span></p>
        </div>
        <div class="search-bar-1">
            <input type="search" placeholder="comment here" id="message-send">
            <i class="fa-solid fa-paper-plane"></i>
            
        </div>
        <div class="comments text-muted comment-click">
            View all 233 comments
        </div>
        <div class="comment-sec">
                        <div class="comment-box">
                                <h5 class="text-muted">Nice</h5>
                        </div>
                        <div class="comment-box">
                            <h5 class="text-muted">Good looking</h5>
                        </div>
            </div>
    </div>
</div>
`;

// LIKE BTN
const likeBtn = document.querySelectorAll(".like-btn");
likeBtn.forEach((ele) => {
    ele.addEventListener("click", () => {
        ele.classList.toggle("bg-red");
    });
});
 

// Comment Click
const commentClicks = document.querySelectorAll(".comment-click");

commentClicks.forEach(commentClick => {
    commentClick.addEventListener("click", () => {
        const commentSec = commentClick.nextElementSibling;
        commentSec.classList.toggle("d-b");
    });
});


const messageSend = document.getElementById("message-send");
const sendIcon = document.querySelector(".fa-paper-plane");
const commentSec = document.querySelector(".comment-sec");

// Function to create a new comment box
function createCommentBox(message) {
    const newCommentBox = document.createElement("div");
    newCommentBox.classList.add("comment-box");
    newCommentBox.innerHTML += `
        <h5 class="text-muted">${message}</h5>
        <span class="edit-comment">Edit</span>
        <span class="delete-comment">Delete</span>
    `;
    return newCommentBox;
}

// Function to handle the edit action
function handleEdit(commentBox) {
    const message = commentBox.querySelector("h5").textContent;
    const editedMessage = prompt("Edit your comment:", message);
    if (editedMessage !== null) {
        commentBox.querySelector("h5").textContent = editedMessage;
    }
}

// Function to handle the delete action
function handleDelete(commentBox) {
    commentBox.remove();
}

// Event listener for send icon click
sendIcon.addEventListener("click", () => {
    const message = messageSend.value.trim();
    if (message !== "") {
        const newCommentBox = createCommentBox(message);
        commentSec.appendChild(newCommentBox);
        messageSend.value = ""; 

        // Event listeners for edit and delete actions
        const editButton = newCommentBox.querySelector(".edit-comment");
        const deleteButton = newCommentBox.querySelector(".delete-comment");

        editButton.addEventListener("click", () => {
            handleEdit(newCommentBox);
        });

        deleteButton.addEventListener("click", () => {
            handleDelete(newCommentBox);
        });
    }
});

});

}

getApis();
