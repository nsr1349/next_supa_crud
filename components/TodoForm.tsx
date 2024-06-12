'use client'

import { useState } from "react";

export default function TodoForm() {
    return (
        <form className="shadow-md p-3 w-96 rounded-md flex flex-col gap-2">
            <h1 className="font-bold">새 글쓰기</h1>
            <input type="text" className="bg-blue-100 rounded-sm" />
            <input type="text" className="bg-blue-100 rounded-sm" />
            <input type="file" accept="" className="bg-blue-100 rounded-sm" />
            <button className="bg-slate-100">
                올리기
            </button>
        </form>
    );
}
