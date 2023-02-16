document.getElementById('loginbtn').addEventListener('click', function openLogin() {
    document.getElementById('loginSet').style.display = 'block';
    document.getElementById('loginbackground').style.display = 'block';
    document.getElementById('page1').style.filter = 'brightness(50%)';
    document.getElementById('page2').style.filter = 'brightness(50%)';
    document.getElementById('page3').style.filter = 'brightness(50%)';
    document.getElementById('page4').style.filter = 'brightness(50%)';
    document.getElementById('page5').style.filter = 'brightness(50%)';
    document.getElementById('page6').style.filter = 'brightness(50%)';
    document.getElementById('page7').style.filter = 'brightness(50%)';
    document.getElementById('page8').style.filter = 'brightness(50%)';
    document.getElementById('footer').style.filter = 'brightness(50%)';
    document.getElementById('welcome').innerHTML = 'Welcome Back';
    document.getElementById('login').innerHTML = 'Login';
    document.getElementById('forget').style.display = 'block';
    document.getElementById('loginSet').style.backgroundImage = 'linear-gradient(#001f62,#81005e)';
})
document.getElementById('exit').addEventListener('click', function exit() {
    document.getElementById('loginSet').style.display = 'none';
    document.getElementById('loginbackground').style.display = 'none';
    document.getElementById('page1').style.filter = 'brightness(100%)';
    document.getElementById('page2').style.filter = 'brightness(100%)';
    document.getElementById('page3').style.filter = 'brightness(100%)';
    document.getElementById('page4').style.filter = 'brightness(100%)';
    document.getElementById('page5').style.filter = 'brightness(100%)';
    document.getElementById('page6').style.filter = 'brightness(100%)';
    document.getElementById('page7').style.filter = 'brightness(100%)';
    document.getElementById('page8').style.filter = 'brightness(100%)';
    document.getElementById('footer').style.filter = 'brightness(100%)';
})

window.onclick = function (e) {
    if (e.target.id != 'loginSet' && e.target.id == 'loginbackground') {
        document.getElementById('loginSet').style.display = 'none';
        document.getElementById('loginbackground').style.display = 'none';
        document.getElementById('page1').style.filter = 'brightness(100%)';
        document.getElementById('page2').style.filter = 'brightness(100%)';
        document.getElementById('page3').style.filter = 'brightness(100%)';
        document.getElementById('page4').style.filter = 'brightness(100%)';
        document.getElementById('page5').style.filter = 'brightness(100%)';
        document.getElementById('page6').style.filter = 'brightness(100%)';
        document.getElementById('page7').style.filter = 'brightness(100%)';
        document.getElementById('page8').style.filter = 'brightness(100%)';
        document.getElementById('footer').style.filter = 'brightness(100%)';
    }
}

document.getElementById('forget').addEventListener('click', function alartmassage() {
    window.alert("Sorry Sir service unavailable");
})

document.getElementById('signupbtn').addEventListener('click', function createAccount() {
    document.getElementById('loginSet').style.display = 'block';
    document.getElementById('loginbackground').style.display = 'block';
    document.getElementById('welcome').innerHTML = 'Hello Friend';
    document.getElementById('login').innerHTML = 'Sign Up';
    document.getElementById('forget').style.display = 'none';
    document.getElementById('loginSet').style.backgroundImage = 'linear-gradient(#81005e,#001f62)';

})

document.getElementById('submit').addEventListener('click', function open() {
    const values = document.getElementById('searchItem').value.toUpperCase();
    document.getElementById('searchItem').value = null;
    if (values == '777' || values == 'CHARLIE') {
        window.location.href = 'MovieLink/Charlie.html';
    }
    else if (values == 'CHUP') {
        window.location.href = 'MovieLink/Chup.html';

    }
    else if (values == 'FREDDY') {
        window.location.href = 'MovieLink/freddy.html';

    }
    else if (values == 'GHOST STORY'||values == 'GHOSTSTORY') {
        window.location.href = 'MovieLink/ghostStory.html';

    }
    else if (values == 'GOODBYE'||values == 'GOOD BYE') {
        window.location.href = 'MovieLink/GoodByeMovie.html';

    }
    else {
        window.alert("Service Not Available");
    }
})