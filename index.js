"use strict"
    const textfield = document.getElementById("emailField");
    const warning = document.getElementById("warning");
    const button = document.getElementById("button");

    const textfieldTablet = document.getElementById("emailFieldTablet");
    const warningTablet = document.getElementById("warningTablet");
    const buttonTablet = document.getElementById("buttonTablet");

    function emailWarning() {
        let input = textfield.value;
        if(!textfield.value.includes("@")) {
        warning.style.display = "block";
        }
    }

    function undoWarning() {
        if(textfield.value.includes("@")) {
        warning.style.display = "none";
        }
    }

    function emailWarningTablet() {
        let inputTablet = textfieldTablet.value;
        if(!textfieldTablet.value.includes("@")) {
        warningTablet.style.display = "block";
        }
    }

    function undoWarningTablet() {
        if(textfieldTablet.value.includes("@")) {
        warningTablet.style.display = "none";
        }
    }

    button.addEventListener("click", emailWarning);
    button.addEventListener("click", undoWarning);
    buttonTablet.addEventListener("click", emailWarningTablet);
    buttonTablet.addEventListener("click", undoWarningTablet);
