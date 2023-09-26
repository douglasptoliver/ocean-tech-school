import"./Card.css"

export default function Card() {
    return <div className="card">
        <h2>Rick Sanchez</h2>

        <div className="tags">
        <span className="tag">Status: Vivo</span>
        <span className="tag">Especie: Humana</span>
        <span className="tag">Origin: Terra</span>
        </div>

        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
      </div>
}

