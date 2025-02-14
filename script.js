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
    var inwordsRegex = /^[a-z A-z]+$/
    var purposeRegex=/^[a-z A-Z 0-9]+/
    var addressRegex=/^[a-z A-z 0-9 . ,/]+/
    var accbankRegex=/^[a-z A-z]+/
    var swiftRegex=/^[a-z A-Z 0-9]+/
    var nameRegex=/^[a-z A-Z]+/

    var d1Regex = /^[0-3]/
    var d2Regex = /^[0-9]/
    var m1Regex = /^[0-1]/
    var m2Regex = /^[0-9]/
    var y1Regex = /^[0-2]/
    var y2Regex = /^[0-9]/
    var y3Regex = /^[0-9]/
    var y4Regex = /^[0-9]/

    var donoraccno = document.getElementById("donoraccno")
    var donortitle = document.getElementById("donortitle")
    var recipaccno = document.getElementById("recipaccno")
    var reciptitle = document.getElementById("reciptitle")
    var limitamount = document.getElementById("limitamount")
    var Benefname = document.getElementById("Benefname")
    var inwords=document.getElementById("inwords")
    var purpose=document.getElementById("purpose")
    var address=document.getElementById("address")
    var accbank=document.getElementById("accbank")
    var swift=document.getElementById("swift")
    var name=document.getElementById("name")

    var sd1 = document.getElementById("sd1")
    var sd2 = document.getElementById("sd2")
    var sm1 = document.getElementById("sm1")
    var sm2 = document.getElementById("sm2")
    var sy1 = document.getElementById("sy1")
    var sy2 = document.getElementById("sy2")
    var sy3 = document.getElementById("sy3")
    var sy4 = document.getElementById("sy4")

    var ed1 = document.getElementById("ed1")
    var ed2 = document.getElementById("ed2")
    var em1 = document.getElementById("em1")
    var em2 = document.getElementById("em2")
    var ey1 = document.getElementById("ey1")
    var ey2 = document.getElementById("ey2")
    var ey3 = document.getElementById("ey3")
    var ey4 = document.getElementById("ey4")



    var validate = true

    let radioContainer1 = document.querySelector(".check__item");
    let selectedRadio1 = document.querySelector('input[name="check1"]:checked');
    if (!selectedRadio1) {
        radioContainer1.style.border = "2px solid red";
        validate = false;
    } else {
        radioContainer1.style.border = "none";
    }
    

    let radioContainer2 = document.querySelector(".check2__item");
    let selectedRadio2 = document.querySelector('input[name="check2"]:checked');
    if (!selectedRadio2) {
        radioContainer2.style.border = "2px solid red";
        validate = false;
    } else {
        radioContainer2.style.border = "none";
    }
    
    let radioContainer3 = document.querySelector(".check3__item");
    let selectedRadio3 = document.querySelector('input[name="check3"]:checked');
    if (!selectedRadio3) {
        radioContainer3.style.border = "2px solid red";
        
        validate = false;
    } else {
        radioContainer3.style.border = "none";
    }


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
    if (limitamountRegex.test(limitamount.value) == false) {
        document.querySelector(".limitamounterror").style.display = "inline"
        validate = false
    }
    else {
        document.querySelector(".limitamounterror").style.display = "none"
    }
    if (BenefnameRegex.test(Benefname.value) == false) {
        document.querySelector(".Benefnameerror").style.display = "inline"
        validate = false
    }
    else {
        document.querySelector(".Benefnameerror").style.display = "none"
    }

    if(purposeRegex.test(purpose.value)==false)
    {
        document.querySelector(".purposeerror").style.display="inline"
        validate=false
    }
    else
    {
        document.querySelector(".purposeerror").style.display="none"
    }

    if(inwordsRegex.test(inwords.value)==false)
    {
        document.querySelector(".inwordserror").style.display="inline"
        validate=false
    }
    else
    {
        document.querySelector(".inwordserror").style.display="none"
    }
    if(addressRegex.test(address.value)==false)
    {
        document.querySelector(".addresserror").style.display="inline"
        validate=false
    }
    else
    {
        document.querySelector(".addresserror").style.display="none"
    }
    if(accbankRegex.test(accbank.value)==false)
    {
        document.querySelector(".accbankerror").style.display="inline"
        validate=false
    }
    else
    {
        document.querySelector(".accbankerror").style.display="none"
    }

    if(swiftRegex.test(swift.value)==false)
    {
        document.querySelector(".swifterror").style.display="inline"
        validate=false
    }
    else
    {
        document.querySelector(".swifterror").style.display="none"
    }

    if(nameRegex.test(name.value)==false)
    {
        document.querySelector(".nameerror").style.display="inline"
        validate=false
    }
    else
    {
        document.querySelector(".nameerror").style.display="none"
    }

    // start data
    if (d1Regex.test(sd1.value) == false) {
        document.getElementById("sd1").style.borderColor = "red"
        validate = false
    }
    else {
        document.getElementById("sd1").style.borderColor = "grey"
    }
    if (d2Regex.test(sd2.value) == false) {
        document.getElementById("sd2").style.borderColor = "red"
        validate = false
    }
    else {
        document.getElementById("sd2").style.borderColor = "grey"
    }

    if (m1Regex.test(sm1.value) == false) {
        document.getElementById("sm1").style.borderColor = "red"
        validate = false
    }
    else {
        document.getElementById("sm1").style.borderColor = "grey"
    }

    if (m2Regex.test(sm2.value) == false) {
        document.getElementById("sm2").style.borderColor = "red"
        validate = false
    }
    else {
        document.getElementById("sm2").style.borderColor = "grey"
    }
    if (y1Regex.test(sy1.value) == false) {
        document.getElementById("sy1").style.borderColor = "red"
        validate = false
    }
    else {
        document.getElementById("sy1").style.borderColor = "grey"
    }

    if (y2Regex.test(sy2.value) == false) {
        document.getElementById("sy2").style.borderColor = "red"
        validate = false
    }
    else {
        document.getElementById("sy2").style.borderColor = "grey"
    }
    if (y3Regex.test(sy3.value) == false) {
        document.getElementById("sy3").style.borderColor = "red"
        validate = false
    }
    else {
        document.getElementById("sy3").style.borderColor = "grey"
    }
    if (y4Regex.test(sy4.value) == false) {
        document.getElementById("sy4").style.borderColor = "red"
        validate = false
    }
    else {
        document.getElementById("sy4").style.borderColor = "grey"
    }


