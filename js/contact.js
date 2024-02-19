function validateForm() {
    let form = document.getElementById("contact-form");

    if (!checkEmails(form)) {
        formError("Your e-mails do not match.");
        return false;
    }

    if (!checkDate(form)) {
        formError('Meeting date must be at least 1 day in advance.');
        return false;
    }


    formError(null);
    showConfirm(form);
    return false;
}

function checkEmails(form) {
    let email = form.email.value;
    let confirm = form.confirmemail.value;
    console.log(email);
    console.log(confirmemail);
    return email == confirm;
}

function checkDate(form) {
    var date = document.getElementById("date").value;
    var varDate = new Date(date); //dd-mm-YYYY
    var today = new Date();
    today.setHours(0,0,0,0);

    return varDate > today;
}

function formError(error) {
    if (error == null) {
        let errorBanner = document.getElementById("cm-error");
        errorBanner.classList.remove("cm-popup-show");
        return;
    }

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    let errorText = document.getElementsByName("cm-error-reason")[0];
    console.log(errorText);
    errorText.textContent = error;

    let errorBanner = document.getElementById("cm-error");
    errorBanner.classList.add("cm-popup-show");
}

function showConfirm(form) {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    let from = document.getElementById("cm-from");
    let date = document.getElementById("cm-date");

    from.textContent = form.email.value + " - " + form.number.value;
    date.textContent = form.date.value + " - " + form.duration.value + " hour(s)";

    let errorBanner = document.getElementById("cm-popup");
    errorBanner.classList.add("cm-popup-show");
}

function popupCancel() {
    let errorBanner = document.getElementById("cm-popup");
    errorBanner.classList.remove("cm-popup-show");
}

function popupConfirm() {
    popupCancel();

    let form = document.getElementById("contact-form");
    form.reset();

    let successBanner = document.getElementById("cm-success");
    successBanner.classList.add("cm-popup-show");
}