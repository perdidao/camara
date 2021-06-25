import React, { useState, useEffect } from "react"

// Models
import { Deputy } from "models/deputy.interface"

// Styles
import "./Deputados.scss"
import { DeputyApi } from "api/api"
import { DeputyCard } from "views/components/deputies/DeputyCard/DeputyCard"

const Deputados = (): JSX.Element => {
  const [deputies, setDeputies] = useState<Deputy[]>([])
  const [itemsPerPage, setItemsPerPage] = useState<number>(15)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    async function fetchDeputies() {
      DeputyApi.getDeputies(itemsPerPage, currentPage)
        .then((data) => {
          setDeputies(data)
        })
        .catch(() => {
          setError(true)
        })
        .finally(() => {
          setLoading(false)
        })
    }

    fetchDeputies()
  }, [itemsPerPage, currentPage])

  const deputiesList = (): JSX.Element => {
    if (loading) {
      return <p>carregando deputados</p>
    }

    if (error) {
      return <p>erro ao carregar deputados</p>
    }

    return (
      <>
        {deputies.map((deputy) => (
          <DeputyCard
            urlFoto={deputy.urlFoto}
            nome={deputy.nome}
            siglaPartido={deputy.siglaPartido}
            siglaUf={deputy.siglaUf}
            key={deputy.id}
          />
        ))}
      </>
    )
  }

  const paginationLinks = (): JSX.Element => {
    return (
      <nav className="pagination">
        <button
          className="pagination__prev"
          onClick={(): void => {
            if (currentPage > 1) setCurrentPage(currentPage - 1)
          }}
        >
          Página anterior
        </button>
        <span>Página atual: {currentPage}</span>
        <button
          className="pagination__next"
          onClick={(): void => {
            if (currentPage < 300) setCurrentPage(currentPage + 1)
          }}
        >
          Próxima página
        </button>
        <label>
          Deputados por página:
          <select
            onChange={(ev: React.ChangeEvent<HTMLSelectElement>): void => {
              setItemsPerPage(parseInt(ev.target.value))
              setCurrentPage(1)
            }}
          >
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="60">60</option>
          </select>
        </label>
      </nav>
    )
  }

  return (
    <section className="deputies">
      <div className="container deputies__cointainer">
        <h1>Deputados</h1>
        <section className="deputies__list">{deputiesList()}</section>
        {paginationLinks()}
      </div>
    </section>
  )
}

export { Deputados }
