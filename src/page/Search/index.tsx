import React from 'react';
import ButtonIcon from '../../core/Components/ButtonIcon';
import './styles.scss';


const Search = () => (

    <div className="search" >
        <div className="search-container">
            <div className="search-content">
                <h1 className="text-title" >Encontre um perfil Github</h1>
                <input type="text" className="search-control"></input>
                <div className="search-btn">
                    <ButtonIcon text="Encontrar" />
                </div>
            </div>

        </div>
        <div className="form-container" >
            <img src="..." className="rounded float-left form-img" alt="..." />  
           <div className=" row form-content">
                <input type="text" className="form-control-1" placeholder="Repositórios públicos: " />
                <input type="text" className="form-control-2" placeholder="Seguidores: " />
                <input type="text" className="form-control-3" placeholder="Seguindo: " />

                
                <div className="form">
                    <div className="form-text-title">
                        <h4>Informações</h4> 
                                                  
                    </div>
                   
                    <div className="col dados-1">
                        <h5>Empresa: </h5>
                    </div>
                    <div className="col dados-2">
                        <h5>Website/Blog: </h5>
                    </div>
                    <div className="col dados-3">
                        <h5>Localidade: </h5>
                    </div>
                    <div className="col dados-4">
                        <h5>Membro desde: </h5>
                    </div>

                   
                   
                    
                </div>

           </div>
           
           <div className="form-btn">
                <ButtonIcon text="Ver perfil" />
            </div>

           
        </div>
    </div>




);

export default Search;