function peopleController(){
    console.log("logica de people");
    var urlProxima;
    var personajes;
    var i = 0;
    // funcion que muestra en cm
    function cm(cm){
        return cm/100+ ' M.';
    }

    //funcion refresh por que tenia error en el codigo
    function refresh(){
       i++;
       if(i==10){
           // agrego click listener a clase .guardar
        $('.guardar').click(function(){
           // console.log(this.dataset);
            // logica de guardar en localstorage
            var personajesLocal = JSON.parse(localStorage.getItem('personajes'));
            var name = this.dataset.name;
            var gender = this.dataset.gender;

            console.log(personajesLocal);
            // chequeo si existe en localstorage
            if(personajesLocal === null){
                console.log("key personajes no existe");

                var insertPersonaje = {
                    name: name,
                    gender: gender
                }
                var total = [];
                total.push(insertPersonaje);
                localStorage.setItem('personajes', JSON.stringify(total));
            }else{
                console.log("existe por ende le agrego");
                var insertPersonaje = {
                    name: name,
                    gender: gender
                }
                console.log(personajesLocal);
                personajesLocal.push(insertPersonaje);
                localStorage.setItem('personajes', JSON.stringify(personajesLocal));
                 
            }
            
        })
        // boton de ver mas
        $('#seeMoreURL').click(function(){
            console.log(this.dataset.url);
            // console.log("pagina que leo es: "+parseInt(this.dataset.pages)+1)
            //lo que cambia respecto al ajax original es que url es variable
            $.ajax({
                url: this.dataset.url,
                method: 'get',
                success: function(data){
                    urlProxima = data.next;
                    personajes = data.results;
                    $('#seeMoreURL').attr('data-url', data.next);
                    for (let index = 0; index < personajes.length; index++) {
                        const element = personajes[index];
                        $('#tableBody').append(`<tr>
                        <td></td>
                        <td>`+element.name+`</td>
                        <td>`+element.gender+`</td>
                        <td>`+cm(element.height)+`</td>
                        <td>`+element.mass+`</td>
                        <td>`+element.eye_color+`</td>
                        <td>
                          <button type="button" class="btn btn-primary guardar" data-gender="`+element.gender+`" data-name="`+element.name+`" id="seeMore">guardar</button>
                        </td>
                      </tr>`);
                        refresh();
                    }
           
        
                },
                error: function(){
        
                }
            })
        })
       }
      
        
    };
   //este es el ajax original la url esta escrita
    $.ajax({
        url: 'https://swapi.co/api/people/',
        method: 'get',
        success: function(data){
            urlProxima = data.next;
            personajes = data.results;
            $('#seeMoreURL').attr('data-url', urlProxima);
            $('#seeMoreURL').attr('data-pages', 1);
            for (let index = 0; index < personajes.length; index++) {
                const element = personajes[index];
                $('#tableBody').append(`<tr>
                <td></td>
                <td>`+element.name+`</td>
                <td>`+element.gender+`</td>
                <td>`+cm(element.height)+`</td>
                <td>`+element.mass+`</td>
                <td>`+element.eye_color+`</td>
                <td>
                  <button type="button" class="btn btn-primary guardar"  data-gender="`+element.gender+`" data-name="`+element.name+`" id="seeMore">guardar</button>
                </td>
              </tr>`);

                refresh();
            }
   

        },
        error: function(){

        }
    })

   
}

export default peopleController