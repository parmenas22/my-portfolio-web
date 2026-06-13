import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation — "PM" avatar shown in the browser tab
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: "-0.05em",
          background: "#0d9488",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
        }}
      >
        PM
      </div>
    ),
    {
      ...size,
    }
  );
}
