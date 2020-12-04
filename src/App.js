import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './App.css';

class App extends React.Component {

    render() {
        const Login = Yup.object().shape({
            firstName: Yup.string()
                .min(2, 'Mínimo de caracteres(2)')
                .max(100, 'Máx de caracteres(100)')
                .required('Esse campo é obrigatório'),

            lastName: Yup.string()
                .min(2, 'Mínimo de caracteres(2)')
                .max(100, 'Máx de caracteres(100)')
                .required('Esse campo é obrigatório'),
        });

        return (
            <>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                    }}

                    validationSchema={Login}

                    onSubmit={values => {
                        console.log(values);
                    }}

                >
                    {({ errors, touched }) => (
                        <Form className="form">
                            <p className="text">Nome</p>
                            <Field name="firstName" placeholder="Informe seu nome" className="Field" />
                            { errors.firstName && touched.firstName ? (
                                <div className="error">* {errors.firstName}</div>
                            ) : null}
                            <p className="text">Sobrenome</p>
                            <Field name="lastName" placeholder="Informe seu sobrenome" className="Field" />
                            { errors.lastName && touched.lastName ? (
                                <div className="error">* { errors.lastName}</div>
                            ) : null}
                            <button type="submit" className="btn">Enviar</button>
                        </Form>
                    )}

                </Formik>
            </>
        )
    }
}

export default App;