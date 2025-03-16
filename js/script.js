
const get_pref_button=document.getElementById('prev-page');//capturo el boton para poder pasar de páginas
const get_next_button=document.getElementById('next-page');//Capturo el boton


let pagina=1; //Pagina a la que queremos acceder
fetch("https://rickandmortyapi.com/api/character/?page="+pagina)
.then((response)=>{
    if(!response.ok){
        console.log("La página no responde");
    }
    return response.json();
})
.then ((data)=>{
    //console.log(data);
    preload_page(data);
})
function preload_page(data){
    const get_lista_personajes=document.getElementById('character-list'); //Capturamos donde tiene que ir la información.
    for(let i in data.results){
        const create_article= document.createElement('article');//creamos apartados
        const create_img = document.createElement('img'); //creamos apartados para poner imágenes
        const create_titulo = document.createElement('a'); //creamos referencias
        const create_titulo_especie = document.createElement('a');//creamos referencias
        create_article.textContent='';
        get_lista_personajes.appendChild(create_article);
        create_img.src=data.results[i].image;
        create_img.title= data.results[i].name;
        create_img.id="img"+i;
        create_article.appendChild(create_img);
        create_titulo.href=data.results[i].location.url;
        create_titulo.textContent= "Name: "+data.results[i].name;
        create_titulo.id="titulo"+i;
        create_article.appendChild(create_titulo);
        create_titulo_especie.textContent= "Especie: "+data.results[i].species;
        create_titulo_especie.id="titulo_especie"+i;
        create_article.appendChild(create_titulo_especie);
    }
}

function modif_html(data){
    //console.log(data.results.length);
    
    //console.log (get_lista_personajes);
    for(let i in data.results){
        //console.log(i);
        const get_lista_img=document.getElementById('img'+i);
        const get_lista_titulo=document.getElementById('titulo'+i);
        const get_lista_titulo_especie=document.getElementById('titulo_especie'+i);
        get_lista_img.src=data.results[i].image;
        get_lista_img.title= data.results[i].name;
        get_lista_titulo.textContent="Name: "+data.results[i].name;
        get_lista_titulo_especie.textContent= "Especie: "+data.results[i].species;
    }
}

get_pref_button.addEventListener('click',()=>{
    if (pagina>1){
    pagina--;
    //console.log(pagina);
    fetch("https://rickandmortyapi.com/api/character/?page="+pagina)
    .then((response)=>{
        if(!response.ok){
            console.log("La página no responde");
        }
        return response.json();
    })
    .then ((data)=>{
        //console.log(data);
        modif_html(data);
    })
    }
})
get_next_button.addEventListener('click',()=>{
    if (pagina<42){
    pagina++;
    console.log(pagina);
    fetch("https://rickandmortyapi.com/api/character/?page="+pagina)
    .then((response)=>{
        if(!response.ok){
            console.log("La página no responde");
        }
        return response.json();
    })
    .then ((data)=>{
        //console.log(data);
        modif_html(data);
    })
    }
    
})