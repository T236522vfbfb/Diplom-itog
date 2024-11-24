import Evgenii from './assets/icons/Evgenii.svg';
import Katay from './assets/icons/Katay.svg';
import tochki from './assets/icons/tochki.svg';


const Rewiews = () => {
    return (
      
        <main className="feedback-reviews">
			<div className="container">
				<div className="post-reviews">
               <p className="reviews-title">ОТЗЫВЫ</p>
			   		
				<div className="feedback-container">

					<div className="feedback-author-content">
					
                    <div className="reviews-item">    						
						<img src={Katay} alt="Фото Екатерины Вальновой" />
						<div>
							<h3 className="author-name">Екатерина Вальнова</h3>
							<p className="author-text">
								“Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.”
							</p>
						</div>
					</div>
                    		
					<div className="reviews-item">
						<img src={Evgenii} alt="Фото Евгения Стрыкало" />
						<div>
							<h3 className="author-name">Евгений Стрыкало</h3>
							<p className="author-text">
								“СМС-сопровождение до посадки. Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.”
							</p>
						</div>
					</div>

				</div>

				</div>
			</div>


			<div className="reviews-btns">
				<div className="reviews-btns_active"></div>
				<p><img src={tochki} alt="" /></p>
			</div>
			</div>
		</main>		  
      
    )
  }
  
  export default Rewiews