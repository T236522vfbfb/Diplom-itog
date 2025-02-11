import TrainCardSelection from './TrainCardSelection';
// import { useState, useEffect } from 'react';
import TrainList from TrainList

const VabortrainMain = () => {
	return (
		<main className="order-page order">
			<div className="order-line line">
				<div className="line__container">
					<ol className="line__list line__list-bg">
						<li className="line__item line__item_selected">
							<p className="line__title">
								<span className="line__num">1</span>Билеты
							</p>
						</li>
						<li className="line__item">
							<p className="line__title">
								<span className="line__num">2</span>Пассажиры
							</p>
						</li>
						<li className="line__item">
							<p className="line__title"><span className="line__num">3</span>Оплата</p>
						</li>
						<li className="line__item line__item_last">
							<p className="line__title">
								<span className="line__num">4</span>Проверка
							</p>
						</li>
					</ol>
				</div>
			</div>

			<div className="order-container">
				<div className="container">
					<div className="order-content">
						<div className="order-sidebar">
							<div className="order-filters filter">
								<div className="filter__date">
									<fieldset className="filter__fieldset">
										<legend className="fieldset__legend">Дата поездки</legend>
										<div className="fieldset__input-wrapper">
											<label className="fieldset__label"></label>
											<input placeholder="2025-01-01"
												className="fieldset__input fieldset__input-thither" required="" />
										</div>
									</fieldset>
									<fieldset className="filter__fieldset">
										<legend className="fieldset__legend">Дата возвращения</legend>
										<div className="fieldset__input-wrapper">
											<label className="fieldset__label"></label>
											<input placeholder="ДД/ММ/ГГ" className="fieldset__input fieldset__input-back"
												required="" />
										</div>
									</fieldset>
								</div>
								<div className="filter__switch switch">

									<div className="switch__component" id="switch-lucs">
										<div className="switch__image">
											<img src="../assets/icons/lucs.svg" />
										</div>

										<label htmlFor="switch-input" className="switch__title">Люкс
											<input type="checkbox" className="switch-input" name="switch-input" hidden style="display: none;" />
										</label>
										
										<div className="switch-button">
											<span className="ant-switch-inner-checked" style="display: none;">
												<img src="../assets/icons/orange cerl.svg" />
											</span>
											<span className="ant-switch-inner-unchecked">
												<img src="../assets/icons/Group 2 (1).svg" />
											</span>
										</div>
									</div>

									<div className="switch__component" id="switch-cupe">
										<div className="switch__image">
											<img src="../assets/icons/Cope.svg" />
										</div>

										<label htmlFor="switch-input" className="switch__title">Купе
											<input type="checkbox" className="switch-input" name="switch-input" hidden style="display: none;" />
										</label>
										
										<div className="switch-button">
											<span className="ant-switch-inner-checked" style="display: none;">
												<img src="../assets/icons/orange cerl.svg" />
											</span>
											<span className="ant-switch-inner-unchecked">
												<img src="../assets/icons/Group 2 (1).svg" />
											</span>
										</div>
									</div>

									<div className="switch__component" id="switch-plackart">
										<div className="switch__image">
											<img src="../assets/icons/plackart.svg" />
										</div>

										<label htmlFor="switch-input" className="switch__title">Плацкарт
											<input type="checkbox" className="switch-input" name="switch-input" hidden style="display: none;" />
										</label>
										
										<div className="switch-button">
											<span className="ant-switch-inner-checked" style="display: none;">
												<img src="../assets/icons/orange cerl.svg" />
											</span>
											<span className="ant-switch-inner-unchecked">
												<img src="../assets/icons/Group 2 (1).svg" />
											</span>
										</div>
									</div>

									<div className="switch__component" id="switch-setdayn">
										<div className="switch__image">
											<img src="../assets/icons/setdayn.svg" />
										</div>

										<label htmlFor="switch-input" className="switch__title">Сидячий
											<input type="checkbox" className="switch-input" name="switch-input" hidden style="display: none" />
										</label>
										
										<div className="switch-button">
											<span className="ant-switch-inner-checked" style="display: none;">
												<img src="../assets/icons/orange cerl.svg" />
											</span>
											<span className="ant-switch-inner-unchecked">
												<img src="../assets/icons/Group 2 (1).svg" />
											</span>
										</div>
									</div>

									<div className="switch__component" id="switch-wifi">
										<div className="switch__image">
											<img src="../assets/icons/wifi.svg" />
										</div>

										<label htmlFor="switch-input" className="switch__title">Wi-Fi
											<input type="checkbox" className="switch-input" name="switch-input" hidden style="display: none;" />
										</label>
										
										<div className="switch-button">
											<span className="ant-switch-inner-checked" style="display: none;">
												<img src="../assets/icons/orange cerl.svg" />
											</span>
											<span className="ant-switch-inner-unchecked">
												<img src="../assets/icons/Group 2 (1).svg" />
											</span>
										</div>
									</div>

									<div className="switch__component" id="switch-camolet">
										<div className="switch__image">
											<img src="../assets/icons/camolet.svg" />
										</div>

										<label htmlFor="switch-input" className="switch__title">Экспресс
											<input type="checkbox" className="switch-input" name="switch-input" hidden style="display: none;" />
										</label>
										
										<div className="switch-button">
											<span className="ant-switch-inner-checked" style="display: none;">
												<img src="../assets/icons/orange cerl.svg" />
											</span>
											<span className="ant-switch-inner-unchecked">
												<img src="../assets/icons/Group 2 (1).svg" />
											</span>
										</div>
									</div>

								</div>
								<div className="filter__price price">
									<p className="price__title">Стоимость</p>
									<div className="price__under-range">
										<p>от</p>
										<p>до</p>
									</div>
									<div className="slider">
										<img src="../assets/icons/slider/Rectangle 3.svg" className="filter__price-rectangle-1" />
										<img src="../assets/icons/slider/Rectangle 3.8.svg" className="filter__price-rectangle-2" />
										<img src="../assets/icons/slider/Ellipse 2.8.svg" className="filter__price-ellipse-1" />
										<img src="../assets/icons/slider/Ellipse 2.8.svg" className="filter__price-ellipse-2" />

									</div>
									<div className="ant-slider-mark">
										<span className="ant-slider-mark-text ant-slider-mark-text-active">0</span>
										<span className="ant-slider-mark-text ant-slider-mark-text-active">9999</span>
									</div>
								</div>
								<div className="filter__period period-departure">
									<div className="filter__period-control">
										<img src="../assets/icons/Subtract (1).svg" />
										<p className="filter__period-title">Туда</p>
										<img src="../assets/icons/Group 11.2 (1).svg" />
										
									</div>
								</div>
								<div className="filter__period period-arrival">
									<div className="filter__period-control">
										<img src="../assets/icons/Subtract (2).svg" />
										<p className="filter__period-title">Обратно</p>
										<img src="../assets/icons/Group 11.2 (1).svg" />

									</div>
								</div>
							</div>
							<div className="order-last-tickets last-tickets">
								<p className="last-tickets__title">Последние билеты</p>
								<div className="last-tickets__wrapper">
									<div className="last-tickets__item ticket-item">
										<div className="ticket-item__city">
											<p className="ticket-item__from_city">санкт-Петербург</p>
											<p className="ticket-item__to_city">самара</p>

										</div>
										<div className="ticket-item__railway">
											<p className="ticket-item__from_railway">Московский вокзал</p>
											<p className="ticket-item__to_railway">Самара</p>

										</div>
										<div className="ticket-item__options">
											<img src="../assets/icons/Group 2.2.svg" />
											<div className="ticket-item__option">

											</div>
										</div>
										<p className="ticket-item__cost">от<span className="ticket-item__cost-value">2500</span>
											<span className="ticket-item__cost-currency">₽</span>
										</p>
									</div>
									<div className="last-tickets__item ticket-item">
										<div className="ticket-item__city">
											<p className="ticket-item__from_city">москва</p>
											<p className="ticket-item__to_city">казань</p>
										</div>
										<div className="ticket-item__railway">
											<p className="ticket-item__from_railway">Киевский вокзал</p>
											<p className="ticket-item__to_railway">Казань</p>
										</div>
										<div className="ticket-item__options">
											<img src="../assets/icons/Group 2.2.svg" />
											<div className="ticket-item__option">
											</div>

										</div>
										<p className="ticket-item__cost">от<span className="ticket-item__cost-value">3650</span>
											<span className="ticket-item__cost-currency">₽</span>
										</p>
									</div>
									<div className="last-tickets__item ticket-item">
										<div className="ticket-item__city">
											<p className="ticket-item__from_city">архангельск</p>
											<p className="ticket-item__to_city">аткарск</p>
										</div>
										<div className="ticket-item__railway">
											<p className="ticket-item__from_railway">Архангельск</p>
											<p className="ticket-item__to_railway">Аткарск</p>
										</div>
										<div className="ticket-item__options">
											<img src="../assets/icons/Group 2.2.svg" />
											<div className="ticket-item__option">
											</div>

										</div>
										<p className="ticket-item__cost">от<span className="ticket-item__cost-value">3200</span>
											<span className="ticket-item__cost-currency">₽</span>
										</p>
									</div>
									<div className="last-tickets__item ticket-item">
										<div className="ticket-item__city">
											<p className="ticket-item__from_city">астрахань</p>
											<p className="ticket-item__to_city">анапа</p>
										</div>
										<div className="ticket-item__railway">
											<p className="ticket-item__from_railway">Астрахань</p>
											<p className="ticket-item__to_railway">Анапа</p>
										</div>
										<div className="ticket-item__options">
											<img src="../assets/icons/Group 2.2.svg" />
											<div className="ticket-item__option">
											</div>
										</div>
										<p className="ticket-item__cost">от<span className="ticket-item__cost-value">4800</span>
											<span className="ticket-item__cost-currency">₽</span>
										</p>
									</div>
									<div className="last-tickets__item ticket-item">
										<div className="ticket-item__city">
											<p className="ticket-item__from_city">астрахань</p>
											<p className="ticket-item__to_city">агрыз</p>
										</div>
										<div className="ticket-item__railway">
											<p className="ticket-item__from_railway">Астрахань</p>
											<p className="ticket-item__to_railway">Агрыз</p>
										</div>
										<div className="ticket-item__options">
											<img src="../assets/icons/Group 2.2.svg" />
											<div className="ticket-item__option">
											</div>
										</div>
										<p className="ticket-item__cost">от<span className="ticket-item__cost-value">3500</span>
											<span className="ticket-item__cost-currency">₽</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="order-results">
							<div className="order-results__control result-control">
								<p>найдено:&nbsp;&nbsp;<span className="result-control__find-value">0</span></p>
								<div className="result-control__sort">
									<p>сортировать по:&nbsp;&nbsp;</p>
									<div className="result-control__select"><input className="result-control__select-btn"
											type="button" data-value="date" value="времени" />
										<div className="result-control__options"><input className="result-control__option"
												type="button" data-value="date" value="времени" />
											<input className="result-control__option" type="button" data-value="price"
												value="стоимости" />
											<input className="result-control__option" type="button" data-value="duration"
												value="длительности" />
										</div>
									</div>
								</div>
								<div className="result-control__view">
									<p>показывать по:&nbsp;&nbsp;</p>
									<div className="result-control__view-wrapper">
										<button className="view-button view-button_active" type="button"
											data-value="5">5</button>
										<button className="view-button" type="button" data-value="10">10</button>
										<button className="view-button" type="button" data-value="20">20</button>
									</div>
								</div>
							</div>

							<div className="train-list">
								
							{TrainList.map( (train) =>(

								<TrainCardSelection key={train.id} train={train} />

							))}
								
							

							</div>
	
							<div className="order-results__wrapper">
								<div className="order-pagination">

								</div>
							</div>
						</div>
					</div>


					<div className="modal__wrapper" style="display: none;">
						<div className="modal__container">
							<div className="modal__header modal__header-error"
								style="background-color: rgba(255, 61, 0, 0.38);">

							</div>
							<div className="modal__content">
								<p className="modal__title">Сообщение об ошибке</p>
								<p className="modal__text"></p>
							</div>
							<div className="modal__footer"><button className="modal__btn" type="button">Понятно</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default VabortrainMain;