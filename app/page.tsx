// import DeployButton from "../components/DeployButton";
// import AuthButton from "../components/AuthButton";
// import { createClient } from "@/utils/supabase/server";
// import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
// import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
// import Header from "@/components/Header";

// export default async function Index() {
//   const canInitSupabaseClient = () => {
//     // This function is just for the interactive tutorial.
//     // Feel free to remove it once you have Supabase connected.
//     try {
//       createClient();
//       return true;
//     } catch (e) {
//       return false;
//     }
//   };

//   const isSupabaseConnected = canInitSupabaseClient();

//   return (
//     <div className="flex-1 w-full flex flex-col gap-20 items-center">
//       <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
//         <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
//           <DeployButton />
//           {isSupabaseConnected && <AuthButton />}
//         </div>
//       </nav>

//       <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
//         <Header />
//         <main className="flex-1 flex flex-col gap-6">
//           <h2 className="font-bold text-4xl mb-4">Next steps</h2>
//           {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
//         </main>
//       </div>

//       <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
//         <p>
//           Powered by{" "}
//           <a
//             href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
//             target="_blank"
//             className="font-bold hover:underline"
//             rel="noreferrer"
//           >
//             Supabase
//           </a>
//         </p>
//       </footer>
//     </div>
//   );
// }


import { createClient } from '@/utils/supabase/server'
import TodoForm from '@/components/TodoForm'

export default async function Home() {
  const supabase = createClient()
  const { data: notes, error } = await supabase
  .from('notes')
  .select('*')
  .order('created_at', { ascending: false })

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold my-5">Todo list</h1>
      <TodoForm/>
      {/*  */}
      <ul>
        {
          notes?.map(({id, title, content, image })=>
            <li className="w-96 box-border rounded-xl overflow-hidden shadow-md m-3" key={id}>
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
      <img src="https://eoewvtnebxnlmzrpundc.supabase.co/storage/v1/object/public/note_image/0d16da9f-fab3-4acb-8a9a-e32673590827" alt="" />
    </main>
  );
}