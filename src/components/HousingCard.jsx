const HousingCard = (props) => {
    const {title, cover} = props
  return (
    <div className="card">
        <div className="overlay"></div>
        <img src={cover} alt={title}/>
        <p className="card__title">{title}</p>
    </div>
  )
}

export default HousingCard