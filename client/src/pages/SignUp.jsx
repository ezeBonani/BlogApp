import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* lado izquierdo */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-green-600 to-yellow-300 rounded-lg text-white">
              Zeki
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Este proyecto es un ejercicio. Logueate con tu mail y password o con
            Google.
          </p>
        </div>

        {/* lado derecho */}
        <div className="flex-1 mt-5">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="email" placeholder="your@email.com" id="email" />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="password" placeholder="password" id="password" />
            </div>
            <Button
              gradientMonochrome="lime"
              type="submit"
              className="text-white"
            >
              <span className="drop-shadow-2xl font-bold">Sign Up</span>
            </Button>
          </form>
          <div className="mt-2 flex gap-2 text-sm">
            <span>Have an account? </span>
            <Link to="/sign-in" className="text-blue-500">
              <span className="font-semibold">Sing-in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
