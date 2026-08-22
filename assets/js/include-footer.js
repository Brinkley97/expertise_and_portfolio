fetch('/assets/partials/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
  })
  .catch(err => console.error('Footer include failed:', err));