// end date
if (d1Regex.test(ed1.value) == false) {
    document.getElementById("ed1").style.borderColor = "red"
    validate = false
}
else {
    document.getElementById("ed1").style.borderColor = "grey"
}
if (d2Regex.test(ed2.value) == false) {
    document.getElementById("ed2").style.borderColor = "red"
    validate = false
}
else {
    document.getElementById("ed2").style.borderColor = "grey"
}

if (m1Regex.test(em1.value) == false) {
    document.getElementById("em1").style.borderColor = "red"
    validate = false
}
else {
    document.getElementById("em1").style.borderColor = "grey"
}

if (m2Regex.test(em2.value) == false) {
    document.getElementById("em2").style.borderColor = "red"
    validate = false
}
else {
    document.getElementById("em2").style.borderColor = "grey"
}
if (y1Regex.test(ey1.value) == false) {
    document.getElementById("ey1").style.borderColor = "red"
    validate = false
}
else {
    document.getElementById("ey1").style.borderColor = "grey"
}

if (y2Regex.test(ey2.value) == false) {
    document.getElementById("ey2").style.borderColor = "red"
    validate = false
}
else {
    document.getElementById("ey2").style.borderColor = "grey"
}
if (y3Regex.test(ey3.value) == false) {
    document.getElementById("ey3").style.borderColor = "red"
    validate = false
}
else {
    document.getElementById("ey3").style.borderColor = "grey"
}
if (y4Regex.test(ey4.value) == false) {
    document.getElementById("ey4").style.borderColor = "red"
    validate = false
}
else {
    document.getElementById("ey4").style.borderColor = "grey"
}





    if (validate == true) {
        alert("Form submission successfully")
    }

})