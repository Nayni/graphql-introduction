import React from "react";
import { Formik, Form, FieldConfig, useField } from "formik";
import * as S from "./styles";

const initialFormValues = {
  title: "",
  body: "",
  author: "",
};

export type CreatePostFormValues = typeof initialFormValues;

export type CreateFormProps = {
  onSubmit: (values: CreatePostFormValues) => Promise<void>;
};

function CreatePostForm({ onSubmit }: CreateFormProps) {
  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmit(values).then(() => {
          setSubmitting(false);
          resetForm();
        });
      }}
    >
      <Form>
        <S.FormLayout>
          <S.FormTitle>Create new post</S.FormTitle>
          <S.FormControl>
            <S.InputLabel>Author</S.InputLabel>
            <FormikTextInputField name="author" type="number" />
          </S.FormControl>
          <S.FormControl>
            <S.InputLabel>Title</S.InputLabel>
            <FormikTextInputField name="title" type="text" />
          </S.FormControl>
          <S.FormControl>
            <S.InputLabel>Body</S.InputLabel>
            <FormikTextAreaField name="body" rows={5} />
          </S.FormControl>
          <S.SubmitButton type="submit">
            <S.SubmitButtonLabel>Create post</S.SubmitButtonLabel>
          </S.SubmitButton>
        </S.FormLayout>
      </Form>
    </Formik>
  );
}

type FormikTextAreaFieldProps = Pick<FieldConfig, "name"> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function FormikTextAreaField({ name, ...rest }: FormikTextAreaFieldProps) {
  const [field] = useField({ name });

  return <S.TextArea {...rest} {...field} />;
}

type FormikTextInputFieldProps = Pick<FieldConfig, "name"> &
  React.InputHTMLAttributes<HTMLInputElement>;

function FormikTextInputField({ name, ...rest }: FormikTextInputFieldProps) {
  const [field] = useField({ name });

  return <S.Input {...rest} {...field} />;
}

export default CreatePostForm;
