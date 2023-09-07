const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#project-name').value.trim();

    const comment = document.querySelector('#project-desc').value.trim();
  
    if (title && comment) {
      const response = await fetch(`/api/comments/`, {
        method: 'POST',
        body: JSON.stringify({ title, comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/comments');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };

  const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
  
  const dashboardBtn = async () => {
    const response = await fetch('/profile', {
      method: 'GET'
    });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  };
  
  const homeBtn = async () => {
    const response = await fetch('/comments', {
      method: 'GET'
    });
  
    if (response.ok) {
      document.location.replace('/comments');
    } else {
      alert(response.statusText);
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
   
    document.querySelector('#logout').addEventListener('click', logout);
    document.querySelector('#dashboard').addEventListener('click', dashboardBtn);
    document.querySelector('#home').addEventListener('click', homeBtn);
    