import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

function MobileNavLinks() {
  const { logout } = useAuth0();
  return (
    <div className="flex flex-col gap-5 items-baseline content-center flex-1">
      <Link
        className="flex flex-col bg-white items-center font-bold hover:text-orange-500"
        to="/order-status"
      >
        Order status
      </Link>
      <Link
        className="flex flex-col bg-white items-center font-bold hover:text-orange-500"
        to="/manage-restaurant"
      >
        Manage restaurant
      </Link>
      <Link
        className="flex flex-col bg-white items-center font-bold hover:text-orange-500"
        to="/user-profile"
      >
        User profile
      </Link>
      <Button
        className="flex flex-1 w-full items-center font-bold hover:bg-gray-500"
        onClick={() => logout()}
      >
        Log Out
      </Button>
    </div>
  );
}

export default MobileNavLinks;
