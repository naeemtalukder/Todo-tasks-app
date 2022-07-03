import React from 'react';

const Editor = (props) => {
    return (
        <div>
            <svg {...props} class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
            </svg>
        </div>
    );
};
{/* <div className='flex w-[100%] text-[1.3em] justify-between px-2'>
            <div className='flex items-center px-2 space-x-2'>
                <input type="checkbox" name="" id="" />
            </div>
            <div className='flex space-x-2 py-2'>
                <Editor className="w-5"></Editor>
                <DeleteIcon className="w-5"/>
            </div>
        </div>  */}
export default Editor;