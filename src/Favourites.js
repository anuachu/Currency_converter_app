function Favourites({ fav , changeLayer,remove}) {
  return (
    <div className="favorites">
      <section className="fav">
        {fav.map((fav, index) =>
          <p key={index}
          onClick={() => changeLayer(index)}>{fav}
          <button onClick={() => remove(index)}>X</button>
          </p>
        )}
      </section>
    </div>
  )
}

export default Favourites