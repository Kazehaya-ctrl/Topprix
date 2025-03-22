import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebaseProvider";

export default function FacebookAuthButton() {
    const navigate = useNavigate();
    return (
        <div className="mt-6 flex justify-center">
            <button
                type="button"
                className="flex hover:scale-105 transition-transform  items-center justify-center w-full py-1 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100"
            >
                <img
                    src="/facebook.svg"
                    alt="Facebook Logo"
                    className="w-5 h-5 mr-2"
                />
                Facebook
            </button>
        </div>
    );
}
