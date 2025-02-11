import HeaderNav from './HeaderNav';

const HeaderIndex = () => {
	return (
		<section cclassName="arial">
			<header className="header-train">
			
			<HeaderNav />

			<div className="search-widget">
				<form className="MainSearch-widget">
					<fieldset className="direction">
						<legend className="fieldset-legend">Направление</legend>

						<div className="fieldset__input-wrapper">
							<label className="fieldset__label">
							</label>
							<div>
								<div className="ant-select-selector">
									<span className="ant-select-selection-search">
										<input placeholder="Москва" type="search" autocomplete="off"
											className="ant-select-selection-search-input" id="rc_select_2" />
									</span>
								</div>

								<div className="city-list">
									<ul>
										<li>Москва</li>
									</ul>
								</div>

							</div>
						</div>

						<div className="fieldset__btn">
							<button className="fieldset-direction__btn" type="button"></button>
						</div>

						<div className="fieldset__input-wrapper">
							<label for="to" className="fieldset__label">
							</label>
							<div className="">
								<div className="ant-select-selector">
									<span className="ant-select-selection-search">
										<input type="search" autocomplete="off"
											className="ant-select-selection-search-input" />
									</span>
								</div>

								<div className="city-list">
									<ul>
										<li>Москва</li>
										<li>САНКТ-ПЕТЕРБУРГ</li>
									</ul>
								</div>

							</div>
						</div>
					</fieldset>

					<fieldset className="fieldset-date">
						<legend className="fieldset-legend">Дата</legend>
						<div className="fieldset__input-wrapper">
							<label className="fieldset__label"></label>
							<input placeholder="2024-12-28"
								className="ant-select-selection-search-input fieldset__input-calendar" required="" />
						</div>
						<div className="fieldset__input-wrapper">
							<label className="fieldset__label"></label>
							<input placeholder="ДД/ММ/ГГ"
								className="ant-select-selection-search-input fieldset__input-calendar" required="" />
						</div>
					</fieldset>
				</form>

				<div className="form__btn">
					<button className="form__btn-send" type="button">Найти билеты</button>
				</div>

				<div className="modal__wrapper" style="display: none;">
					<div className="modal__container">
						<div className="modal__header modal__header-info">
						</div>
						<div className="modal__content">
							<p className="modal__title">Информационное сообщение</p>
							<p className="modal__text">Поля "Откуда" и "Куда" обязательны для заполнения</p>
						</div>
						<div className="modal__footer"><button className="modal__btn" type="button">Понятно</button>
						</div>
					</div>
				</div>
			</div>

			</header>
		</section>
	);
};

export default HeaderIndex;