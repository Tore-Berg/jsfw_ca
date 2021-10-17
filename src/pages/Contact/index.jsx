import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "../../components/Heading";

export default function Contact() {
  const schema = yup.object().shape({
    first_name: yup
      .string()
      .required("Please enter your first name")
      .min(3, "At least 3 characters"),
    last_name: yup
      .string()
      .required("Please enter your last name")
      .min(4, "At least 4 characters"),
    email: yup
      .string()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid email"
      ),
    enquiry: yup
      .string()
      .required("Please let us know what we can do for you.")
      .min(10, "Message must be least 10 characters"),
    subject: yup.string().required("Please select a subject"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <>
      <Heading title={`What's up?`} />
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          {...register("first_name")}
          placeholder="Enter your first name"
        />
        {errors.first_name && (
          <span style={{ color: "red" }}>{errors.first_name.message}</span>
        )}
        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          {...register("last_name")}
          placeholder="Enter your last name"
        />
        {errors.last_name && (
          <span style={{ color: "red" }}>{errors.last_name.message}</span>
        )}
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          {...register("email")}
          placeholder="Your email adress"
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email.message}</span>
        )}
        <label htmlFor="enquiry">Enquiry</label>
        <textarea
          type="text"
          {...register("enquiry")}
          placeholder="Let us know what's on your mind?"
        />
        {errors.enquiry && (
          <span style={{ color: "red" }}>{errors.enquiry.message}</span>
        )}
        <label htmlFor="subject">Please select a Subject</label>
        <select {...register("subject")}>
          <option placeholder="Select one"></option>
          <option>Shipping</option>
          <option>Returns</option>
        </select>
        {errors.subject && (
          <span style={{ color: "red" }}>{errors.subject.message}</span>
        )}
        <button type="submit">Send</button>
      </form>
    </>
  );
}
