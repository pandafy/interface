/*The init function runs when the html page is completely loaded tweaking here should be done carefully and should be reprted.
It is a request to everyone to start there work at the end of this document againt there corressponding comments
Also suggest if you can make the code more efficient*/
document.addEventListener('deviceready',init(),false);

function init()
{
    $(document).on('click','#test5',function(){
    alert("reached click");    
    ahoy();
   });
}

function loadProfile()
{
    alert('inside loadprofile');
    alert($('#pName').val(localStorage.pName));
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

var S1=new subject('Physics',0,0,0);
    
    function ahoy(){
        alert(S1.name);
        alert("Hey");
    }   




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