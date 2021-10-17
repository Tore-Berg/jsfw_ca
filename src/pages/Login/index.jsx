import React from "react";
import Heading from "../../components/Heading";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import ValidationError from "../../components/common/FormError";
import { WP_BASE_URL, TOKEN_PATH } from "../../components/constants/Api";

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function Login() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    // console.log(data);

    try {
      const response = await axios.post(WP_BASE_URL + TOKEN_PATH, data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      setAuth(response.data);
      history.push("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <>
      <Heading title="Login" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="login-form"
        disabled={submitting}
      >
        {loginError && (
          <ValidationError>{`Login failed. Please try again.`}</ValidationError>
        )}
        <input
          name="username"
          placeholder="Username"
          {...register("username")}
        />
        {/* {errors.username && (
              <span style={{ color: "red" }}>{errors.username.message}</span>
            )} */}
        <input
          name="password"
          placeholder="Password"
          {...register("password")}
          type="password"
        />
        {/* {errors.password && (
              <span style={{ color: "red" }}>{errors.password.message}</span>
            )} */}
        <button type="submit">{submitting ? "Loggin in..." : "Login"}</button>
      </form>
    </>
  );
}
