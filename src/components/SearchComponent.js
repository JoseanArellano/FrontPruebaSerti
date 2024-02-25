import React , {useState, useEffect} from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { PokemonService } from '../services/PokemonService';

const SearchComponent = () => {

    const [pokemones, setPokemones] = useState([])
    const service = new PokemonService()

    const showPokemones = async () => {

        const response = await service.getAll()
        console.log(response)
        setPokemones(response)
    }

    useEffect(() => {
      
        showPokemones()

    },[])


  return (

    <div>
        {<DataTable scrollable scrollHeight="500px" value={pokemones} tableStyle={{ minWidth: '50rem' }}>
            <Column field="id" header="ID"></Column>
            <Column field='name'
            header="Nombre"></Column>
            <Column field='habitat_name' header="Habitat"></Column>
            <Column field='capture_rate' header="Ratio de Captura"></Column>
            <Column field='evolution_chain_url' header="Cadena de evolucion"></Column>
        </DataTable>}
    </div>
    
  )
}

export default SearchComponent