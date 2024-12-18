import listicon1 from "../assets/icons/listicon-1.svg";
import listicon2 from "../assets/icons/listicon-2.svg";
import listicon3 from "../assets/icons/listicon-3.svg";

const HowItWorks = () => {
	return (
		<section className="work">
			<div className="container">
				<div className="main-work">
					<h2 className="title-work">Как это работает</h2>
					<a href="#" className="btn-2 btn-text-white">
						Узнать больше
					</a>
				</div>
				<div className="work-list">
					<div className="list-item">
						<img src={listicon1} alt="" />
						<p>Удобный заказ на сайте</p>
					</div>
					<div className="list-item">
						<img src={listicon2} alt="" />
						<p>Нет необходимости ехать в офис</p>
					</div>
					<div className="list-item">
						<img src={listicon3} alt="" />
						<p>Огромный выбор направлений</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
