import React from 'react'
type Props  = {
  total_undergrad: { YEAR: number; 'TOTAL STUDENTS': number; 'TOTAL BLACK STUDENTS': number }[], 
  tickValues: number[] 
}

const UndergradPGraph: React.FC<Props> = ({total_undergrad, tickValues}) => {
  return (
    <div className="relative z-0">
            <div className="w-full overflow-x-auto">
                <div className="min-w-[1500px] px-4n text-center">
                    <h3 className='text-lg underline'>Growth of the Total Black Undergraduate Student Population vs Total Undergraduates</h3>
                </div>
            </div>
        </div>
  )
}

export default UndergradPGraph