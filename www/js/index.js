/*The init function runs when the html page is completely loaded tweaking here should be done carefully and should be reprted.
It is a request to everyone to start there work at the end of this document againt there corressponding comments
Also suggest if you can make the code more efficient*/
document.addEventListener('deviceready',init(),false);

function init()
{
    
    $('#yxy').click(function(){
        alert("The paragraph was clicked.");
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
    localStorage.pPollege=$('#pCollege').val();
    localStorage.pAge=$('#pAge').val();
    alert($('#pName').val(localStorage.pName));
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