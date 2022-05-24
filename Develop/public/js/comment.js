const newFormHandler = async (event) => {
    event.preventDefault();
  
    const user_name = document.querySelector('#user-name').value.trim();
    const comment_description = document.querySelector('#comment-desc').value.trim();
  
    if (user_name && comment_description) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ user_name, comment_description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);