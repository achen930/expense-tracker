import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { userQueryOptions } from "@/lib/api";

export const Route = createFileRoute("/_authenticated/profile")({
  component: Profile,
});

function Profile() {
  const { isPending, error, data } = useQuery(userQueryOptions);

  if (isPending) return "loading";
  if (error) return "not logged in";

  return (
    <div className="p-2">
      <p>Hello {data.user.given_name}</p>
      <a href="/api/logout">Logout!</a>
    </div>
  );
}
