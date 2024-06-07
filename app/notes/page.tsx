import { createClient } from '@/utils/supabase/server'

export default async function Page() {
    const supabase = createClient()
    const { data: notes } = await supabase.from('notes').select()

    return <>
        <h1 className='font-bold text-3xl my-3'>노트들</h1>
        <ul className='flex flex-col gap-3'>
            {notes?.map(({id, title})=>
                <li className='p-4 rounded-xl shadow-md transition-all hover:bg-slate-100' key={id}>{title}</li>
            )}
        </ul>
    </>
}