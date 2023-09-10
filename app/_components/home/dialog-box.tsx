import { HTMLAttributes, useState } from "react";
import InputField from "../common/input-field";
import Button from "../common/button";

interface DialogBoxAttributes extends HTMLAttributes<HTMLDivElement> {
  onExit: () => void;
}

export default function DialogBox({ onExit, className }: DialogBoxAttributes) {
  const [value, setValue] = useState("");

  return (
    <div className={`${className} bg-white rounded-lg border-2 p-16`}>
      <form
        className="flex flex-col space-y-4 items-center"
        onSubmit={(evt) => {
          evt.preventDefault();
          console.log(value);
        }}
      >
        <h1 className="text-4xl">Join Waiting List</h1>
        <p>Enter your email and we&apos;ll notify you when the beta is out.</p>
        <InputField
          value={value}
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
    </div>
  );
}
