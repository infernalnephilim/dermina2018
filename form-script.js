// $(window).on('resize', function () {
//     if ($(window).width() > 905) {
//         $("#menu").show("slide", {
//             direction: 'right'
//         }, "ease", 3000);
//     } else {
//         $("#menu").hide();
//     }
// });
$(document).ready(function () {

    $('#kontakt_form #contact_name').on('keyup paste', check_name);
    $('#kontakt_form #contact_topic').on('keyup paste', check_mail);
    $('#kontakt_form #contact_text').on('keyup paste', check_text);
});
function check_name() {
    var name = $("#contact_name").val();
    if (name == '') {
        $("#name-valid").html("To pole nie może być puste!");
        $("#name-valid").show("bounce", {
            direction: 'up'
        }, "ease", 3000);
    } else {
        $("#contact_name").removeClass("not-correct");
        $("#name-valid").hide("fade", {
            direction: 'up'
        }, "ease", 3000);
    }
}

function check_mail() {
    var wzor = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;
    var name = $("#contact_topic").val();
    if (name == '') {
        $("#topic-valid").html("To pole nie może być puste!");
        $("#topic-valid").show("bounce", {
            direction: 'up'
        }, "ease", 3000);
        $("#contact_topic").addClass("not-correct");
    } else {
        if (!wzor.test(name)) {
            $("#topic-valid").html("Podany adres E-Mail jest niepoprawny!");
            $("#topic-valid").show("bounce", {
                direction: 'up'
            }, "ease", 3000);
            $("#contact_topic").addClass("not-correct");
        } else {
            $("#contact_topic").removeClass("not-correct");
            $("#topic-valid").hide("fade", {
                direction: 'up'
            }, "ease", 3000);
        }

    }
}
function check_text() {
    var name = $("#contact_text").val();
    if (name == '') {
        $("#text-valid").html("To pole nie może być puste!");
        $("#text-valid").show("bounce", {
            direction: 'up'
        }, "ease", 3000);
    } else {
        $("#contact_text").removeClass("not-correct");
        $("#text-valid").hide("fade", {
            direction: 'up'
        }, "ease", 3000);
    }
}
$(function () {

/////////////////////////////////////////////////////////
    $("#kontakt_form #contact_name").change(function () {
        check_name();
    });
    $("#kontakt_form #contact_topic").change(function () {
        check_mail();
    });
    $("#kontakt_form #contact_text").change(function () {
        check_text();
    });

    $("#wyslij_wiadomosc").click(function () {
        var name = $("#contact_name").val();
        var mail = $("#contact_topic").val();
        var text = $("#contact_text").val();

        var wzor = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i;

        if (name == '' || mail == '' || text == '') {
            if (name == '' || name == ' ') {
                $("#contact_name").addClass("not-correct");
                $("#name-valid").html("To pole nie może być puste!");
                $("#name-valid").show("bounce", {
                    direction: 'up'
                }, "ease", 3000);
            } else {
                $("#contact_name").removeClass("not-correct");
            }
            if (mail == '' || mail == ' ') {
                $("#contact_topic").addClass("not-correct");
                $("#topic-valid").html("To pole nie może być puste!");
                $("#topic-valid").show("bounce", {
                    direction: 'up'
                }, "ease", 3000);
            } else {
                //$("#contact_topic").removeClass("not-correct");
            }
            if (text == '' || text == ' ') {
                $("#contact_text").addClass("not-correct");
                $("#text-valid").html("To pole nie może być puste!");
                $("#text-valid").show("bounce", {
                    direction: 'up'
                }, "ease", 3000);
            } else {
                $("#contact_text").removeClass("not-correct");
            }
        } else {
            if (!wzor.test(mail)) {
                $("#contact_topic").addClass("not-correct");
                $("#topic-valid").html("Podany adres E-Mail jest niepoprawny!");
                $("#topic-valid").show("bounce", {
                    direction: 'up'
                }, "ease", 3000);
            } else {
                $.post("send.php", {
                    nameV: name,
                    emailV: mail,
                    textV: text
                }, function (data) {

                    $('#kontakt_form')[0].reset();
                    $("#contact_name").removeClass("not-correct");
                    $("#contact_topic").removeClass("not-correct");
                    $("#contact_text").removeClass("not-correct");
                    $('#message-sent').html("<span class='glyphicon glyphicon-ok'></span>Wiadomość została wysłana");
                    $('#message-sent').fadeIn('slow');
                    $('#message-sent').delay(5000).fadeOut('slow');
                });
            }
        }
    });
///////////////////////////////////////////////////////
});