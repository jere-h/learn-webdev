import React from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

	function RenderDish({dish}) {  // same function as gone through in the videos
		if (dish != null) {
			return (
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		}
		else {
			return(
				<div></div>
			);
		}
	}

	function RenderComments({dish}) {  // adapted from above function, added nested if-else statements
		if (dish != null) {
			if(dish.comments != null) {
				const commentlines = dish.comments.map((msg) => {
					var date = new Date(msg.date)
					return(
						<li key={msg.id}>
							<p><i>{msg.comment}</i></p>
							<p>-- {msg.author}, {date.toLocaleString('default', { dateStyle: 'medium' })}</p>
						</li>
					);
				});
				return (
					<Media body>
						<h4 className="mt-1">Comments</h4>
						<ul className="list-unstyled">
							{commentlines}
						</ul>
					</Media>
				);
			}
			else {
				return(
					<div></div>
				);
			}
		}
		else {
			return(
				<div></div>
			);
		}
	}

	const DishDetail = (props) => {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<RenderDish dish={props.dish} />
					</div>
					<div className="col-12 col-md-5 m-1">
						<RenderComments dish={props.dish} />
					</div>
				</div>
			</div>
		);
	}


export default DishDetail;
