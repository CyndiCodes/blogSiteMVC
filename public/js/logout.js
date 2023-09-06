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
document.querySelector('#logout').addEventListener('click', logout);
document.querySelector('#dashboard').addEventListener('click', dashboardBtn);
document.querySelector('#home').addEventListener('click', homeBtn);
