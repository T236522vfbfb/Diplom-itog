import cerkle from './assets/icons/cerkle.svg';
import HeaderNav from './HeaderNav';


const HeaderIndex = () => {
	return (
		<section className="arial">
			<HeaderNav />

			<div className="header-widget container">
				<div className="header-title-wrapper">
					<h1 className="header-title">
						Вся жизнь - <br />
						<span className="header-title_mod">путешествие!</span>
					</h1>
				</div>
				<form className="search-widget_form">
					<div className="colums from-to">
						<div>
							<fieldset className="form_fieldset fieldset-direction">
								<div>
									<label htmlFor="search-to" className="form_fieldset__header">
										Направление
									</label>
								</div>
								<div>
									<input
										className="input-place"
										type="text"
										id="search-to"
										placeholder="Куда"
									/>
								</div>
							</fieldset>
						</div>
						<div>
							<img src={cerkle} alt="" />
						</div>
						<div>
							<div>
								<input
									className="input-place"
									type="text"
									id="search-from-location"
									placeholder="Откуда"
								/>
							</div>
						</div>
					</div>
					<div className="colums departure-date">
						<div>
							<label htmlFor="search-date-from" className="date-lable">
								Дата
							</label>
							<input
								className="calendar-search"
								type="text"
								id="search-date-from"
								placeholder="ДД/ММ/ГГ"
							/>
						</div>
						<div>
							<input
								className="calendar-search"
								type="text"
								id="search-date-to"
								placeholder="ДД/ММ/ГГ"
							/>
						</div>
					</div>
					<div className="found-tickets">
						<button type="submit" className="btn-1">
							НАЙТИ БИЛЕТЫ
						</button>
					</div>
				</form>
			</div>
			<div className="header-separator">
				<section className="header-strip">
					<span className="strip-bar" value="50" max="100"></span>
				</section>
			</div>
		</section>
	);
};

export default HeaderIndex;