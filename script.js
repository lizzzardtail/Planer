document.onclick=function(event){

  let reg=document.getElementById('reg');
  let aut=document.getElementById('aut');

// убираем актив из форм
  // document.getElementById('page1').classList.remove('active');

  let mainForm=document.getElementById('mainForm');

  let page1=document.getElementById('page1')
  // mainForm.addEventListener("click", function(event){
  //   let ind=aut.indexOf(event.target);
  // });
  // console.log(event.target.tagName);
  // if(event.target.tagName=='LABEL'){
  //
  // }
  // console.log(this.indexOf);

// изменение активной вкладки
  if(event.target.tagName=="LABEL"){
    if(aut.classList.contains('active')==true){
      reg.classList.replace('inactive', 'active');
      aut.classList.replace('active', 'inactive');
      document.getElementById('page1').classList.replace('active', 'inactive');
      document.getElementById('page2').classList.replace('inactive', 'active');
    }
    else{
      reg.classList.replace('active', 'inactive');
      aut.classList.replace('inactive', 'active');
      document.getElementById('page2').classList.replace('active', 'inactive');
      document.getElementById('page1').classList.replace('inactive', 'active');
    }
  }
}
