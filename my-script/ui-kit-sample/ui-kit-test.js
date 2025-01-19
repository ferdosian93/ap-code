import React, { useState } from "react";

function useReactToggle(active = false) {
  const [isActive, setIsActive] = useState(active);
  return [isActive, setIsActive];
}

export default useReactToggle;