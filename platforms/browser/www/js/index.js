/*The init function runs when the html page is completely loaded tweaking here should be done carefully and should be reprted.
It is a request to everyone to start there work at the end of this document againt there corressponding comments
Also suggest if you can make the code more efficient*/
document.addEventListener('deviceready',init(),false);

function init()
{
    loadProfile();
    $('#pName').attr("placeholder","ahoy");
    $(document).on('click','#pSubmit',function(){
        saveProfile();
    });
    
    
       
    
    
}

function loadProfile()
{
    alert('inside loadprofile');
    alert($('#pName').val(localStorage.pName));
    
}



//Mark Attendance Team


//Edit Team


//Profile Team
function saveProfile()
{   
    alert('inside save profile');
    localStorage.pName=$('#pName').val();
    $('#pName').placeholder=localStorage.pName;
    
    localStorage.pCourse=$('#pCourse').val();
    localStorage.pRoll=$('#pRoll').val();
    localStorage.pEmail=$('#pEmail').val();
    alert(localStorage.pName);
    $('#pName').attr("placeholder",'hello');
    
    
}

//Analysis Team


//Settings Team
$(document).on('change','#theme-flip',function() {
    if($('#theme-flip option:selected').attr('value')=='Dark'){
        alert("dark theme");
        theme_change();
    }
    else
        alert("light theme");
});

function theme_change()
{
    $('#settings').prop('data-theme')='e';
    localStorage.theme='e';
}