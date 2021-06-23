import React from "react"

// Models
import { Deputy } from "models/deputy.interface"

// Styles
import "./DeputyCard.scss"

const DeputyCard = (props: Deputy): JSX.Element => {
  return (
    <div className="DeputyCard">
      <figure className="DeputyCard__avatar">
        <img src={props.urlFoto} alt={`Imagem de rosto de ${props.nome}`} />
      </figure>
      <div className="DeputyCard__info">
        <p className="DeputyCard__name">{props.nome}</p>
        <p className="DeputyCard__from">
          {props.siglaPartido} - {props.siglaUf}
        </p>
      </div>
    </div>
  )
}

export { DeputyCard }
