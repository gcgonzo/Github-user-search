import React from 'react';
import ButtonIcon from '../../core/Components/ButtonIcon';
import './styles.scss';


const Search = () => {
    return (

        <div className="search-container">
            <div className="row search-content card-base">

                <div className="col-6 form-container">
                    <h1 className="seach-title">Encontre um perfil do Github</h1>
                    <input type="text" className="form-control" />
                    <div className="search-btn">
                        <ButtonIcon text="Encontrar" />
                    </div>

                </div>

            </div>
            

        </div >


    );

}

export default Search;