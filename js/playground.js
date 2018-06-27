var image_tracker = 'one';

function change() {
    var image = document.getElementById('profile');
    if (image_tracker == 'one') {
        image.src = 'assets/two.jpg';
        pic_caption.innerHTML = '(flower me)';
        image_tracker = 'two';
    } else {
        image.src = 'assets/one.jpg';
        pic_caption.innerHTML = '(business me)';
        image_tracker = 'one';
    }
}
