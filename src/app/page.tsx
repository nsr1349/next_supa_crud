const data = [
  {
    id : 1,
    title : '제목',
    content : '대충 내용입니다. 이것은 아무 의미가 없습니다. 자고 싶습니다.',
    image : 'https://i.namu.wiki/i/efzj9vpUMrGUlLXD-WT3iXlbM7YXH39nM4g5GdN-28Qhs6iZd0A9RJt13jWwWGuchOaZ1z3BaySoP-bu7q9_NA.webp'
  },
]


export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold my-5">Todo list</h1>
      <form></form>
      <ul>
        {
          data.map(({id, title, content, image })=>
            <li className="w-96 box-border rounded-xl overflow-hidden shadow-md" key={id}>
              <div className=""></div>
              <img className="max-h-96 w-full object-cover" src={image} alt="" />
              <div className="p-7 box-border">
                <h1 className="text-2xl font-bold mb-2">{title}</h1>
                <p>{content}</p>
              </div>
            </li>
          )
        }
      </ul>
    </main>
  );
}
