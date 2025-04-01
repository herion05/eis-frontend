"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Server responded with: ${response.status}`);
    }

    (await cookies()).set({
      name: "auth_token",
      value: data.token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
    });
  } catch (err) {
    console.error(err);

    return {
      message: `Error: ${err.message}`,
      error: err,
    };
  }
  redirect("/dashboard");
}

export async function logout() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (token) {
    try {
      await fetch(`${process.env.BACKEND_URL}/api/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer: ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    } catch (err) {
      console.error("Logout Error:", err);
    }

    cookieStore.delete("auth_token");
    redirect("/login");
  }
}
