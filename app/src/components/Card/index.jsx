import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useLocalStorage } from 'react-use'

const validationSchema = yup.object().shape({
    homeTeamScore: yup.string().required(),
    awayTeamScore: yup.string().required()
})
let dataAtual = new Date().toISOString()

export const Card = ({ hora, disabled =false, gameId, homeTeam, awayTeam, homeTeamScore=0, awayTeamScore=0, gameTime }) => {
    const [auth] = useLocalStorage('auth')
    const formik = useFormik({
        onSubmit: (values) => {
            if((hora >= dataAtual)){
            axios({
                method: 'post',
                baseURL: import.meta.env.VITE_API_URL,
                url: '/hunches',
                headers: {
                    authorization: `Bearer ${auth.acessToken}`
                },
                data: {
                    ...values,
                    gameId
                }
            })
            }else{
                alert("Não foi possivel realizar o palpite")
            }
        },
        initialValues: {
            homeTeamScore,
            awayTeamScore
        },
        validationSchema
    })

    return (
        <div className='rounded-xl border border-gray-300 p-4 text-center space-y-4'>
            <span className='text-sm md:text-base text-gray-700 font-bold'>{gameTime}</span>
                    
            <form className='flex space-x-4 justify-center items-center'>

                <span className='uppercase'>{homeTeam}</span>
                <img src={`/img/flags/${homeTeam}.png`} />
                    
                <input
                 className='bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center'
                 type="number" min='0' max='99'
                 name='homeTeamScore'
                 value={formik.values.homeTeamScore} 
                 onChange={formik.handleChange}
                 onBlur={formik.handleSubmit}
                 disabled={disabled}
                  />

                <span className='text-red-500 font-bold '>X</span>
                
                <input 
                className='bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center'
                type="number" min='0'max='99' 
                name='awayTeamScore'
                value={formik.values.awayTeamScore}
                onChange={formik.handleChange}
                onBlur={formik.handleSubmit}
                disabled={disabled}
                 />

                <img src={`/img/flags/${awayTeam}.png`} />
                <span className='uppercase'>{awayTeam}</span>
            </form>
        </div>
    )
}
