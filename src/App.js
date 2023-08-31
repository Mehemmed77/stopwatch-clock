import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [time,setTime] = useState(0);
	const [timeon,setTimeon] = useState(false);

	useEffect(() => {
		let interval = null;
		
		if(timeon){
			interval = setInterval(() => {
				setTime(time => time + 1);
			},1000);

		} else{
			clearInterval(interval);
		};

		return () => clearInterval(interval)

	},[timeon]);

	const resetTime = () => {
		setTime(0)
		setTimeon(false);
	}

	return (
		<div className="container">
			<div className="timer">
				<p id="time">
					<span id="hours">{("0" + parseInt(time / 3600)).slice(-2)}</span>:
					<span id="mins">{("0" + parseInt(time / 60)).slice(-2)}</span>:
					<span id="secs">{("0" + time % 60).slice(-2)}</span>
				</p>
			</div>
			<div className="button-container">
				<button className="btn" id="start" onClick={() => setTimeon(true)}>Start</button>
				<button className="btn" id="stop" onClick={() => setTimeon(false)}>Stop</button>
				<button className="btn" id="reset" onClick={resetTime}>Reset</button>
			</div> 
		</div>
	);
}

export default App;
