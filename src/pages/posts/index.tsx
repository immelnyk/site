import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Card from "~/components/layout/Card";
import { api } from "~/utils/api";

const PostItem = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Card>
        <div className="flex flex-col gap-2">
          <div className="h-52 w-full rounded-[4px] bg-primary-light"></div>
          <p className="text-lg font-semibold text-primary">Test</p>
          <p className="line-clamp-2 text-copy">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, eligendi! Aut atque eligendi exercitationem ducimus?
            Voluptatibus magnam possimus sit voluptas.
          </p>
          <Link
            href="#"
            className="self-start rounded-lg bg-primary px-4 py-2 text-primary-content transition-all hover:bg-primary-dark"
          >
            Read more
          </Link>
        </div>
      </Card>
    </>
  );
};

export default function Posts() {
  const posts = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const session = useSession();

  const { mutate, error } = api.post.create.useMutation();

  return (
    <>
      {session.data && session.data.user.role === "admin" && (
        <button
          onClick={() =>
            mutate({
              name: "test",
            })
          }
        >
          Create post
        </button>
      )}
      <div className="grid grid-cols-auto-fit-200 gap-4">
        {posts.map((post) => (
          <PostItem key={post.id} />
        ))}
      </div>
    </>
  );
}
