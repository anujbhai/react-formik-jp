import React from "react";
import {
	Formik,
	Field,
	Form,
	FieldArray,
	ErrorMessage,
} from "formik";
import * as Yup from "yup";

import {Debug} from "../components/Debug";

const initialValues = {
	friends: [
		{
			name: "",
			email: "",
		},
	],
};

const Invitation = () => {
	return (
		<div className="formik-example">
			<h2>Invite friends</h2>

			<Formik
				initialValues={initialValues}
				onSubmit={values => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
					}, 500);
				}}
			>
				{({values, isSubmitting}) => (
					<Form>
						<FieldArray name="friends">
							{({push, remove}) => 

							<>
								{values.friends && values.friends.length > 0 && values.friends.map((friend, index) =>
								<div className="row" key={index}>
									<div className="col">
										<Field name={`friends[${index}].name`}>
											{({field, form}) => (
												<input {...field} type="text" placeholder="Jane Doe" />
											)}
										</Field>
									</div>

									<div className="col">
										<Field name={`friends[${index}].email`} type="email" placeholder="jane@example.com" />
									</div>

									<div className="col">
										<button type="button" onClick={() => remove(0)}>X</button>
									</div>
								</div>
								)}

								<button
									type="button"
									onClick={() => push({name: "", email: ""})}
									className="secondary"
								>Add Friend</button>
							</>
							}
						</FieldArray>

						<button type="submit" disabled={isSubmitting}>Invite</button>

						<Debug />
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Invitation;

