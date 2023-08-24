document.addEventListener('DOMContentLoaded', function () {
  const moreInfoButton = document.getElementById('more-info-button');
  const moreInfoPopup = document.getElementById('more-info-popup');

  moreInfoButton.addEventListener('click', function () {
    moreInfoPopup.style.display = moreInfoPopup.style.display === 'block' ? 'none' : 'block';
  });

  window.addEventListener('click', function (event) {
    if (!moreInfoButton.contains(event.target)) {
      moreInfoPopup.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const commentForm = document.getElementById('comment-form');

  commentForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;

    if (username && comment) {
      const response = await fetch('submit_comment.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&comment=${encodeURIComponent(comment)}`,
      });

      if (response.ok) {
        alert('Thank you for your comment!');
        commentForm.reset();
      } else {
        alert('Error sending the comment. Please try again later.');
      }
    }
  });
});

