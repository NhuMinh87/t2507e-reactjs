import { useEffect, useState } from "react";

function Forecast() {
  // State khởi tạo là 1 mảng rỗng vì dữ liệu API trả về có nhiều phần tử
  const [data, setData] = useState([]);

  // Hàm gọi API
  function getForecast() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;

    fetch(url)
      .then((rs) => rs.json())
      .then(function (dt) {
        const list = dt.list; // Mảng dự báo thời tiết
        const forecasts = list.map((item) => ({
          date: item.dt_txt,
          temp: item.main.temp,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        }));

        setData(forecasts); // Cập nhật dữ liệu vào state
      })
      .catch((err) => console.error("Lỗi khi gọi API:", err));
  }

  // useEffect: chạy 1 lần sau khi render UI
  useEffect(() => {
    getForecast();
  }, []);

  return (
    <>
      <h2>Dự báo thời tiết Hà Nội</h2>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-12 col-md-6 col-xl-3 mt-3" key={index}>
            <div className="item" style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
              <h3>{item.date}</h3>
              <h2>
                {item.temp}
                <sup>°C</sup>
              </h2>
              <p>{item.description}</p>
              <img
                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt="weather icon"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Forecast;
