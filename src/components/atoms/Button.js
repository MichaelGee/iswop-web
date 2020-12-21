import React from 'react'
import tw, {styled} from 'twin.macro';

const Buttond = styled.button`

${tw`
text-center text-base font-medium rounded-md py-2 px-6 bg-blue-50 text-blue-500 hover:bg-blue-100 hover:text-blue-600 
`}

 
`



export const Button = () => {
    return (
        <div>
              <Buttond  type="submit">Buy now</Buttond>
        </div>
    )
}

export const OutlineButton =()=>{
    return(
        <div>
            <button class="text-center text-base font-medium rounded-md py-2 px-6 bg-gray-100 text-black " type="submit">Buy now</button>
        </div>
    )
}



