import { Icon } from '~/components/Icon'
import { addDays, format, subDays, formatISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const DateSelect = ({currentDate, onChange}) =>{
    //date iso 8601
    const prevDay = () => {
        const nextDate = subDays(new Date(currentDate), 1)
        onChange(formatISO(nextDate))
    }

    const nextDay = () => {
        const nextDate = addDays(new Date(currentDate), 1) 
        onChange(formatISO(nextDate))
    }

    return (
        <div className='flex space-x-4 justify-center items-center my-4'>
            <Icon name="arrowLeft" className="text-red-500 w-6" onClick={prevDay}/>
            <span className='font-bold'>{format(new Date(currentDate), "d 'de' MMMM", {locale: ptBR})}</span>
            <Icon name="arrowRight" className="text-red-500 w-6" onClick={nextDay}/>
        </div>
    )
}