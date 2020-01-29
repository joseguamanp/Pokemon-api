var app=new Vue({
  el:"#app",
  data:{
    total:null,
    imagen:"https://pokeres.bastionbot.org/images/pokemon/",
    palabrabuscar:null
  },
  mounted(){
    axios.get("https://pokeapi.co/api/v2/pokedex/2/")
    .then(response =>(
      this.total=response.data.pokemon_entries
    ))
  },
  methods:{
    funt_modal: function(id,url){
      app2.modal_descripcion(id,url,this.imagen)
    }
  }
})
var app2=new Vue({
  el:"#description",
  data:{
    des:null,
    colores:null,
    habilidades:null
  },
  methods:{
    modal_descripcion: function(id,url,imagen){
      $('#imagenes').attr('src',imagen+id+".png")
      $('#myModal').modal('show')
      axios.get(url).then(response =>(
        this.des=response.data.flavor_text_entries,
        this.colores=response.data.color.name
      ))
      axios.get("https://pokeapi.co/api/v2/pokemon/"+id).then(response =>(
        this.habilidades=response.data.abilities
      ))
    }
  }
})


var buscar=new Vue({
  el:"#buscador",
  data:{
    pokemones:[],
    acumular:null
  },
  methods:{
    addEvent: function({ type, target }){
      app.palabrabuscar=target.value
    }
  }
})
