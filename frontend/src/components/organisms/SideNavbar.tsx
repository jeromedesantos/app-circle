import { Link, useNavigate } from "react-router-dom";
import { Alert, Logo } from "../atoms";
import { Heart, House, LogOut, UserRoundSearch } from "lucide-react";
import { useDispatch } from "react-redux";
import { clearToken } from "../../redux/slices/token";
import { useMutation } from "@tanstack/react-query";
import { logoutUser, usersKeys } from "../../queries/user";
import { isAxiosError } from "axios";

export function SideNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: usersKeys.all,
    mutationFn: logoutUser,
    onSuccess: () => {
      dispatch(clearToken());
      navigate("/login");
    },
  });

  function handleLogout() {
    mutate();
  }

  return (
    <div className="w-60 lg:w-xs xl:w-250">
      <div className="fixed z-30 xl:px-10 py-10 w-25 xl:w-xs h-full bg-zinc-900">
        {isError && (
          <Alert variant="danger">
            {isAxiosError(error) && error.response
              ? error.response.data.message
              : error.message}
          </Alert>
        )}
        <div className="flex flex-col gap-15">
          <Logo className="text-5xl xl:block hidden" />
          <div className="flex flex-col flex-1 gap-70">
            <div className="flex flex-col w-fit gap-5">
              <Link
                to="/"
                className={`text-zinc-300 font-bold text-lg flex items-center gap-2 px-10 py-2 rounded-2xl hover:bg-zinc-800 duration-300`}
              >
                <House />
                <p className="xl:block hidden">Home</p>
              </Link>
              <Link
                to="/search"
                className="text-zinc-300 font-bold text-lg flex items-center gap-2 px-10 py-2 rounded-2xl hover:bg-zinc-800 duration-300"
              >
                <UserRoundSearch />
                <p className="xl:block hidden">Search</p>
              </Link>
              <Link
                to="/follows"
                className="text-zinc-300 font-bold text-lg flex items-center gap-2 px-10 py-2 rounded-2xl hover:bg-zinc-800 duration-300"
              >
                <Heart />
                <p className="xl:block hidden">Follows</p>
              </Link>
              {/* <Link
                to="/"
                className="text-zinc-300 font-bold text-lg flex items-center gap-2 px-10 py-2 rounded-2xl hover:bg-zinc-800 duration-300"
              >
                <CircleUser />
                <p>Profile</p>
              </Link> */}
            </div>
            <div className="w-fit">
              <button
                className={`${
                  isPending ? "animate-pulse text-zinc-500" : "text-zinc-300"
                } font-bold text-lg flex w-full items-center gap-2 px-10 py-2 rounded-2xl hover:bg-zinc-800 duration-300`}
                onClick={handleLogout}
                disabled={isPending}
              >
                <LogOut />
                <p className="xl:block hidden">
                  {isPending ? "Logging out..." : "Logout"}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
