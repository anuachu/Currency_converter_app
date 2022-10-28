function Favourites({ fav , changeLayer}) {
  return (
    <div className="favorites">
      <section className="fav">
        {fav.map((fav, index) =>
          <p key={index}
          onClick={() => changeLayer(index)}>{fav}
          </p>
        )}
      </section>
    </div>
  )
}

export default Favourites