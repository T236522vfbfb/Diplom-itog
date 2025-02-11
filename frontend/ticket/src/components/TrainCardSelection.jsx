const TrainCardSelection = (train) => {
	return (
		<div className="number-train-selection">
			<div className="train-route">
				<div className="train-name">
					<span className="train-name-image">
						<img src="../icons/trainlight.svg" alt="" />
					</span>
					<h1 className="train-number">{train.train_number}</h1>
					<div className="train-name-selection">
						<p className="train-name-city">{train.train_city_from} →</p>
						<p className="train-name-city">{train.train_city_to}</p>
					</div>
				</div>

				<div className="train-selection">
					<div className="train-selection-route">
						<div className="train-selection-from">
							<div className="selection-time">{train.train_from_time}</div>
							<div className="selection-from">
								<h1 className="selection-city">{train.train_from_city}</h1>
								<p className="selection-station">{train.train_from_station}</p>
							</div>

							<div className="selection-time">{train.train_to_time}</div>
							<div className="selection-from">
								<h1 className="selection-city">{train.train_to_city}</h1>
								<p className="selection-station">{train.train_to_station}</p>
							</div>
						</div>
						<div className="train__selection-time">
							<p className="travel__time">{train.train_travel_to_time}</p>
							<span className="selection__arrow"></span>

							<p className="travel__time travel__time-2line">{train.train_travel_to_time}</p>
							<span className="selection__arrow selection__arrow-rotate"></span>
						</div>
						<div className="train-selection-to">
							<div className="selection-time">{train.train_from_time_2}</div>
							<div className="direction__to">
								<h1 className="direction-city">{train.train_from_city_2}</h1>
								<p className="direction-station">{train.train_from_station_2}</p>
							</div>

							<div className="selection-time">{train.train_to_time_2}</div>
							<div className="direction__to">
								<h1 className="direction-city">{train.train_to_city_2}</h1>
								<p className="direction-station">{train.train_to_station_2}</p>
							</div>
						</div>

						<div className="train__tickets">
							<div className="ticket-options">
								<span className="ticket-options_className">{train.ticket_options_className_1}</span>
								<span className="ticket-options_amount">{train.ticket_options_amount_1}</span>
								<span className="ticket-options_price">
									<span>от</span>
									<span className="ticket-options_price_number">{train.ticket_options_price_1}</span>
									<span className="ticket-options_price_rub">₽</span>
								</span>

								<span className="ticket-options_className">{train.ticket_options_className_2}</span>
								<span className="ticket-options_amount">{train.ticket_options_amount_2}</span>
								<span className="ticket-options_price">
									<span>от</span>
									<span className="ticket-options_price_number">{train.ticket_options_price_2}</span>
									<span className="ticket-options_price_rub">₽</span>
								</span>

								<span className="ticket-options_className">{train.ticket_options_className_3}</span>
								<span className="ticket-options_amount">{train.ticket_options_amount_3}</span>
								<span className="ticket-options_price">
									<span>от</span>
									<span className="ticket-options_price_number">{train.ticket_options_price_3}</span>
									<span className="ticket-options_price_rub">₽</span>
								</span>

								<span className="ticket-options_className">{train.ticket_options_className_4}</span>
								<span className="ticket-options_amount">{train.ticket_options_amount_4}</span>
								<span className="ticket-options_price">
									<span>от</span>
									<span className="ticket-options_price_number">{train.ticket_options_price_4}</span>
									<span className="ticket-options_price_rub">₽</span>
								</span>
							</div>

							<div className="train__facilities">
								<span className="train__facilities-wifi"></span>
								<span className="train__facilities-express"></span>
								<span className="facilities__coffee-have"></span>
							</div>
							<button type="button" className="train__choice-btn">
								Выбрать места
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrainCardSelection;
