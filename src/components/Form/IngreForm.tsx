import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Schema from '../yup/Schema';
import TitleIngre from '../Title/TitleIngre';



interface IngreForm{
  name: string 
}

function IngreForm() {
  return (
    <>
      <Formik 
          validationSchema={Schema}
          onSubmit={
            (values: IngreForm) =>  {
              console.log(values)
            }
          }
          validateOnMount
          initialValues={{
            name: '',
          }}
         render={({ values, isValid }) => (
            <Form>
              <div>
                <TitleIngre />
                <label>Nome do Ingrediente</label>
                <Field name="name" type="text" ></Field>
                <ErrorMessage name="name" />
              </div>
              <button type="submit" disabled={!isValid}>Cadastrar Ingrediente</button>
            </Form>
         )}
      />
      
    </>
  );
}

export default IngreForm;
