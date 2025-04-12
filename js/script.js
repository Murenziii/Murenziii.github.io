document.querySelectorAll('.blog-trigger').forEach(item => {
    item.addEventListener('click', event => {
        const title = item.getAttribute('data-title');
        const date = item.getAttribute('data-date');
        const image = item.getAttribute('data-image');
        const content = item.getAttribute('data-content');

        document.getElementById('blogModalLabel').innerText = title;
        document.getElementById('blogModalDate').innerText = date;
        document.getElementById('blogModalImage').src = image;
        document.getElementById('blogModalContent').innerHTML = content;

        const modal = new bootstrap.Modal(document.getElementById('blogModal'));
        modal.show();
    });
});