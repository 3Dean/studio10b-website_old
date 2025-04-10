// JavaScript Document

document.getElementById('videoPlaceholder').addEventListener('click', function() {
    $.fancybox.open({
        src  : 'https://deanyeager.s3.amazonaws.com/PortfolioHubs.mp4',
        type : 'video' // Depending on your video format, this might need to be adjusted
    });
});
