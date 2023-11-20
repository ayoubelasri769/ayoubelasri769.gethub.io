var callibr_heurs= document.querySelector('.callibr-heurs');
var callibr_minutes= document.querySelector('.callibr-minutes');
var callibr_secondes= document.querySelector('.callibr-seconds');
var heurCoplet= document.querySelector('.heurCoplet');
var clock=document.querySelector('.clock');
var degre=0;
for(var i=1;i<=60;i++){
  var nouvelle_div_mere=document.createElement('div');
  var nouvelle_div_fille=document.createElement('div');
  
  nouvelle_div_fille.className="heur";
  
  nouvelle_div_mere.className="heur-generale";
  nouvelle_div_mere.appendChild(nouvelle_div_fille);
  nouvelle_div_mere.style.transform='translate(-50%, -50%) rotate('+degre+'deg)';
  degre+=6;
  if(i%5===0 ){
    var nouvelle_div_fille2=document.createElement('p');
    nouvelle_div_fille.style.width="70%";
    nouvelle_div_fille.style.height="10%";
    nouvelle_div_fille2.textContent=""+i/5;
    nouvelle_div_fille2.style.fontSize='40px';
    nouvelle_div_fille2.style.right='10px';
    nouvelle_div_fille2.style.position='relative';
    nouvelle_div_fille2.style.zIndex='2000';
    nouvelle_div_mere.appendChild(nouvelle_div_fille2);

  }else{
    nouvelle_div_fille.style.width="20%";
    nouvelle_div_fille.style.height="5%";
  }
  clock.appendChild(nouvelle_div_mere);
}
function setHeurs(){
  var time=new Date();
  callibr_heurs.style.transform='translate(-50%, -50%) rotate('+29.859*(time.getHours()+time.getMinutes()/60)+'deg)';
}

function setMinutes(){
  var time=new Date();
  callibr_minutes.style.transform='translate(-50%, -50%) rotate('+5.859*(time.getMinutes()+time.getSeconds()/60)+'deg)';
}

function setSecondes() {
  var time = new Date();
   callibr_secondes.style.transform = 'translate(-50%, -50%) rotate('+5.859*(time.getSeconds()+time.getMilliseconds()/1000)+'deg)';
  console.log(callibr_secondes);
  heurCoplet.value = time.getHours() + " : " + time.getMinutes() + " : " + time.getSeconds();
}
 setSecondes();
 setInterval(setSecondes, 1);
 
 setHeurs();
 setMinutes();
 
 setInterval(setHeurs, 1);
 setInterval(setMinutes,1);