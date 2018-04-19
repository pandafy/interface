/*The init function runs when the html page is completely loaded tweaking here should be done carefully and should be reprted.
It is a request to everyone to start there work at the end of this document againt there corressponding comments
Also suggest if you can make the code more efficient*/
$('#S2Name').val('mohogany');
alert($('#S2Name').val());
$('#EditSubject').trigger('create');

alert("this works?");

document.addEventListener('deviceready',init(),false);

function init()
{
    $('#S2Name').val('mohogany');
alert($('#S2Name').val());
$('#EditSubject').trigger('create');


    alert('vgffg');
    $('#S2Name').val($('#S1Name').val());
    alert("performed");
    loadProfile();
    $(document).on('click',"#SubSubmit",function(){
        alert("inside submit");
        alert("S1Name.val() : "+ $('#S1Name').val());
        localStorage.S1Name=$("#S1Name").val();
        //check if it is stored
        alert(localStorage.S1Name);
        $('#S1Name').attr("placeholder",localStorage.S1Name);
    });
    $(document).on('click','#place',function(){
        alert("inside place holder");
        $('#S2Name').val($('#S1Name').val());
        alert($("#S2Name").val());
    });
    
}

function loadProfile()
{
    //$('#S1Name').val("anthony");
    alert('inside loadprofile');
    alert(localStorage.S1Name);
    try {
      $('#S1Name').val("anthony");
    }
    catch(error)
    {
        alert(error);
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





//$(document).on('click','#place',function(){




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