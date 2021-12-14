(function(){
    var vel = document.querySelectorAll('.vel')
    var ver = document.querySelectorAll('.ver')
    var vari = document.querySelectorAll('.var')
    var vol = document.querySelectorAll('.vol')
    var val = document.querySelectorAll('.val')

    var banerVel = document.querySelectorAll('.mini-baner-vel')
    var banerVer = document.querySelectorAll('.mini-baner-ver')
    var banerVar = document.querySelectorAll('.mini-baner-var')
    var banerVol = document.querySelectorAll('.mini-baner-vol')
    var banerVal = document.querySelectorAll('.mini-baner-val')

    function showVel(){
        for (var i = 0; i < banerVel.length; i++){
            banerVel[i].style.opacity=1;
        }
    }
    function hideVel(){
        for (var i = 0; i < banerVel.length; i++){
            banerVel[i].style.opacity=0;
        }
    }

    function showVer(){
        for (var i = 0; i < banerVel.length; i++){
            banerVer[i].style.opacity=1;
        }
    }
    function hideVer(){
        for (var i = 0; i < banerVel.length; i++){
            banerVer[i].style.opacity=0;
        }
    }

    function showVar(){
        for (var i = 0; i < banerVel.length; i++){
            banerVar[i].style.opacity=1;
        }
    }
    function hideVar(){
        for (var i = 0; i < banerVel.length; i++){
            banerVar[i].style.opacity=0;
        }
    }

    function showVol(){
        for (var i = 0; i < banerVel.length; i++){
            banerVol[i].style.opacity=1;
        }
    }
    function hideVol(){
        for (var i = 0; i < banerVel.length; i++){
            banerVol[i].style.opacity=0;
        }
    }

    function showVal(){
        for (var i = 0; i < banerVel.length; i++){
            banerVal[i].style.opacity=1;
        }
    }
    function hideVal(){
        for (var i = 0; i < banerVel.length; i++){
            banerVal[i].style.opacity=0;
        }
    }

    for (var i = 0; i < vel.length; i++){
        vel[i].onmouseover = showVel;
        vel[i].onmouseleave = hideVel;
    }

    for (var i = 0; i < ver.length; i++){
        ver[i].onmouseover = showVer;
        ver[i].onmouseleave = hideVer;
    }

    for (var i = 0; i < vari.length; i++){
        vari[i].onmouseover = showVar;
        vari[i].onmouseleave = hideVar;
    }

    for (var i = 0; i < vol.length; i++){
        vol[i].onmouseover = showVol;
        vol[i].onmouseleave = hideVol;

    }

    for (var i = 0; i < val.length; i++){
        val[i].onmouseover = showVal;
        val[i].onmouseleave = hideVal;
    }
})();
