function formRefresh() {
  document.getElementById("form_data").reset();
}
function akanNames() {
  var birthDate=document.getElementById("birthdate").value.toString();
  console.log("birthdate is" + birthDate);
  var dateEntered=birthDate.split("-");
  var day=parseInt(dateEntered[2]);
  var month=parseInt(dateEntered[1]);
  var year=parseInt(dateEntered[0]);
  console.log("day is:" + day + "month:" + month);

  // var centry=(year-1)/100+1;
  var centry = dateEntered[0].substr(0, 2);

  console.log("century:" + centry);

  var dayOfTheWeek = ( centry/4 -2*centry-1 + 5*year/4 + 26*(month+1)/10+day ) % 7;
  console.log("day of week:" + dayOfTheWeek);

  document.getElementById("display").innerHTML=Math.round(dayOfTheWeek);
  var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  var femaleName = femaleNames[(Math.round(dayOfTheWeek))] ;

  var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var maleName = maleNames[(Math.round(dayOfTheWeek))] ;

  var gender=document.getElementById("gender").value;
  var dayTheWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  // var dOfWeek = Math.round(dayOfTheWeek);
  var dOfWeek = dayTheWeek[(Math.round(dayOfTheWeek))] ;
  console.log("day of week:" + dOfWeek + "  gender" + gender);

  if(dOfWeek !== null){
    if(gender==="Male"){
      document.getElementById("display").innerHTML= "Your akan names is"+ maleName+" and you were born on "+ dOfWeek;
    }
    else if(gender==="Female"){
      document.getElementById("display").innerHTML="Your akan names is "+ femaleName + "  and you were born on " + dOfWeek;

    }else{
      alert("Enter a valid birth date and choose your gender");
      document.getElementById("display").innerHTML="";
    }
  }
      else{
        alert("Enter valid birthday and choose your gender");
        document.getElementById("display").innerHTML="";
      }
  formRefresh();
}