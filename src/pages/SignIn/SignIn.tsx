import { useMainContext } from "../../contexts/MainContext"
import { useGoogleLogin, googleLogout } from "@react-oauth/google"


export default function SignIn() {
  const { handleLoginSuccess, handleUpdateUserData } = useMainContext()

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const getUserProfileData = async (accessToken: string) => {
        const headers = new Headers()
        headers.append("Authorization", `Bearer ${accessToken}`)
        const response = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers,
          }
        )
        return await response.json()
      }

      const data = await getUserProfileData(tokenResponse.access_token)
      const body = {
        name: data.name,
        email: data.email,
        picture: data.picture,
      }
      
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/api/v1/users`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        )
  
        const userData = await res.json()
        alert(userData.message)
        handleUpdateUserData(body)
        handleLoginSuccess()
      } catch (err) {
        console.error(err)
      }
    },
    onError: () => {
      console.log("Login Failed")
    },
  })

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="grid h-screen lg:h-auto place-items-center">
        <div className="w-full sm:w-[400px]">
          <div className="text-2xl font-bold text-center sm:text-start">
            Welcome back
          </div>
          <div className="text-center sm:text-start">
            Welcome back! Please enter your details.
          </div>
          <div className="flex flex-col gap-4 px-5 sm:px-0">
            <form className="mt-5 mb-2 flex flex-col gap-4" action="">
              <div className="flex flex-col">
                <label htmlFor="sign-in-email">Email</label>
                <input
                  className="border p-2 rounded-lg"
                  type="text"
                  id="sign-in-email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="sign-in-password">Password</label>
                <input
                  className="border p-2 rounded-lg"
                  type="text"
                  id="sign-in-password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" id="remember-login" />
                  <label htmlFor="remember-login">Remember for 30 days</label>
                </div>
                <a className="text-primary" href="#">
                  Forgot Password
                </a>
              </div>
              <button
                className="bg-primary text-white py-2 rounded-lg"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <button
              onClick={() => login()}
              className="flex gap-4 justify-center border rounded-lg py-2"
            >
              <img src="/google.svg" alt="" />
              <div className="font-semibold">Sign in with Google</div>
            </button>
            <div className="text-center">
              Don't have an account?{" "}
              <a className="text-primary" href="">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        className="hidden lg:block w-full object-center object-cover h-screen"
        src="/sign-in-image.png"
        alt=""
      />
    </div>
  )
}
