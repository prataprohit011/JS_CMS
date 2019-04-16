
$(".signup-form").hide();
$(".login").css("background", "#23272B");
$(".signup").css("color", "black");



$(".signup").click(function(){
  $(".signup-form").show();
  $(".login-form").hide();
  $(".login").css("background", "none");
  $(".login").css("color", "black");

  $(".signup").css("background", "#23272B");
  $(".signup").css("color", "white");
});

$(".login").click(function(){
  $(".signup-form").hide();
  $(".login-form").show();
  $(".signup").css("background", "none");
  $(".signup").css("color", "black");
  $(".login").css("background", "#23272B");
  $(".login").css("color", "white");
});

    $.ajax({
      url: "http://localhost:3000/employees",
      type: "GET",
      success: function(data) {
        console.log(data);
    
       
      }
    });

  

   


    $(document).ready(function() {
 
      $('#first_form').submit(function(e) {
        e.preventDefault();
     
        var email = $('#loginEmail').val();
        var password = $('#loginPass').val();
     
        $(".error").remove();
     
        
    
          var regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          var validEmail = regEx.test(email);
          if (!validEmail) {
            $('#loginEmail').after('<span class="error">Enter a valid email</span>');
          }
          else{
            $('#loginEmail').after('<span class="error"></span>');

          }
        
        
     
       
      });
      
      

     
    });


  


    $(document).ready(function() {
 
      $('#second_form').submit(function(e) {
        e.preventDefault();
        var username = $('#userName').val();
        var email = $('#email').val();
        var password = $('#password').val();
     
        $(".error").remove();
        
        if (username.length < 1) {
          $('#userName').after('<span class="error">This field is required</span>');
        }
        
    
          var regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
          var validEmail = regEx.test(email);
          if (!validEmail) {
            $('#email').after('<span class="error">Enter a valid email</span>');
          }
      
        
      
      });
     
    });




    $(document).ready(function() {
 
      $('#btnLogin').click(function() {
      
     
        var email = $('#loginEmail').val();
        var password = $('#loginPass').val();
     
          console.log(email,password);

          $.ajax({
            url: "http://localhost:3000/employees",
            type: "GET",
            success: function(data) {
              console.log(data);
          
              $.each(data, function(idx, elem) {

                  if(elem.email===email && elem.password===password)
                  {
                    console.log("match");
                    document.cookie = "user=logged; expires=Thu, 18 April 2019 12:00:00 UTC";
                    var x= document.cookie;
                    console.log(x);
                    window.location.href="/home.html";
                  }
                  
              

            });
              
          }



              });
      });

    });
      
      

     
  

  

    (function () {
      
      $("#btnSubmit").click(function () {
         
          var user = $("#userName").val();
          var pass = $("#password").val();
          var eml = $("#email").val();
         console.log(user);
        
          add(user,eml, pass);
      });
  })();

function add(user, eml, pass) {
  

  $.ajax({
    url: "http://localhost:3000/employees",
    method: 'POST',
    data:JSON.stringify( {
      userName: user,
      email: eml,
      password: pass
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  
    }



