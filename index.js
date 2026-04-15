// Write your code here!
function fetchAndRenderPosts() {
    // 👇 Mocked data (same as API response)
    const post = {
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum"
    };
  
    const ul = document.getElementById('post-list');
  
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
  
    h1.textContent = post.title;
    p.textContent = post.body;
  
    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  }
  
  fetchAndRenderPosts();