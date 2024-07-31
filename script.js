document.addEventListener('DOMContentLoaded' , function(){
    const welcomeText = document.getElementById('welcome-text')
    const message = 'Welcome To  Fitness Mantra';
    
    let index = 0;

    function showletter(){
        if(index < message.length)
        {
            welcomeText.textContent += message.charAt(index);
            index++;
            setTimeout(showletter , 100);
        }
         
    }

    showletter();

});




