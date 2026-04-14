// Write your code here!
aasync function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  displayPosts(posts);
  return posts;
}

function displayPosts(posts) {
  const ul = document.getElementById("post-list");
  if (!ul) return;

  ul.innerHTML = "";

  posts.forEach(post => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}

if (typeof window !== "undefined") {
  window.fetchPosts = fetchPosts;
  window.displayPosts = displayPosts;
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    fetchPosts();
  });
}