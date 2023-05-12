import styles from "./page.module.css";
import { api } from "@/utils/api";
import { useState } from "react";
import { SignInButton, useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [subMsg, setSubMsg] = useState("");
  const [privMsg, setPrivMsg] = useState("");

  api.messages.onAdd.useSubscription(
    { message: "hello world" },
    {
      onData(msg) {
        setSubMsg(msg);
      },
      onError(err) {
        console.error("Subscription error:", err);
      },
    }
  );

  const { isLoading, data } = api.messages.add.useQuery({
    message: "hello world",
  });

  if (!isLoading && data) {
    setPrivMsg(data);
  }

  return (
    <main className={styles.main}>
      {isSignedIn ? (
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                width: 80,
                height: 80,
              },
            },
          }}
        />
      ) : (
        <SignInButton mode={"modal"}>
          <button>sign in</button>
        </SignInButton>
      )}
      <div style={{ marginTop: "24px" }}>
        <span>Sub msg:</span>
        <span style={{ marginLeft: "8px" }}>{subMsg}</span>
      </div>
      <div>
        <span>Private msg:</span>
        <span style={{ marginLeft: "8px" }}>{privMsg}</span>
      </div>
    </main>
  );
}
