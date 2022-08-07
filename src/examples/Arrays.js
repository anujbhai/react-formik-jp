import React from "react";
import {
	Formik,
	Field,
	Form,
	FieldArray,
	ErrorMessage,
} from "formik";
import * as Yup from "yup";
import {EditorState} from "draft-js";

import {Debug} from "../components/Debug";
import {RichEditorExample} from "../components/RichEditor1";

const initialValues = {
	friends: [
		{
			name: "",
			email: "",
		},
	],
	editorState: EditorState.createEmpty(),
};

const Invitation = () => {
	return (
		<div className="formik-example">
			<h2>Invite friends</h2>

			<Formik
				initialValues={initialValues}
				validationSchema={Yup.object({
					friends: Yup.array().of(Yup.object({
						name: Yup.string().required("Name is required"),
						email: Yup.string()
						.email("Invalid email!")
						.required("Email is required"),
					}))
				})}
				onSubmit={values => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
					}, 500);
				}}
			>
				{({values, errors, touched, isSubmitting, handleBlur, setFieldValue}) => (
					<Form>
						<RichEditorExample
							onChange={setFieldValue}
							onBlur={handleBlur}
							editorState={values.editorState}
						/>
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
										<ErrorMessage name={`friends[${index}].name`}>
											{msg => <div className="field-error">{msg}</div>}
										</ErrorMessage>
									</div>

									<div className="col">
										<Field name={`friends[${index}].email`} type="email" placeholder="jane@example.com" />
										<ErrorMessage name={`friends[${index}].email`}>
											{msg => <div className="field-error">{msg}</div>}
										</ErrorMessage>
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

