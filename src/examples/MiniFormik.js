import React from "react";

class MiniFormik extends React.Component {
	state = {
		values: this.props.initialValues || {},
		visited: {},
		errors: {},
	};

	handleInputChange = e => {
		const target = e.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		e.persist();

		this.setState(prevState => ({
			values:	{
				...prevState.values,
				[name]: value
			}
		}));
	};
	
	handleInputBlur = e => {
		const target = e.target;
		const name = target.name;

		e.persist();

		this.setState(prevState => ({
			visited:	{
				...prevState.visited,
				[name]: true
			}
		}));
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.values);
	};

	render() {
		return this.props.children({
			...this.state,
			handleInputChange: this.handleInputChange,
			handleInputBlur: this.handleInputBlur,
			handleSubmit: this.handleSubmit,
		});
	}
}

class ResrvationForm extends React.Component {
	render () {
		return (
			<MiniFormik
				initialValues={{
					name: "",
					essay: "Please write an essay about your favorite DOM element.",
					flavor: "Coconut",
					isGoing: true,
					numberOfGuests: 2,
				}}
				onSubmit={values => alert(JSON.stringify(values, null, 2))}
			>
				{props => {
					const {
						values,
						// visited,
						// errors,
						handleInputChange,
						handleSubmit,
						handleInputBlur
					} = props;

					return (<form onSubmit={handleSubmit}>
					<div className="form-control">
						<label>
							Name:
							<input
								name="name"
								type="text"
								value={values.name}
								onChange={handleInputChange}
								onBlur={handleInputBlur}
							/>
						</label>
					</div>

					<div className="form-control">
						<label>
							Essay:
							<textarea
								name="essay"
								value={values.value}
								onChange={handleInputChange}
								onBlur={handleInputBlur}
							/>
						</label>
					</div>

					<div className="form-control">
						<label>
							Pick your favorite flavor:
							<select
								name="flavor"
								value={values.flavor}
								onChange={handleInputChange}
								onBlur={handleInputBlur}
							>
								<option value="grapefruit">Grapefruit</option>
								<option value="lime">Lime</option>
								<option value="coconut">Coconut</option>
								<option value="mango">Mango</option>
							</select>
						</label>
					</div>

					<div className="form-control">
						<label>
							Is going:	
							<input
								name="isGoing"
								type="checkbox"
								checked={values.isGoing}
								onChange={handleInputChange}
								onBlur={handleInputBlur}
							/>
						</label>
						<br />
						<label>
							Number of guests:
							<input
								name="numberOfGuests"
								type="number"
								value={values.numberOfGuests}
								onChange={handleInputChange}
								onBlur={handleInputBlur}
							/>
						</label>
					</div>

					<input
						disabled={values.name === "" ? true : false}
						type="submit"
						value="Submit"
					/>
						<code><pre>{JSON.stringify(props, null, 2)}</pre></code>
				</form>);
				}}
			</MiniFormik>
		);
	}
}

export default ResrvationForm;

