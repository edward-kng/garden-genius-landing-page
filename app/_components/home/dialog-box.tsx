import { HTMLAttributes, useState } from "react";
import InputField from "../common/input-field";
import Button from "../common/button";

interface DialogBoxAttributes extends HTMLAttributes<HTMLDivElement> {
  onExit: () => void;
}

export default function DialogBox({ onExit, className }: DialogBoxAttributes) {
  const [value, setValue] = useState("");
  const [success, setSuccess] = useState(false);

  return (
    <div
      className={`${className} bg-white rounded-lg border-2 p-16 flex flex-col items-center space-y-4`}
    >
      <h1 className="text-4xl">Join Waiting List</h1>
      {success ? (
        <p>Registration successful!</p>
      ) : (
        <form
          className="flex flex-col space-y-4 items-center"
          onSubmit={(evt) => {
            evt.preventDefault();
            fetch(
              `${
                process.env.NODE_ENV === "development"
                  ? "http://localhost:3000"
                  : "https://garden-genius.vercel.app"
              }/api/join-waiting-list`,
              {
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ email: value }),
              },
            );
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
              setValue("");
              onExit();
            }, 1000);
          }}
        >
          <p>
            Enter your email and we&apos;ll notify you when the beta is out.
          </p>
          <InputField
            type="email"
            value={value}
            required={true}
            onChange={(evt) => {
              setValue(evt.target.value);
            }}
            placeholder="Email"
          />
          <div className="grid grid-cols-2 gap-2 w-full">
            <Button
              type="button"
              variant="transparent"
              className="w-full"
              onClick={onExit}
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full">
              Sign Me Up
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
