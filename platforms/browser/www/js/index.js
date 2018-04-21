/*The init function runs when the html page is completely loaded tweaking here should be done carefully and should be reprted.
It is a request to everyone to start there work at the end of this document againt there corressponding comments
Also suggest if you can make the code more efficient*/
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
alert("will it reach here");
var S = new Array(10);
for(var i=0;i<10;++i){
    S[i]=new subject();
}

S[0].name="Physics";
S[0].no_class=4;
S[0].absent=1;
S[0].present=3;

var test = new subject('gagan',3,1,2);

for(var i=0;S[i].name!=undefined;++i)
{
    x="S"+i+"name";
    localStorage.x=S[0].name;
    alert(localStorage.S0name);
}

localStorage.Sname=test.name;
S[1]=localStorage.S0;
alert(test.name);
alert(localStorage.S0name);




document.addEventListener('deviceready',init(),false);

function init()
{
    
//EDIT TEAM


    $(document).on('click',"#SubSubmit",function(){
        localStorage.S1Name=$("#S1Name").val();
        //check if it is stored
        alert(localStorage.S1Name);
        $('#S1Name').attr("placeholder",localStorage.S1Name);
    });
    
    
    $(document).on('click','#EditSubjectBtn',function(){
        alert("inside place holder");
        $('#S2Name').val("mahogany");
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
alert("will it reach here");
var S = new Array(10);
for(var i=0;i<10;++i){
    S[i]=new subject();
    alert(S[i].name);
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