import objData from "../data/objects.json"

function Object() {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "30px", fontWeight: "bold" }}>SHOULD WHO LEARN PROGRAMING IN FPT APTECH?</h2>

      <div className="list">
        {objData.map((item) => (
          <div className="box" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Object
