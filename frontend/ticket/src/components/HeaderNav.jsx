const HeaderNav = () => {
	return (
		<>
			<section className="logo-wrapper">
				<div className="container">
					<a className="header-logo">Лого</a>
				</div>
			</section>
			<nav>
				<div className="container">
					<ul className="header-menu">
						<li className="name">О нас</li>
						<li className="name">Как это работает</li>
						<li className="name">Отзывы</li>
						<li className="name">Контакты</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default HeaderNav;
