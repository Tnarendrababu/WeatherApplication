async function getData(e){
   
    let textBoxElem=document.getElementById("textBox");
    let city=textBoxElem.value;
    if(city.trim()==""){
        alert("please enter valid city Name");
        return;
    }


    let btnElem=e.target;
    btnElem.innerText="Loading...";




    let API =`e6f2c6e4dfc9490dbad45633263101=${city}`;


    try{
        let res = await fetch(API);
        let data = await res.json();
        // console.log(data);
        currentDetails(data);
    }
    catch(err){
       
        alert("enter proper city Name");
    }
    finally{
        btnElem.innerText="search";
        textBoxElem.value="";
    }


}


function currentDetails(data){
    let html=`
        <div class="col-6">
            <h1>${data.location.name}</h1>
            <h5>${data.current.condition.text}</h5>
            <h1>${data.current.temp_c}<sup>o</sup> C</h1>
        </div>
        <div class="col-6">
            <img src="${data.current.condition.icon}" alt="">
        </div>
    `


    document.getElementById("currentDetailsRef").innerHTML=html;
}
