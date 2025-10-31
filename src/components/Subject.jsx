import subData from "../data/subjects.json"

function Subject() {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "50px", fontWeight: "bold" }}>
        WHAT IS THE COURSE PROGRAM?
      </h2>

      <div className="list">
        {subData.map((sub) => (
          <div className="box" key={sub.id}>
            <img src={sub.image} alt={sub.subject} />
            <h4>{sub.subject}</h4>
          </div>
        ))}
      </div>

      <p className="program-description">
        With a program design that includes 04 semesters with many important technologies such as ReactJS, PHP, Python, .NET Core, Spring Boot brings learners to the world of programming quickly, most effectively. After graduation, students are confident in front of employers with 4 project semesters with quality, practical products, students will definitely score points.
      </p>
    </div>
  )
}

export default Subject

