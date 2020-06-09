//main page tables
function showt(){
    document.getElementById('todaytab').style.display = ""
    document.getElementById('yestab').style.display = "none"
    document.getElementById('tbut').classList.add("design");
    document.getElementById('ybut').classList.remove("design");
}
function showy(){
    document.getElementById('todaytab').style.display = "none"
    document.getElementById('yestab').style.display = ""
    document.getElementById('ybut').classList.add("design");
    document.getElementById('tbut').classList.remove("design");
}

//state graphs
function showl(){
  document.getElementById('myChart-line').style.display = ""
  document.getElementById('myChart-bar').style.display = "none"
  document.getElementById('lbut').classList.add("design");
  document.getElementById('bbut').classList.remove("design");
}
function showb(){
  document.getElementById('myChart-line').style.display = "none"
  document.getElementById('myChart-bar').style.display = ""
  document.getElementById('bbut').classList.add("design");
  document.getElementById('lbut').classList.remove("design");
}

//state pie
function showa(){
  document.getElementById('myChart-pie').style.display = ""
  document.getElementById('myChart-pie-2').style.display = "none"
  document.getElementById('myChart-pie-3').style.display = "none"
  document.getElementById('abut').classList.add("design");
  document.getElementById('dbut').classList.remove("design");
  document.getElementById('rbut').classList.remove("design");
}

function showd(){
  document.getElementById('myChart-pie').style.display = "none"
  document.getElementById('myChart-pie-2').style.display = ""
  document.getElementById('myChart-pie-3').style.display = "none"
  document.getElementById('abut').classList.remove("design");
  document.getElementById('dbut').classList.add("design");
  document.getElementById('rbut').classList.remove("design");
}

function showr(){
  document.getElementById('myChart-pie').style.display = "none"
  document.getElementById('myChart-pie-2').style.display = "none"
  document.getElementById('myChart-pie-3').style.display = ""
  document.getElementById('abut').classList.remove("design");
  document.getElementById('dbut').classList.remove("design");
  document.getElementById('rbut').classList.add("design");
}

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

// autocomplete and search state
var options = {
    data:["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadar Nagar Haveli","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Ladakh","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telengana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"],
    
    list: {
          match: {
              enabled: true
      },
      onClickEvent: function() {
              var index = $("#basics").val();
              window.location.href="http://localhost:5000/state/"+index
      },
      onKeyEnterEvent:function() {
        var index = $("#basics").val();
        window.location.href="http://localhost:5000/state/"+index
}
    }
  };
$("#basics").easyAutocomplete(options);

// if search button is activated with form
const wform = document.querySelector('form')
const search = document.querySelector('input')
const bttn = document.querySelector('button')

wform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const data=["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadar Nagar Haveli","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Ladakh","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telengana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]

    const toTitleCase = (phrase) => {
      return phrase
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };
    
    const location = search.value 
    
    let result = toTitleCase(location);
    
    if(data.includes(result)){
    console.log(result)
    window.location.href="http://localhost:5000/state/"+result
    }
})

//save page state
function act(ele){
  var id = ele.id;
  document.getElementById(id).classList.add("active")
  sessionStorage.setItem("page",id)
}

$(window).on('load', function() {
  var idn = sessionStorage.getItem("page")
  if(!idn || idn === "c19"){
    idn="nav-home"
  }
  document.getElementById(idn).classList.add("active")
})

function divjump(ele){
  var cls = ele.classList[1];
  if(cls === 'confirmed'){
   window.location.href = '#totalsChart'
  } else if(cls === 'deceased'){
    window.location.href = '#totalsChart2'
   } else if(cls === 'actived'){
    window.location.href = '#totalsChart3'
   } else if(cls === 'recovered'){
    window.location.href = '#totalsChart4'
   } else{
     topFunction()
   }
}