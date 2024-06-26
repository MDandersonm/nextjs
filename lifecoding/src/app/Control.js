"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const params = useParams();
  console.log("params:", params);
  const id = params.id;
  const router=useRouter();

  return (
    <ul>
      <li>
        <Link href="/create">create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={"/update/" + id}>update</Link>
          </li>
          <li>
            <input
              type="button"
              value="delete"
              onClick={() => {
                const options = {
                  method: "DELETE",
                };
                fetch("http://localhost:9999/topics/" + id, options)
                  .then((resp) => resp.json())
                  .then((result) => {
                    console.log(result);
                    router.push('/');
                    router.refresh();

                  });
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
}
