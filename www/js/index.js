/*The init function runs when the html page is completely loaded tweaking here should be done carefully and should be reprted.
It is a request to everyone to start there work at the end of this document againt there corressponding comments
Also suggest if you can make the code more efficient*/
document.addEventListener('deviceready',loadProfile(),false);

function init()
{
    alert('vgffg');
    
}

function loadProfile()
{
    //$('#S1Name').val("anthony");
    alert('inside loadprofile');
    alert(localStorage.S1Name);
    try {
      $('#S1Name').val("anthony");
    }
    finally{
        alert('this is not working');
    }
}



//Mark Attendance Team


//Edit Team
function subject(name, no_class,absent,present) {
    this.name = name;
    this.no_class=no_class;
    this.present=present;
    this.absent=absent;
    }

subject.Present=function(){
    this.present++;
    this.no_class++;
}

subject.Absent=function(){
    this.absent++;
    this.no_class++;
}


    
    function ahoy(){
        alert(S1.name);
        alert("Hey");
    }   



//$(document).on('click',
$('#SubSubmit').click(function(){
    alert("S1Name.val() : "+ $('#S1Name').val());
    localStorage.S1Name=$("#S1Name").val();
    //check if it is stored
    alert(localStorage.S1Name);
    $('#S1Name').atrt("placeholder",localStorage.S1Name);
});

//$(document).on('click','#place',function(){
$('#place').click(function(){
    alert("ghfjhg");
    $('#S2Name').val($('#S1Name').val());
});



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
    }
    else
        alert("light theme");
});