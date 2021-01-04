import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

	function RenderDish({dish}) {  // same function as gone through in the videos
		return (
			<div className="col-12 col-md-5 m-1">
				<Card>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}

	function RenderComments({comments}) {
		if(comments != null) {
			return (
				<div className="col-12 col-md-5 m-1">
					<h4 className="mt-1">Comments</h4>
					<ul className="list-unstyled">
						{comments.map((comment) => {
							var date = new Date(comment.date)
							return(
								<li key={comment.id}>
									<p><i>{comment.comment}</i></p>
									<p>-- {comment.author}, {date.toLocaleString('default', { dateStyle: 'medium' })}</p>
								</li>
							);
						 })
						}
					</ul>
				</div>
			);
		}
		else {
			return(
				<div></div>
			);
		}
	}

	const DishDetail = (props) => {
		if (props.dish != null) {
			return (
				<div className="container">
					<div className="row">
						<RenderDish dish={props.dish} />
						<RenderComments comments={props.dish.comments} />
					</div>
				</div>
			);
		}
		else {
			return(
				<div></div>
			);
		}

	}


export default DishDetail;
