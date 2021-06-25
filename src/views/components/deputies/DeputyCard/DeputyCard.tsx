import React from "react"

// Models
import { Deputy } from "models/deputy.interface"

const DeputyCard = (props: Deputy): JSX.Element => {
  return (
    <div className="deputy_card">
      <figure className="deputy_card__avatar">
        <img src={props.urlFoto} alt={`Imagem de rosto de ${props.nome}`} />
      </figure>
      <div className="deputy_card__info">
        <p className="deputy_card__name">{props.nome}</p>
        <p className="deputy_card__from">
          {props.siglaPartido} - {props.siglaUf}
        </p>
      </div>
    </div>
  )
}

export { DeputyCard }
