/**
 * Barra de paginacion.
 * Muestra hasta 5 paginas centradas alrededor de la pagina actual.
 */
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  // Calcular rango de paginas visibles (max 5)
  const delta = 2
  const start = Math.max(1, currentPage - delta)
  const end   = Math.min(totalPages, currentPage + delta)
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i)

  return (
    <div className="pagination">
      {/* Boton anterior */}
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Ant.
      </button>

      {/* Primera pagina si no esta en rango */}
      {start > 1 && (
        <>
          <button className="pagination-btn" onClick={() => onPageChange(1)}>1</button>
          {start > 2 && <span className="pagination-info">...</span>}
        </>
      )}

      {/* Paginas del rango */}
      {pages.map((p) => (
        <button
          key={p}
          className={`pagination-btn ${p === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(p)}
        >
          {p}
        </button>
      ))}

      {/* Ultima pagina si no esta en rango */}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="pagination-info">...</span>}
          <button className="pagination-btn" onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </button>
        </>
      )}

      {/* Boton siguiente */}
      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Sig.
      </button>

      <span className="pagination-info">
        Pagina {currentPage} de {totalPages}
      </span>
    </div>
  )
}

export default Pagination
