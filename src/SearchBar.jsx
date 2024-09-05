

export default function SearchBar(props) {
    const {search, setSearch} = props
    const submitHdl = (e) => {
        e.preventDefault()
    }

    const hdlInput = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submitHdl}>
                <input 
                    onChange={(e) => hdlInput(e)} 
                    type="text" 
                    placeholder="Type here" 
                    className="input input-bordered input-sm w-[500px] max-w-xs border-2 border-rose-600" />
            </form>
        </div>
    )
}