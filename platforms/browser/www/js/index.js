/*The init function runs when the html page is completely loaded tweaking here should be done carefully and should be reprted.
It is a request to everyone to start there work at the end of this document againt there corressponding comments
Also suggest if you can make the code more efficient*/


function saveData()
{
    localStorage.S0name     =S[0].name;
    localStorage.S0no_class =S[0].no_class;
    localStorage.S0absent   =S[0].absent;
    localStorage.S0present  =S[0].present; 
    
    localStorage.S1name     =S[1].name;
    localStorage.S1no_class =S[1].no_class;
    localStorage.S1absent   =S[1].absent;
    localStorage.S1present  =S[1].present; 

    localStorage.S2name     =S[2].name;
    localStorage.S2no_class =S[2].no_class;
    localStorage.S2absent   =S[2].absent;
    localStorage.S2present  =S[2].present; 

    localStorage.S3name     =S[3].name;
    localStorage.S3no_class =S[3].no_class;
    localStorage.S3absent   =S[3].absent;
    localStorage.S3present  =S[3].present; 

    localStorage.S4name     =S[4].name;
    localStorage.S4no_class =S[4].no_class;
    localStorage.S4absent   =S[4].absent;
    localStorage.S4present  =S[4].present; 

    localStorage.S5name     =S[5].name;
    localStorage.S5no_class =S[5].no_class;
    localStorage.S5absent   =S[5].absent;
    localStorage.S5present  =S[5].present; 

    localStorage.S6name     =S[6].name;
    localStorage.S6no_class =S[6].no_class;
    localStorage.S6absent   =S[6].absent;
    localStorage.S6present  =S[6].present; 
}

alert("point 1");

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

var S = new Array(10);
for(var i=0;i<7;++i)
    S[i]=new subject;

function loaddata()
{
    
    S[0].name    =localStorage.S0name;
    S[0].no_class=localStorage.S0no_class;
    S[0].absent  =localStorage.S0absent;
    S[0].present =localStorage.S0present;
    
    S[1].name    =localStorage.S1name;
    S[1].no_class=localStorage.S1no_class;
    S[1].absent  =localStorage.S1absent;
    S[1].present =localStorage.S1present;

    S[2].name    =localStorage.S2name;
    S[2].no_class=localStorage.S2no_class;
    S[2].absent  =localStorage.S2absent;
    S[2].present =localStorage.S2present;

    S[3].name    =localStorage.S3name;
    S[3].no_class=localStorage.S3no_class;
    S[3].absent  =localStorage.S3absent;
    S[3].present =localStorage.S3present;

    S[4].name    =localStorage.S4name;
    S[4].no_class=localStorage.S4no_class;
    S[4].absent  =localStorage.S4absent;
    S[4].present =localStorage.S4present;

    S[5].name    =localStorage.S5name;
    S[5].no_class=localStorage.S5no_class;
    S[5].absent  =localStorage.S5absent;
    S[5].present =localStorage.S5present;

    S[6].name    =localStorage.S6name;
    S[6].no_class=localStorage.S6no_class;
    S[6].absent  =localStorage.S6absent;
    S[6].present =localStorage.S6present;
}


document.addEventListener('deviceready',init(),false);

function init()
{
    loaddata();
    
//EDIT TEAM


    $(document).on('click',"#SubSubmit",function(){
        //localStorage.S1Name=$("#S1Name").val();
        alert('inside submit');
    
        S[0] = new subject($("#S0Name").val(),0,0,0);
        S[1] = new subject($("#S1Name").val(),0,0,0);
        S[2] = new subject($("#S2Name").val(),0,0,0);
        S[3] = new subject($("#S3Name").val(),0,0,0);
        S[4] = new subject($("#S4Name").val(),0,0,0);

        $('#S0Name').attr("placeholder",S[0].name);
        $('#S1Name').attr("placeholder",S[1].name);
        $('#S2Name').attr("placeholder",S[2].name);
        $('#S3Name').attr("placeholder",S[3].name);
        $('#S4Name').attr("placeholder",S[4].name);
        saveData();
    });
    
    
    $(document).on('click','#EditSubjectBtn',function(){
        alert("inside place holder");
        $('#S0Name').val(S[0].name);
        $('#S1Name').val(S[1].name);
        $('#S2Name').val(S[2].name);
        $('#S3Name').val(S[3].name);
        $('#S4Name').val(S[4].name);

        $('#S0Name').attr("placeholder",S[0].name);
        $('#S1Name').attr("placeholder",S[1].name);
        $('#S2Name').attr("placeholder",S[2].name);
        $('#S3Name').attr("placeholder",S[3].name);
        $('#S4Name').attr("placeholder",S[4].name);
        
    });

// MARK ATTENDANCE

    $(document).on('click','#MBtn',function(){
        alert($("input[name='Phy']:checked").val());
        alert($('.M1:checked').val());
        alert($('.M1:checked').attr('name'));
        alert($('.M2:checked').attr('name'));
        alert($('.M3:checked').attr('name'));
    })
    
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