
$(document).ready(function () {
    $(".load").hide();
    $(".contain-f").hover(function () {
        $(this).find(".load").toggle(1000);
    });

});
$(".firstclick").click(function () {
    $(".hide1").slideToggle(1100);
    $(".show1").slideToggle(1200);
});

$(".secondclick").click(function () {
    $(".hide2").slideToggle(1100);
    $(".show2").slideToggle(1200);
});

$(".Thirdclick").click(function () {
    $(".hide3").slideToggle(1100);
    $(".show3").slideToggle(1200);
});

$("button").click(function (party) {
    var client = document.getElementById('nameDetails','emaildetails').value;
    alert('Your message has been received ' + ' Thanks for reaching out to us.');
    party.preventDefault();
});

$("button").on('click', function () {
    $('form').each(function () {
        this.reset();
    });
});