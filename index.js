const ujJatekGomb =document.getElementById("ujjatek")
const jatekTer=document.getElementsByClassName("jatekter")
console.log(jatekTer)
ujJatekGomb.addEventListener("click",megjelenit)

function megjelenit(){
    const hmtlKod=`
    <div id="gep">
        <h2>A gép tippje</h2>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
      <div id="jatekos">
        <h2>A Játékos tippje</h2>
        <div class="gombok">
          <button id="ko">K</button>
          <button id="papir">P</button>
          <button id="ollo">O</button>
        </div>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div> 
        </div>

    `
    jatekTer[0].innerHTML=""
    jatekTer[0].insertAdjacentHTML("beforeend",hmtlKod)
    const gombElemek=document.querySelectorAll(".gombok button")
    gombElemek[0].addEventListener("click",kivalaszt)
    gombElemek[1].addEventListener("click",kivalaszt)
    gombElemek[2].addEventListener("click",kivalaszt)
}
function kivalaszt(){
    const kep=document.querySelector("#jatekos img")
    console.log(event.target)
    console.log(event.target.id)
    kep.src=`kepek/${event.target.id}.PNG`
    gepvalasztas()
}
function gepvalasztas(jValasztas){
  const kep = document.querySelector("#gep img")
  console.log(kep)
  let veletlen= Math.floor(Math.random()*3)
  console.log(veletlen)
  if( veletlen == 0){
    kep.src ="kepek/ko.PNG"
  }else if(veletlen == 1){
    kep.src ="kepek/papir.PNG"
  }else{
    kep.src ="kepek/ollo.PNG"
  }
  ellenorzes()
}
function ellenorzes(veletlen,jValasztas ){
  let f1 =(jValasztas== "ko" && veletlen ==2)
  let f2 =(jValasztas== "papir" && veletlen ==0)
  let f3 =(jValasztas== "ollo" && veletlen ==1)

  let f4 =(jValasztas== "ollo" && veletlen ==1)
  let f5 =(jValasztas== "ollo" && veletlen ==1)
  let f6 =(jValasztas== "ollo" && veletlen ==1)

  let szoveg = ""
  if(f1 || f2 || f3){
    szoveg = "Játékos nyert"
  }else if(f4 ||f5 || f6){
    szoveg = "Gép nyert"
  }else{
    soveg = "döntetlen"
  }
}