import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { PokemonService } from '../services/PokemonService';

function FindComponent() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const service = new PokemonService()

  const handleSearch = async () => {

    try {
        
        // Realizar la búsqueda en la base de datos usando el término de búsqueda (searchTerm)

        const response = await service.findById(searchTerm);
        console.log(response)
        setSearchResults([response]); // Establecer los resultados de la búsqueda en el estado

    } catch (error) {
      console.error('Error al buscar en la base de datos:', error);
    }
  };

  return (
    <div>
      <div className="p-inputgroup">
        <InputText value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Buscar" />
        <Button label="Buscar" icon="pi pi-search" onClick={handleSearch} />
      </div>

    
        <div>
          <h2>Resultados de la búsqueda</h2>
          <DataTable value={searchResults}>
            <Column field="id" header="ID" />
            <Column field="name" header="Nombre" />
            {/* Agregar más columnas según los campos de tus resultados de búsqueda */}
          </DataTable>
        </div>
    
    </div>
  );
}

export default FindComponent
