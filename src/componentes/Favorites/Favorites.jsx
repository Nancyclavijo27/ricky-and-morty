import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Favorites = () => {
  const { favorite } = useAuth0();

  return (
    <button onClick={() => favorite({ returnTo: window.location.origin })}>
      ❤️
    </button>
  );
};