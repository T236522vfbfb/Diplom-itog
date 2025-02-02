import HeaderNav from './HeaderNav';

const HeaderIndex = () => {
	return (
		<section class="arial">
			<header class="header-train">
			
			<HeaderNav />

			<div class="search-widget">
				<form class="MainSearch-widget">
					<fieldset class="direction">
						<legend class="fieldset-legend">Направление</legend>

						<div class="fieldset__input-wrapper">
							<label class="fieldset__label">
							</label>
							<div>
								<div class="ant-select-selector">
									<span class="ant-select-selection-search">
										<input placeholder="Москва" type="search" autocomplete="off"
											class="ant-select-selection-search-input" id="rc_select_2" />
									</span>
								</div>

								<div class="city-list">
									<ul>
										<li>Москва</li>
									</ul>
								</div>

							</div>
						</div>

						<div class="fieldset__btn">
							<button class="fieldset-direction__btn" type="button"></button>
						</div>

						<div class="fieldset__input-wrapper">
							<label for="to" class="fieldset__label">
							</label>
							<div class="">
								<div class="ant-select-selector">
									<span class="ant-select-selection-search">
										<input type="search" autocomplete="off"
											class="ant-select-selection-search-input" />
									</span>
								</div>

								<div class="city-list">
									<ul>
										<li>Москва</li>
										<li>САНКТ-ПЕТЕРБУРГ</li>
									</ul>
								</div>

							</div>
						</div>
					</fieldset>

					<fieldset class="fieldset-date">
						<legend class="fieldset-legend">Дата</legend>
						<div class="fieldset__input-wrapper">
							<label class="fieldset__label"></label>
							<input placeholder="2024-12-28"
								class="ant-select-selection-search-input fieldset__input-calendar" required="" />
						</div>
						<div class="fieldset__input-wrapper">
							<label class="fieldset__label"></label>
							<input placeholder="ДД/ММ/ГГ"
								class="ant-select-selection-search-input fieldset__input-calendar" required="" />
						</div>
					</fieldset>
				</form>

				<div class="form__btn">
					<button class="form__btn-send" type="button">Найти билеты</button>
				</div>

				<div class="modal__wrapper" style="display: none;">
					<div class="modal__container">
						<div class="modal__header modal__header-info">
						</div>
						<div class="modal__content">
							<p class="modal__title">Информационное сообщение</p>
							<p class="modal__text">Поля "Откуда" и "Куда" обязательны для заполнения</p>
						</div>
						<div class="modal__footer"><button class="modal__btn" type="button">Понятно</button>
						</div>
					</div>
				</div>
			</div>

			</header>
		</section>
	);
};

export default HeaderIndex;