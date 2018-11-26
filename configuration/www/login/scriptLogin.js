/*function () {

select = document.getElementById("thelist");
choice = select.selectedIndex;
valeur= select.options[choice].value;
return value;
}*/

function check(form)
{
 var u=form.userid.value;
 var p=form.pswrd.value;
 


 
 if(u == "mounir" && p == "mounir")
  {
    window.open('../diapo/diapo.html')
  }
 else
 {
   alert("utilisateur ou mot de passe erroné!")
  }
}

