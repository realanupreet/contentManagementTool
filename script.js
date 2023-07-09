document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageFile = document.getElementById('image').files[0];
    const videoFile = document.getElementById('video').files[0];
  
    const blogPosts = document.getElementById('blogPosts');
  
    const blogPost = document.createElement('div');
    blogPost.classList.add('blogPost');
  
    let postContent = `
      <h2>${title}</h2>
      <p>${content}</p>
    `;
  
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      postContent += `<img src="${imageUrl}" alt="Blog Image">`;
    }
  
    if (videoFile) {
      const videoUrl = URL.createObjectURL(videoFile);
      postContent += `<video src="${videoUrl}" controls></video>`;
    }
  
    blogPost.innerHTML = postContent;
    blogPosts.appendChild(blogPost);
  
    // Clear form inputs
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    document.getElementById('image').value = '';
    document.getElementById('video').value = '';
  });
  