$(".loginbtn").click(function(){
  $(".form").addClass("was-validated");
  console.log($("#uname"),$('input[name="username"]').val());
})
$(".forgot").click(function(){
  $(".card")[0].innerHTML="<h3>Password Updation</h3>";
  $(".card")[0].style.textAlign="center";
})
$(".register").click(function(){
  $(".card")[0].style.textAlign="center";
  $(".card")[0].innerHTML="<h3>Registration</h3>";
})
