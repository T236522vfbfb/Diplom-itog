const TrainCardSelection = (train) => {
	return (
		<div class="number-train-selection">
			<div class="train-route">
				<div class="train-name">
					<span class="train-name-image">
						<img src="../icons/trainlight.svg" alt="" />
					</span>
					<h1 class="train-number">{train.train_number}</h1>
					<div class="train-name-selection">
						<p class="train-name-city">{train.train_city_from} →</p>
						<p class="train-name-city">{train.train_city_to}</p>
					</div>
				</div>

				<div class="train-selection">
					<div class="train-selection-route">
						<div class="train-selection-from">
							<div class="selection-time">{train.train_from_time}</div>
							<div class="selection-from">
								<h1 class="selection-city">{train.train_from_city}</h1>
								<p class="selection-station">{train.train_from_station}</p>
							</div>

							<div class="selection-time">{train.train_to_time}</div>
							<div class="selection-from">
								<h1 class="selection-city">{train.train_to_city}</h1>
								<p class="selection-station">{train.train_to_station}</p>
							</div>
						</div>
						<div class="train__selection-time">
							<p class="travel__time">{train.train_travel_to_time}</p>
							<span class="selection__arrow"></span>

							<p class="travel__time travel__time-2line">{train.train_travel_to_time}</p>
							<span class="selection__arrow selection__arrow-rotate"></span>
						</div>
						<div class="train-selection-to">
							<div class="selection-time">{train.train_from_time_2}</div>
							<div class="direction__to">
								<h1 class="direction-city">{train.train_from_city_2}</h1>
								<p class="direction-station">{train.train_from_station_2}</p>
							</div>

							<div class="selection-time">{train.train_to_time_2}</div>
							<div class="direction__to">
								<h1 class="direction-city">{train.train_to_city_2}</h1>
								<p class="direction-station">{train.train_to_station_2}</p>
							</div>
						</div>

						<div class="train__tickets">
							<div class="ticket-options">
								<span class="ticket-options_class">{train.ticket_options_class_1}</span>
								<span class="ticket-options_amount">{train.ticket_options_amount_1}</span>
								<span class="ticket-options_price">
									<span>от</span>
									<span class="ticket-options_price_number">{train.ticket_options_price_1}</span>
									<span class="ticket-options_price_rub">₽</span>
								</span>

								<span class="ticket-options_class">{train.ticket_options_class_2}</span>
								<span class="ticket-options_amount">{train.ticket_options_amount_2}</span>
								<span class="ticket-options_price">
									<span>от</span>
									<span class="ticket-options_price_number">{train.ticket_options_price_2}</span>
									<span class="ticket-options_price_rub">₽</span>
								</span>

								<span class="ticket-options_class">{train.ticket_options_class_3}</span>
								<span class="ticket-options_amount">{train.ticket_options_amount_3}</span>
								<span class="ticket-options_price">
									<span>от</span>
									<span class="ticket-options_price_number">{train.ticket_options_price_3}</span>
									<span class="ticket-options_price_rub">₽</span>
								</span>

								<span class="ticket-options_class">{train.ticket_options_class_4}</span>
								<span class="ticket-options_amount">{train.ticket_options_amount_4}</span>
								<span class="ticket-options_price">
									<span>от</span>
									<span class="ticket-options_price_number">{train.ticket_options_price_4}</span>
									<span class="ticket-options_price_rub">₽</span>
								</span>
							</div>

							<div class="train__facilities">
								<span class="train__facilities-wifi"></span>
								<span class="train__facilities-express"></span>
								<span class="facilities__coffee-have"></span>
							</div>
							<button type="button" class="train__choice-btn">
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
