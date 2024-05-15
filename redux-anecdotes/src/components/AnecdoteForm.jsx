import { useDispatch } from "react-redux"
import { createAnecdotes } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"



const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdotes(content))
        dispatch(setNotification(`New anecdote "${content}"!`, 5))
      }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name='anecdote' />
                </div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm