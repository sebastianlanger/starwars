function localController(){
    // obtengo los datos de la key personajes
    var personajesLocal = JSON.parse(localStorage.getItem('personajes'));



    // si no es null, es que tengo datos

    if(personajesLocal != null){
        console.log(personajesLocal);
        // como tengo datos hago el for
        for (let index = 0; index < personajesLocal.length; index++) {
            const element = personajesLocal[index];
            //los agrego a la tabla
              $('#tableBody').append(`<tr>
        <td></td>
        <td>`+element.name+`</td>
        <td>`+element.gender+`</td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <button type="button" class="btn btn-primary guardar" data-gender="`+element.gender+`" data-name="`+element.name+`" id="seeMore">guardar</button>
        </td>
      </tr>`);
            
        }
      
    }
}

export default localController