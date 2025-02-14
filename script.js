var submit = document.getElementById("submit")
submit.addEventListener("click", function () {
    event.preventDefault()
    // var nameRegex=/^[a-zA-Z0-9]+$/
    // var emailRegex=/^[a-zA-Z0-9]+@gmail\.com/
    // var phoneRegex=/^\d{10}$/



    var donoraccnoRegex = /^[AE ae 0-9]+\d{15}$/
    var donortitleRegex = /^[a-z A-Z]+$/
    var recipaccnoRegex = /^[AE ae 0-9]+\d{15}$/
    var reciptitleRegex = /^[a-z A-Z]+$/
    var limitamountRegex = /^[0-9]+$/
    var BenefnameRegex = /^[a-z A-Z]+$/

    var donoraccno = document.getElementById("donoraccno")
    var donortitle = document.getElementById("donortitle")
    var recipaccno = document.getElementById("recipaccno")
    var reciptitle = document.getElementById("reciptitle")
    var limitamount = document.getElementById("limitamount")
    var Benefname = document.getElementById("Benefname")

    var validate = true

    if (donoraccnoRegex.test(donoraccno.value) == false) {
        document.querySelector(".donoraccnoerror").style.display = "inline"
        validate = false
    }
    else {
        document.querySelector(".donoraccnoerror").style.display = "none";
    }
    if (donortitleRegex.test(donortitle.value) == false) {
        document.querySelector(".donortitleerror").style.display = "inline"
        validate = false
    }
    else {
        document.querySelector(".donortitleerror").style.display = "none"
    }

    if (recipaccnoRegex.test(recipaccno.value) == false) {
        document.querySelector(".recipaccnoerror").style.display = "inline"
        validate = false
    }
    else {
        document.querySelector(".recipaccnoerror").style.display = "none"
    }
    if (reciptitleRegex.test(reciptitle.value) == false) {
        document.querySelector(".reciptitleerror").style.display = "inline"
        validate = false
    }
    else {
        document.querySelector(".reciptitleerror").style.display = "none"
    }
    if(limitamountRegex.test(limitamount.value)==false)
    {
        document.querySelector(".limitamounterror").style.display="inline"
        validate = false
    }
    else
    {
        document.querySelector(".limitamounterror").style.display="none"
    }
    if(BenefnameRegex.test(Benefname.value)==false)
    {
        document.querySelector(".Benefnameerror").style.display="inline"
        validate=false
    }
    else
    {
        document.querySelector(".Benefnameerror").style.display="none"
    }
    if(validate==true)
        {
            alert("Form submission successfully")
        }
    
})