# interface
Interface of app

## Testing commands

Open index.html file inside www folder.
Bring up debugging console of browser.


    Keyboard shortcuts Ctrl+Shift+I
    OR
    Right click and select Inspect Element
    
    Click on Console Tab (He is your dearest friend )

Everytime you reload webpage you need to write some commands in console before begining 

Acivates `Add Field` button 
    
    $('button.add-field').click(addField);
    
Activates `Remove` button    
    
    $(document).on('click','.remove',r3move);
   
Create a variable and make it an array. You can use below code. Read footnotes to understand

    var st=[3,3,3,3,3]
    
Call this function after wriing in input fields 
    
    st=updateTimeTable(st);
    
Report bugs and issues [here](https://github.com/TheOneAboveAllTitan/interface/issues/7)

Footnotes : 
  Play with code and test the page with diverse data.
  Look for updateTimeTable function inside index.js file in /www/js. It will answer most of your questions about how code works
  Meta/st is a variable that holds number of lectures in each day
  Suggestion of better logic is also welcomed
