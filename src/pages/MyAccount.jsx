import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">

            <div className='Imagecontainer'>
              <img src="https://www.prodirectsport.com/-/media/prodirect/project/en/soccer/pdp-content/boots/nike/281475---nike-phantom-gx-blaze-df/etab-1-df-fg.jpg" alt="" />
			</div>

			<div className='Imagecontainertwo'>
              <img src="https://i.pinimg.com/564x/a7/62/65/a76265eed28b0ebd94c0f20c19854911.jpg" alt="" />
			</div>

			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Name</label>
						<p className="value">Peter Benjamin Parker </p>
						<label for="email" className="label">Email</label>
						<p className="value">theamazingspiderman@gmail.com</p>
						<label for="password" className="label">Password</label>
						<p className="value">*********</p>
					</div>
					<input type="submit" value="Edit" className="secondary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;