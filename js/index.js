var app=new Vue({
  el:"#app",
  data:{
    total:null,
    imagen:"https://pokeres.bastionbot.org/images/pokemon/"
  },
  mounted(){
    axios.get("https://pokeapi.co/api/v2/pokedex/2/")
    .then(response =>(
      //console.log(response.data),
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
        //console.log(response.data),
        this.des=response.data.flavor_text_entries,
        this.colores=response.data.color.name
      ))
      axios.get("https://pokeapi.co/api/v2/pokemon/"+id).then(response =>(
        //console.log(response.data.),
        this.habilidades=response.data.abilities
      ))

    }
  }
})
