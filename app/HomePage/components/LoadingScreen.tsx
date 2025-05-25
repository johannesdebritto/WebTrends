import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "./loading.json";

export default function LoadingSection() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="w-40 h-40">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
}
