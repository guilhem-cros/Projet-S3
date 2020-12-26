	const electron = require("electron");
  const ipcRenderer = electron.ipcRenderer;
  var musique = new Audio('./sons/musiqueMenu.mp3'); // https://www.youtube.com/watch?v=-pIC6z654ho
  var musiqueJoue = true;

  	//quitter l'appli
  	document.getElementById("quitBtn").addEventListener("click",function(){
      ipcRenderer.send("quit");
  });
  
  function jouerMusiqueMenu(){
    ipcRenderer.send('SON');

    ipcRenderer.on('SON-OFF',function(event){
      console.log('OFFmenu');
      musiqueJoue = false;
      musique.pause();
    });

    ipcRenderer.on('SON-ON',function(event){
      console.log('ONmenu');
      musiqueJoue = true;
      musique.play();
    });
  }

  jouerMusiqueMenu();
  

  document.getElementById('creditBtn').addEventListener("click",function(){
    document.getElementById("theHead").style.display = "none";
    document.getElementById("creditBtn").style.display = "none";
    document.getElementById("statistiqueBtn").style.display = "none";
    document.getElementById("newGame").style.display = "none";
    document.getElementById("credits").style.display = "block";
    document.getElementById("optionBtn").style.display = "none";
    document.getElementById("backBtn").style.display = "block";
    document.getElementById("quitBtn").style.display = "none";
  });
  

  document.getElementById('statistiqueBtn').addEventListener("click",function(){
    document.getElementById("theHead").style.display = "none";
     document.getElementById("creditBtn").style.display = "none";
     document.getElementById("statistiqueBtn").style.display = "none";
     document.getElementById("newGame").style.display = "none";
     document.getElementById("optionBtn").style.display = "none";
     document.getElementById("backBtn").style.display = "block";
     document.getElementById("quitBtn").style.display = "none";
     document.getElementById("musicBtn").style.display = "none";
   });

   document.getElementById('optionBtn').addEventListener("click",function(){
      document.getElementById("theHead").style.display = "none";
      document.getElementById("creditBtn").style.display = "none";
      document.getElementById("statistiqueBtn").style.display = "none";
      document.getElementById("newGame").style.display = "none";
      document.getElementById("optionBtn").style.display = "none";
      document.getElementById("backBtn").style.display = "block";
      document.getElementById("quitBtn").style.display = "block";
      document.getElementById("musicBtn").style.display = "block";
    });
    
    document.getElementById('backBtn').addEventListener("click",function(){
      document.getElementById("backBtn").style.display = "none";
      document.getElementById("credits").style.display = "none";
      document.getElementById("theHead").style.display = "block";
      document.getElementById("newGame").style.display = "block";
      document.getElementById("statistiqueBtn").style.display = "block";
      document.getElementById("creditBtn").style.display = "block";
      document.getElementById("optionBtn").style.display = "block";
      document.getElementById("quitBtn").style.display = "block";
      document.getElementById("musicBtn").style.display = "none";
  });

    //Enlever ou remettre la musique  
    document.getElementById("musicBtn").addEventListener("click",function(){
      if (musiqueJoue){
        musique.pause();
        ipcRenderer.send('SON-OFF');
      }
      else {
        musique.play();
        ipcRenderer.send('SON-ON');
      }
      musiqueJoue = !musiqueJoue;
    });

    //Quand la musique est terminée, elle se relance
    musique.addEventListener('ended',function(){
      musique.play();
    })

