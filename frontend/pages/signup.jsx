import { Button, Center, Input, Spinner, useColorMode } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useSignup } from "../hooks/useSignup";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../hooks/useAuthContext";

const Signup = () => {
  const { colorMode } = useColorMode();

  const router = useRouter();

  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, []);

  const usernameRef = useRef(null);
  const fullnameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const { error, isLoading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(
      emailRef.current.value,
      passwordRef.current.value,
      usernameRef.current.value,
      fullnameRef.current.value
    );
  };

  if (isLoading) {
    return (
      <Center h="100vh" w="100vw">
        <Spinner size="lg" />
      </Center>
    );
  }

  return (
    <div>
      <Layout title="Bloggy || Signup" description="Bloggy signup page" />
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className={`${
            colorMode === "light"
              ? "!border-gray-300 !bg-white/50"
              : "!border-gray-50/70 !bg-[#2D3748]/50"
          } border-[1px] py-10 px-16 rounded-lg space-y-3`}
        >
          <div className="flex items-center mb-5 justify-center">
            <Link href="/">
              <a>
                <Image src="/images/BloggyText.svg" height={100} width={400} />
              </a>
            </Link>
          </div>

          <Input
            type="email"
            width="md"
            variant="outline"
            placeholder="Email"
            display="block"
            ref={emailRef}
          />

          <Input
            type="text"
            width="md"
            variant="outline"
            placeholder="Fullname"
            display="block"
            required
            ref={fullnameRef}
          />

          <Input
            type="text"
            width="md"
            variant="outline"
            placeholder="Username"
            display="block"
            required
            ref={usernameRef}
          />

          <Input
            type="password"
            width="md"
            variant="outline"
            placeholder="Password"
            display="block"
            required
            ref={passwordRef}
          />

          <Button
            type="submit"
            disabled={isLoading}
            className="hover:!bg-[#4A18D7] !bg-[#5d2ee0] !w-full text-white"
          >
            Sign up
          </Button>
          <p className="text-center">
            Already have an account?{" "}
            <span className="font-medium text-[#5d2ee0]">
              <Link href="/login">Log in</Link>
            </span>
          </p>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
