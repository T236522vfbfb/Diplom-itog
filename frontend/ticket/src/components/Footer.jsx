import Footerphone from './assets/icons/Footerphone.svg';
import footerarrow from './assets/icons/footer-arrow.svg';
import footerF from './assets/icons/footer-F.svg';
import footerG from './assets/icons/footer-G.svg';
import footerin from './assets/icons/footer-n.svg';
import footermail from './assets/icons/footer-mail.svg';
import footerskype from './assets/icons/footer-skype.svg';
import footerTwit from './assets/icons/footer-Twit.svg';
import footerVector from './assets/icons/footer-Vector.svg';
import footeryoutube from './assets/icons/footer-youtube.svg';


const Footer = () => {
    return (
			<footer className="footer" id="footer-contact">
				<div className="container footer-container">
					<div className="footer-contact contact">
						<p className="сontact-title">Свяжитесь с нами</p>
						<ul className="contact-list">
							<li className="contact-item">
								<a
									className="contact-link"
									href="tel:8 (800) 000 00 00"
									target="_blank"
								>
									<img
										src={Footerphone}
										alt="Телефон"
										className="contact-image"
									/>
									<p className="contact-desk">8 (800) 000 00 00</p>
								</a>
							</li>
							<li className="contact-item">
								<a
									className="contact-link"
									href="mailto:inbox@mail.ru"
									target="_blank"
								>
									<img src={footermail} alt="Email" className="contact-image" />
									<p className="contact-desk">inbox@mail.ru</p>
								</a>
							</li>
							<li className="contact-item">
								<a className="contact-link" href="Skype" target="_blank">
									<img
										src={footerskype}
										alt="Skype"
										className="contact-image"
									/>
									<p className="contact-desk">tu.train.tickets</p>
								</a>
							</li>

							<li className="contact-item">
								<div className="contact-link">
									<img
										src={footerVector}
										style="margin-right: 10px;"
										alt="Адрес на карте"
										className="contact-image"
									/>
									<p className="contact-desk">
										г. Москва <br />
										ул. Московская <br />
										27-35 555 555
									</p>
								</div>
							</li>
						</ul>
					</div>

					<div className="footer-subscribe_col2">
						<div className="footer-subscribe">
							<p className="subscribe-title">Подписка</p>
							<p className="subscribe-subtitle">Будьте в курсе событий</p>
							<input type="text" placeholder="e-mail" />
							<button type="submit">ОТПРАВИТЬ</button>
						</div>

						<div className="social-media-communication">
							<p className="subscribe-title">Подписывайтесь на нас</p>
							<ul className="media-social-link">
								<li className="subscribe-social-item">
									<a className="social-link" href="https://www.youtube.com">
										<img src={footeryoutube} alt="YouTube" />
									</a>
								</li>
								<li className="subscribe-social-item">
									<a className="social-link" href="https://www.linkedin.com">
										<img src={footerin} alt="LinkedIn" />
									</a>
								</li>
								<li className="subscribe-social-item">
									<a className="social-link" href="https://www.google.com">
										<img src={footerG} alt="Google+" />
									</a>
								</li>
								<li className="subscribe-social-item">
									<a className="social-link" href="https://www.facebook.com">
										<img src={footerF} alt="Facebook" />
									</a>
								</li>
								<li className="subscribe-social-item">
									<a className="social-link" href="https://twitter.com">
										<img src={footerTwit} alt="Twitter" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="decorate-line">
					<section className="line">
						<span className="strip-bar"></span>
					</section>

					<div className="container">
						<div className="footer-copyright">
							<div className="container-copyright">
								<a className="copyright-logo-link" href="">
									Лого
								</a>

								<button className="copyright-btn" type="button">
									<img src={footerarrow} alt="Стрелка" />
								</button>

								<p className="copyright-info">2024 WEB</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
  }
  
  export default Footer



