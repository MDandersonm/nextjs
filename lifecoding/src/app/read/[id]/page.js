export default async function Read(props) {
  const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`, {
    cache: "no-store",
  });
  const topic = await resp.json();
  return (
    <>
       <h2>상세 내용</h2>
      <h3>{topic.title}</h3>
      {topic.body}
    </>
  );
}
