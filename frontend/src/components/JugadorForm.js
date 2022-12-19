import React from "react";
import { Formik,Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const JugadorForm = (props) => {
    console.log(props);
    return (
         <div className="form-wrapper">
            <Formik {...props} >
            <Form>
                <FormGroup>
                    Id
                <Field name="id" type="number" 
                    className="form-control" />
                <ErrorMessage
                    name="id"
                    className="d-block invalid-feedback"
                    component="span"
                />
                </FormGroup>
                <FormGroup>
                    Name
                <Field name="name" type="text" 
                    className="form-control" />
                <ErrorMessage
                    name="name"
                    className="d-block invalid-feedback"
                    component="span"
                />
                </FormGroup>
                <Button variant="danger" size="lg" 
                block="block" type="submit">
                {props.children}
                </Button>
            </Form>
            </Formik>
        </div>
    );
};

export default JugadorForm;