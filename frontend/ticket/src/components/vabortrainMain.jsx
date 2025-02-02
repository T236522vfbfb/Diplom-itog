import HeaderNav from './HeaderNav';

const VabortrainMain = () => {
	return (
		<main class="order-page order">
			<div class="order-line line">
				<div class="line__container">
					<ol class="line__list line__list-bg">
						<li class="line__item line__item_selected">
							<p class="line__title">
								<span class="line__num">1</span>Билеты
							</p>
						</li>
						<li class="line__item">
							<p class="line__title">
								<span class="line__num">2</span>Пассажиры
							</p>
						</li>
						<li class="line__item">
							<p class="line__title"><span class="line__num">3</span>Оплата</p>
						</li>
						<li class="line__item line__item_last">
							<p class="line__title">
								<span class="line__num">4</span>Проверка
							</p>
						</li>
					</ol>
				</div>
			</div>

			<div class="order-container">
				<div class="container">
					<div class="order-content">
						<div class="order-sidebar">
							<div class="order-filters filter">
								<div class="filter__date">
									<fieldset class="filter__fieldset">
										<legend class="fieldset__legend">Дата поездки</legend>
										<div class="fieldset__input-wrapper">
											<label class="fieldset__label"></label>
											<input placeholder="2025-01-01"
												class="fieldset__input fieldset__input-thither" required="" />
										</div>
									</fieldset>
									<fieldset class="filter__fieldset">
										<legend class="fieldset__legend">Дата возвращения</legend>
										<div class="fieldset__input-wrapper">
											<label class="fieldset__label"></label>
											<input placeholder="ДД/ММ/ГГ" class="fieldset__input fieldset__input-back"
												required="" />
										</div>
									</fieldset>
								</div>
								<div class="filter__switch switch">

									<div class="switch__component" id="switch-lucs">
										<div class="switch__image">
											<img src="../icons/lucs.svg" />
										</div>

										<label for="switch-input" class="switch__title">Люкс
											<input type="checkbox" class="switch-input" name="switch-input" hidden style="display: none;" />
										</label>
										
										<div class="switch-button">
											<span class="ant-switch-inner-checked" style="display: none;">
												<img src="../icons/orange cerl.svg" />
											</span>
											<span class="ant-switch-inner-unchecked">
												<img src="../icons/Group 2 (1).svg" />
											</span>
										</div>
									</div>

									<div class="switch__component" id="switch-cupe">
										<div class="switch__image">
											<img src="../icons/Cope.svg" />
										</div>

										<label for="switch-input" class="switch__title">Купе
											<input type="checkbox" class="switch-input" name="switch-input" hidden style="display: none;" />
										</label>
										
										<div class="switch-button">
											<span class="ant-switch-inner-checked" style="display: none;">
												<img src="../icons/orange cerl.svg" />
											</span>
											<span class="ant-switch-inner-unchecked">
												<img src="../icons/Group 2 (1).svg" />
											</span>
										</div>
									</div>

									<div class="switch__component" id="switch-plackart">
										<div class="switch__image">
											<img src="../icons/plackart.svg" />
										</div>

										<label for="switch-input" class="switch__title">Плацкарт
											<input type="checkbox" class="switch-input" name="switch-input" hidden style="display: none;" />
										</label>
										
										<div class="switch-button">
											<span class="ant-switch-inner-checked" style="display: none;">
												<img src="../icons/orange cerl.svg" />
											</span>
											<span class="ant-switch-inner-unchecked">
												<img src="../icons/Group 2 (1).svg" />
											</span>
										</div>
									</div>

									<div class="switch__component" id="switch-setdayn">
										<div class="switch__image">
											<img src="../icons/setdayn.svg" />
										</div>

										<label for="switch-input" class="switch__title">Сидячий
											<input type="checkbox" class="switch-input" name="switch-input" hidden style="display: none" />
										</label>
										
										<div class="switch-button">
											<span class="ant-switch-inner-checked" style="display: none;">
												<img src="../icons/orange cerl.svg" />
											</span>
											<span class="ant-switch-inner-unchecked">
												<img src="../icons/Group 2 (1).svg" />
											</span>
										</div>
									</div>

									<div class="switch__component" id="switch-wifi">
										<div class="switch__image">
											<img src="../icons/wifi.svg" />
										</div>

										<label for="switch-input" class="switch__title">Wi-Fi
											<input type="checkbox" class="switch-input" name="switch-input" hidden style="display: none;" />
										</label>
										
										<div class="switch-button">
											<span class="ant-switch-inner-checked" style="display: none;">
												<img src="../icons/orange cerl.svg" />
											</span>
											<span class="ant-switch-inner-unchecked">
												<img src="../icons/Group 2 (1).svg" />
											</span>
										</div>
									</div>

									<div class="switch__component" id="switch-camolet">
										<div class="switch__image">
											<img src="../icons/camolet.svg" />
										</div>

										<label for="switch-input" class="switch__title">Экспресс
											<input type="checkbox" class="switch-input" name="switch-input" hidden style="display: none;" />
										</label>
										
										<div class="switch-button">
											<span class="ant-switch-inner-checked" style="display: none;">
												<img src="../icons/orange cerl.svg" />
											</span>
											<span class="ant-switch-inner-unchecked">
												<img src="../icons/Group 2 (1).svg" />
											</span>
										</div>
									</div>

								</div>
								<div class="filter__price price">
									<p class="price__title">Стоимость</p>
									<div class="price__under-range">
										<p>от</p>
										<p>до</p>
									</div>
									<div class="slider">
										<img src="../icons/slider/Rectangle 3.svg" class="filter__price-rectangle-1" />
										<img src="../icons/slider/Rectangle 3.8.svg" class="filter__price-rectangle-2" />
										<img src="../icons/slider/Ellipse 2.8.svg" class="filter__price-ellipse-1" />
										<img src="../icons/slider/Ellipse 2.8.svg" class="filter__price-ellipse-2" />

									</div>
									<div class="ant-slider-mark">
										<span class="ant-slider-mark-text ant-slider-mark-text-active">0</span>
										<span class="ant-slider-mark-text ant-slider-mark-text-active">9999</span>
									</div>
								</div>
								<div class="filter__period period-departure">
									<div class="filter__period-control">
										<img src="../icons/Subtract (1).svg" />
										<p class="filter__period-title">Туда</p>
										<img src="../icons/Group 11.2 (1).svg" />
										
									</div>
								</div>
								<div class="filter__period period-arrival">
									<div class="filter__period-control">
										<img src="../icons/Subtract (2).svg" />
										<p class="filter__period-title">Обратно</p>
										<img src="../icons/Group 11.2 (1).svg" />

									</div>
								</div>
							</div>
							<div class="order-last-tickets last-tickets">
								<p class="last-tickets__title">Последние билеты</p>
								<div class="last-tickets__wrapper">
									<div class="last-tickets__item ticket-item">
										<div class="ticket-item__city">
											<p class="ticket-item__from_city">санкт-Петербург</p>
											<p class="ticket-item__to_city">самара</p>

										</div>
										<div class="ticket-item__railway">
											<p class="ticket-item__from_railway">Московский вокзал</p>
											<p class="ticket-item__to_railway">Самара</p>

										</div>
										<div class="ticket-item__options">
											<img src="../icons/Group 2.2.svg" />
											<div class="ticket-item__option">

											</div>
										</div>
										<p class="ticket-item__cost">от<span class="ticket-item__cost-value">2500</span>
											<span class="ticket-item__cost-currency">₽</span>
										</p>
									</div>
									<div class="last-tickets__item ticket-item">
										<div class="ticket-item__city">
											<p class="ticket-item__from_city">москва</p>
											<p class="ticket-item__to_city">казань</p>
										</div>
										<div class="ticket-item__railway">
											<p class="ticket-item__from_railway">Киевский вокзал</p>
											<p class="ticket-item__to_railway">Казань</p>
										</div>
										<div class="ticket-item__options">
											<img src="../icons/Group 2.2.svg" />
											<div class="ticket-item__option">
											</div>

										</div>
										<p class="ticket-item__cost">от<span class="ticket-item__cost-value">3650</span>
											<span class="ticket-item__cost-currency">₽</span>
										</p>
									</div>
									<div class="last-tickets__item ticket-item">
										<div class="ticket-item__city">
											<p class="ticket-item__from_city">архангельск</p>
											<p class="ticket-item__to_city">аткарск</p>
										</div>
										<div class="ticket-item__railway">
											<p class="ticket-item__from_railway">Архангельск</p>
											<p class="ticket-item__to_railway">Аткарск</p>
										</div>
										<div class="ticket-item__options">
											<img src="../icons/Group 2.2.svg" />
											<div class="ticket-item__option">
											</div>

										</div>
										<p class="ticket-item__cost">от<span class="ticket-item__cost-value">3200</span>
											<span class="ticket-item__cost-currency">₽</span>
										</p>
									</div>
									<div class="last-tickets__item ticket-item">
										<div class="ticket-item__city">
											<p class="ticket-item__from_city">астрахань</p>
											<p class="ticket-item__to_city">анапа</p>
										</div>
										<div class="ticket-item__railway">
											<p class="ticket-item__from_railway">Астрахань</p>
											<p class="ticket-item__to_railway">Анапа</p>
										</div>
										<div class="ticket-item__options">
											<img src="../icons/Group 2.2.svg" />
											<div class="ticket-item__option">
											</div>
										</div>
										<p class="ticket-item__cost">от<span class="ticket-item__cost-value">4800</span>
											<span class="ticket-item__cost-currency">₽</span>
										</p>
									</div>
									<div class="last-tickets__item ticket-item">
										<div class="ticket-item__city">
											<p class="ticket-item__from_city">астрахань</p>
											<p class="ticket-item__to_city">агрыз</p>
										</div>
										<div class="ticket-item__railway">
											<p class="ticket-item__from_railway">Астрахань</p>
											<p class="ticket-item__to_railway">Агрыз</p>
										</div>
										<div class="ticket-item__options">
											<img src="../icons/Group 2.2.svg" />
											<div class="ticket-item__option">
											</div>
										</div>
										<p class="ticket-item__cost">от<span class="ticket-item__cost-value">3500</span>
											<span class="ticket-item__cost-currency">₽</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="order-results">
							<div class="order-results__control result-control">
								<p>найдено:&nbsp;&nbsp;<span class="result-control__find-value">0</span></p>
								<div class="result-control__sort">
									<p>сортировать по:&nbsp;&nbsp;</p>
									<div class="result-control__select"><input class="result-control__select-btn"
											type="button" data-value="date" value="времени" />
										<div class="result-control__options"><input class="result-control__option"
												type="button" data-value="date" value="времени" />
											<input class="result-control__option" type="button" data-value="price"
												value="стоимости" />
											<input class="result-control__option" type="button" data-value="duration"
												value="длительности" />
										</div>
									</div>
								</div>
								<div class="result-control__view">
									<p>показывать по:&nbsp;&nbsp;</p>
									<div class="result-control__view-wrapper">
										<button class="view-button view-button_active" type="button"
											data-value="5">5</button>
										<button class="view-button" type="button" data-value="10">10</button>
										<button class="view-button" type="button" data-value="20">20</button>
									</div>
								</div>
							</div>

							<div class="train-list">
								<div class="number-train-selection">
									<div class="train-route">
										<div class="train-name">
											<span class="train-name-image"><img src="../icons/trainlight.svg"
													alt="" /></span>
											<h1 class="train-number">116C</h1>
											<div class="train-name-selection">
												<p class="train-name-city">Москва →</p>
												<p class="train-name-city">Санкт-Петербург</p>
											</div>
										</div>

										<div class="train-selection">
											<div class="train-selection-route">
												<div class="train-selection-from">
													<div class="selection-time">09:13</div>
													<div class="selection-from">
														<h1 class="selection-city">Москва</h1>
														<p class="selection-station">Ленинградский вокзал</p>
													</div>

													<div class="selection-time">00:13</div>
													<div class="selection-from">
														<h1 class="selection-city">Cанкт-Петербург</h1>
														<p class="selection-station">Московский вокзал</p>
													</div>
												</div>
												<div class="train__selection-time">
													<p class="travel__time">08:32</p>
													<span class="selection__arrow"></span>

													<p class="travel__time travel__time-2line">08:38</p>
													<span class="selection__arrow selection__arrow-rotate"></span>
												</div>
												<div class="train-selection-to">
													<div class="selection-time">09:13</div>
													<div class="direction__to">
														<h1 class="direction-city">Москва</h1>
														<p class="direction-station">Ленинградский вокзал</p>
													</div>

													<div class="selection-time">09:13</div>
													<div class="direction__to">
														<h1 class="direction-city">Москва</h1>
														<p class="direction-station">Ленинградский вокзал</p>
													</div>
												</div>

												<div class="train__tickets">
													<div class="ticket-options">
														<span class="ticket-options_class">Плацкарт</span>
														<span class="ticket-options_amount">22</span>
														<span class="ticket-options_price">
															<span>от</span>
															<span class="ticket-options_price_number">3 805</span>
															<span class="ticket-options_price_rub">₽</span>
														</span>

														<span class="ticket-options_class">Сидячий</span>
														<span class="ticket-options_amount">02</span>
														<span class="ticket-options_price">
															<span>от</span>
															<span class="ticket-options_price_number">3 805</span>
															<span class="ticket-options_price_rub">₽</span>
														</span>

														<span class="ticket-options_class">Купе</span>
														<span class="ticket-options_amount">48</span>
														<span class="ticket-options_price">
															<span>от</span>
															<span class="ticket-options_price_number">3 805</span>
															<span class="ticket-options_price_rub">₽</span>
														</span>

														<span class="ticket-options_class">Люкс</span>
														<span class="ticket-options_amount">25</span>
														<span class="ticket-options_price">
															<span>от</span>
															<span class="ticket-options_price_number">3 805</span>
															<span class="ticket-options_price_rub">₽</span>
														</span>
													</div>


													<div class="train__facilities">
														<span class="train__facilities-wifi"></span>
														<span class="train__facilities-express"></span>
														<span class="facilities__coffee-have"></span>
													</div>
													<button type="button" class="train__choice-btn">Выбрать
														места</button>

												</div>

											</div>
										</div>
									</div>
								</div>
								<div class="number-train-selection">
									<div class="train-route">
										<div class="train-name">
											<span class="train-name-image"><img src="../icons/trainlight.svg"
													alt="" /></span>
											<h1 class="train-number">020У</h1>
											<div class="train-name-selection">
												<p class="train-name-city">Москва →</p>
												<p class="train-name-city">Санкт-Петербург "Мегаполис"</p>
											</div>
										</div>

										<div class="train-selection">
											<div class="train-selection-route">
												<div class="train-selection-from">
													<div class="selection-time">00:20</div>
													<div class="selection-from">
														<h1 class="selection-city">Москва</h1>
														<p class="selection-station">Ленинградский вокзал</p>
													</div>
												</div>
												<div class="train__selection-time">
													<p class="travel__time">08:39</p>
													<span class="selection__arrow"></span>
												</div>
												<div class="train-selection-to">
													<div class="selection-time">09:59</div>
													<div class="direction__to">
														<h1 class="direction-city">Cанкт-Петербург</h1>
														<p class="direction-station">Московский вокзал</p>
													</div>
												</div>

												<div class="train__tickets">

													<div class="ticket-options">
														<span class="ticket-options_class">Плацкарт</span>
														<span class="ticket-options_amount">48</span>
														<span class="ticket-options_price">
															<span>от</span>
															<span class="ticket-options_price_number">3 805</span>
															<span class="ticket-options_price_rub">₽</span>
														</span>

														<span class="ticket-options_class">Сидячий</span>
														<span class="ticket-options_amount">48</span>
														<span class="ticket-options_price">
															<span>от</span>
															<span class="ticket-options_price_number">3 805</span>
															<span class="ticket-options_price_rub">₽</span>
														</span>

														<span class="ticket-options_class">Купе</span>
														<span class="ticket-options_amount">48</span>
														<span class="ticket-options_price">
															<span>от</span>
															<span class="ticket-options_price_number">3 805</span>
															<span class="ticket-options_price_rub">₽</span>
														</span>

														<span class="ticket-options_class">Люкс</span>
														<span class="ticket-options_amount">48</span>
														<span class="ticket-options_price">
															<span>от</span>
															<span class="ticket-options_price_number">3 805</span>
															<span class="ticket-options_price_rub">₽</span>
														</span>
													</div>



													<div class="train__facilities">
														<span class="train__facilities-wifi"></span>
														<span class="train__facilities-express"></span>
														<span class="facilities__coffee-have"></span>
													</div>
													<button type="button" class="train__choice-btn">Выбрать
														места</button>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
	
							<div class="order-results__wrapper">
								<div class="order-pagination">

								</div>
							</div>
						</div>
					</div>


					<div class="modal__wrapper" style="display: none;">
						<div class="modal__container">
							<div class="modal__header modal__header-error"
								style="background-color: rgba(255, 61, 0, 0.38);">

							</div>
							<div class="modal__content">
								<p class="modal__title">Сообщение об ошибке</p>
								<p class="modal__text"></p>
							</div>
							<div class="modal__footer"><button class="modal__btn" type="button">Понятно</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default VabortrainMain;