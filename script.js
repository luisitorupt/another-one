const API_URL = "https://jsonplaceholder.typicode.com/posts";
let localPosts = [];

// Fetch and display posts when the page loads
async function fetchPosts() {
  try {
    const response = await fetch(API_URL);
    const posts = await response.json();
    localPosts = posts.slice(0, 10);
    renderPosts();
  } catch (error) {
    console.error("Error fetching posts:", error);
    alert("Failed to load posts. Please try again later.");
  }
}

// Displayed post
function renderPosts() {
  const postsContainer = document.getElementById("posts");


  postsContainer.innerHTML = localPosts
    .map(
      (post) => `
    <div class="post" id="post-${post.id}">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <button onclick="editPost(${post.id})">Edit</button>
      <button class="delete" onclick="deletePost(${post.id})">Delete</button>
    </div>
  `
    )
    .join("");
}

// Add a new post
async function addPost(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  if (!title || !body) {
    alert("Please fill out both the title and the content fields.");
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });

    const newPost = await response.json();
    newPost.id = Date.now();
    localPosts.unshift(newPost);
    renderPosts();

    document.getElementById("title").value = "";
    document.getElementById("body").value = "";

    alert("Post added successfully!");
  } catch (error) {
    console.error("Error adding post:", error);
    alert("Failed to add the post. Please try again.");
  }
}

// Editing post
async function editPost(id) {

  const postToEdit = localPosts.find((post) => post.id === id);
  if (!postToEdit) {
    alert("Post not found!");
    return;
  }

  const title = prompt("Edit Title", postToEdit.title);
  const body = prompt("Edit Content", postToEdit.body);

  if (!title || !body) {
    alert("Both title and content are required!");
    return;
  }

  // Update a post
  postToEdit.title = title;
  postToEdit.body = body;

  if (String(id).length > 10) {

    alert("Post updated locally!");
  } else {

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });

      if (!response.ok) {
        throw new Error("Failed to update the post on the server.");
      }

      alert("Post updated successfully on the server!");
    } catch (error) {
      console.error("Error updating post:", error);
      alert("An error occurred while updating the post. Please try again.");
    }
  }

  renderPosts();
}

// Delete a post
async function deletePost(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    if (!response.ok) {
      throw new Error("Failed to delete the post on the server.");
    }

    localPosts = localPosts.filter((post) => post.id !== id);
    renderPosts();

    alert("Post deleted successfully!");
  } catch (error) {
    console.error("Error deleting post:", error);
    alert("An error occurred while deleting the post. Please try again.");
  }
}

document.getElementById("addPostForm").addEventListener("submit", addPost);

fetchPosts();
