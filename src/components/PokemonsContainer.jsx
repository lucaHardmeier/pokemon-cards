const PokemonsContainer = ({ pokemones, setPokemonsData }) => {

    const catchedPokemon = (number) => {
        setPokemonsData(pokemones.filter((pokemon) => number !== pokemon.number))
    }

    return (
        <div className="container mt-3 row">
            {pokemones.map((pokemon) => {
                return (
                    <div className="card" key={pokemon.number} style={{ width: "18rem" }}>
                        <img src={pokemon.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{("00" + pokemon.number).slice(-3)} - {pokemon.name}</h5>
                            <button className="btn btn-primary" onClick={() => catchedPokemon(pokemon.number)}>Atrapar</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PokemonsContainer