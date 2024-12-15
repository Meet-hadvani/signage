window.electron.onPreviewImages((images) => {
    const container = document.getElementById('preview-container');
    container.innerHTML = '';
  
    images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Preview Image';
      img.style.width = '100px'; // Adjust size as needed
      img.style.margin = '10px';
      container.appendChild(img);
    });
  });
  