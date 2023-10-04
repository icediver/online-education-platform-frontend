"use client";

import Button from "@/components/ui/button/Button";
import Field from "@/components/ui/field/Field";
import Loader from "@/components/ui/loader/Loader";
import { useActions } from "@/hooks/useActions";
import { useAuth } from "@/hooks/useAuth";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { IEmailPassword } from "@/store/user/user.interface";
import { validEmail } from "@/utils/valid-email";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IAuth {}
export default function Auth({}: IAuth) {
  useAuthRedirect();
  const { isLoading } = useAuth();
  const { login, register } = useActions();
  const [type, setType] = useState<"login" | "register">("login");
  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEmailPassword>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
    if (type === "login") {
      login(data);
    } else {
      register(data);
    }
    reset();
  };
  return (
    <section className="flex justify-center items-center h-full max-h-[calc(100vh_-_16rem)]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-lg bg-gray-500/10 border-gray-100/20 border -mt-20 shadow-sm p-8"
      >
        <h1 className="capitalize text-center mb-4">{type}</h1>
        {isLoading ? <Loader /> : <></>}
        <Field
          {...formRegister("email", {
            required: "Email is required",
            pattern: {
              value: validEmail,
              message: "Please enter a valid email adress",
            },
          })}
          placeholder="Email"
          error={errors.email?.message}
        />
        <Field
          {...formRegister("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Min length should more than 6 symbols!",
            },
          })}
          type="password"
          placeholder="Password"
          error={errors.password?.message}
        />

        <Button>{"Let's go!"}</Button>
        <div>
          <button
            type="button"
            className="inline-block opacity-20 mt-3"
            onClick={() => setType(type === "login" ? "register" : "login")}
          >
            {type === "login" ? "Register" : "Login"}
          </button>
        </div>
      </form>
    </section>
  );
}
