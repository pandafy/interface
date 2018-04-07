document.addEventListener('deviceready',init(),false);

init ( function(){
        alert('ready');
        loadProfile();
        alert($('#pName').val(localStorage.pName))
        $('#pSum').click(function(){
            profile.saveProfile();
        });
       /* alert('click is fired');
        $('a[href="#monday"]').attr('href', 'http://www.live.com/')
        //$('#mark').attr("href","#profile");*/
 
});

    loadProfile(function(){
        alert('inside loadprofile');
        alert($('#pName').val(localStorage.pName));
    });
    saveProfile(function(){
        localStorage.pName=$('#pName').val();
        localStorage.pPollege=$('#pCollege').val();
        localStorage.pAge=$('#pAge').val();
    });

