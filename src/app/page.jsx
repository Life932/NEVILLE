import { Heart } from "lucide-react";
import "./globals.css";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 bg-base-200 text-primary">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Charity</h1>
        <p className="mb-8 text-lg">We are building something fascinating!</p>

        {/* DaisyUI button with a Lucide React Icon */}
        <button className="btn btn-primary text-color-primary">
          <Heart className="w-5 h-5" />
          Donate Now
        </button>
      </div>
    </main>
  );
}
