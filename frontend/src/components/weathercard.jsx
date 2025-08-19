import { Card } from "antd"

function WeatherCard(props) {
    const { weather } = props
    if (weather && !weather.error) {
        return (
            <div className="flex justify-center mt-10">
                <Card title={
                    <div className="flex items-center justify-between m-2">
                        <div>
                            {weather.location.name}
                        </div>
                        <img src={weather.current.condition.icon} style={{ height: "3rem" }} />
                    </div>
                } style={{ width: '30%' }}>
                    <p>{weather.current.temp_c} ℃</p>
                    <p>{weather.current.condition.text}</p>
                </Card>
            </div>
        )
    }
    else {
        return (
            <div className="flex justify-center mt-10">
                <Card title={
                    <div className="flex items-start">
                        Ничего нет
                    </div>
                } style={{ width: '30%' }}>
                    <p> </p>
                    <p> </p>
                </Card>
            </div>
        )
    }

}

export default WeatherCard