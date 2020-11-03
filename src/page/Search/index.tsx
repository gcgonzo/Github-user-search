import React, { useState } from 'react';
import ButtonIcon from '../../core/Components/ButtonIcon';
import { Github } from '../../core/utils/Github';
import ImageLoader from './Components/ImageLoader';
import InfoLoader from './Components/InfoLoader';
import './styles.scss';


function Search() {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<Github>();
    const [isLoanding, setIsLoanding] = useState(true);



    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoanding(true);

        fetch(`https://api.github.com/users/${search}`)
            .then(response => response.json())
            .then(userResponse => setUserData(userResponse))
            .finally(() => {
                setIsLoanding(false);
            });

    }

    const handleChange = (event) => {
        setSearch(event.target.value);


    }

    return (
        <div className="search" >
            <div className="search-container">
                <form onSubmit={handleSubmit}>
                    <div className=" search-form ">
                        <h4 className="text-title" >Encontre um perfil Github</h4>
                        <input type="text"
                            className="search-control form-control"
                            required
                            value={search}
                            onChange={handleChange}
                        />
                        <div className="search-btn">

                            <ButtonIcon text="Encontrar"></ButtonIcon>

                        </div>
                    </div>


                </form>

            </div>
            <div className="form-container" >
                {userData && (
                    <div>
                        {isLoanding ? <ImageLoader /> : (
                            <img
                                src={userData.avatar_url}
                                className="rounded float-left form-avatar"
                                alt=""
                            />)}

                        {isLoanding ? <InfoLoader /> : (
                            <div>
                                <div className=" row form-content">

                                    <div className="form-repos">
                                        <h6 className="title">Repositórios públicos: {userData.public_repos} </h6>
                                    </div>
                                    <div className="form-followers">
                                        <h6 className="title">Seguidores: {userData.followers} </h6>
                                    </div>
                                    <div className="form-following">
                                        <h6 className="title">Seguindo: {userData.following} </h6>
                                    </div>
                                    <div className="form-dados">

                                        <h4 className="form-dados-title">Informações</h4>

                                        <div className="dados-git">
                                            <h5>Empresa:
                                                <h3>{userData.company}</h3>
                                            </h5>
                                        </div>
                                        <div className="dados-git">
                                            <h5>Website/Blog:
                                                <h3>{userData.blog}</h3>
                                            </h5>
                                        </div>
                                        <div className="dados-git">
                                            <h5>Localidade:
                                                <h3>{userData.location}</h3>
                                            </h5>
                                        </div>
                                        <div className="dados-git-final">
                                            <h5>Membro desde:
                                                <h3>{userData.updated_at}</h3>
                                            </h5>
                                        </div>

                                    </div>


                                </div>
                                <div className="form-btn">
                                    <a href={userData.html_url}>  <ButtonIcon text="Ver Perfil"></ButtonIcon></a>

                                </div>
                            </div>

                        )}



                    </div>
                )}

            </div>

        </div>


    );

}

export default Search;